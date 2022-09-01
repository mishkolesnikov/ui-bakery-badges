import React from 'react';
import './printer.css';

export class Printer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avatarFormat: 'portrait',
      members: props.members,
      badges: props.members.map(() => ({
        front: React.createRef(),
        back: React.createRef(),
      })),
      selected: props.selected,
      fieldsMapping: props.fieldsMapping,
      badge: props.badge,
      loading: false,
    };
  }

  handleFormatChange = (format) => {
    this.setState({
      avatarFormat: format,
    });
  };

  changeFormat() {
    this.handleFormatChange(
      this.state.avatarFormat === 'portrait' ? 'landscape' : 'portrait'
    );
  }

  print() {
    // create hidden iframe
    const oldFrame = document.getElementById('o-hidd-frame');
    if (oldFrame) {
      oldFrame.parentNode.removeChild(oldFrame);
    }
    const oHiddFrame = document.createElement('iframe');
    oHiddFrame.id = 'o-hidd-frame';
    oHiddFrame.style.position = 'fixed';
    oHiddFrame.style.visibility = 'hidden';
    document.body.appendChild(oHiddFrame);
    const w = oHiddFrame.contentWindow;
    // const w = window.open();

    // add needed styles, badge front and back elements to the iframe
    
    let styles = '';
    document.querySelectorAll('style').forEach(el => styles = styles + el.outerHTML);

    w.document.write(`
        <html>
        ${styles}
        <head>
          <link
            href="https://cdn.jsdelivr.net/gh/mishkolesnikov/ui-bakery-badges@main/font/Proxima_Nova_Webkit.css"
            rel="stylesheet"
          />
        </head>
        <body>
          ${this.state.badges
            .map((badge) => {
              return (
                badge.front.current.outerHTML + badge.back.current.outerHTML
              );
            })
            .join('')}
        </body>
        </html>`);

    // print iframe content right after all needed images loaded
    const linkEls = w.document.querySelectorAll('link[rel=stylesheet]');
    if (w.document.images.length > 0 || linkEls.lengh > 0 || w.document.fonts.size > 0) {
      this.setState({ loading: true });

      const linksAndImagesLoadingPromises = Array.from([...w.document.images, ...linkEls])
        .filter((img) => !img.complete)
        .filter((img) => img.src || img.href)
        .map(
          (img) =>
            new Promise((resolve) => {
              img.onload = img.onerror = () => {
                resolve();
              };
            })
        );
        
      Promise.all([
        ...linksAndImagesLoadingPromises,
        w.document.fonts.ready
      ]).then(() => {
        this.setState({ loading: false });
        w.print();
      });
    } else {
      w.print();
    }
  }

  render() {
    const badges = this.state.members.map((member, index) => (
      <div className="badge-container" key={member[this.state.fieldsMapping.uid]}>
        <div className="front">
          <span className="heading">Front</span>
          <div className="badge-side-container">
            <this.state.badge.front
              member={this.state.members[index]}
              avatarFormat={this.state.avatarFormat}
              fieldsMapping={this.state.fieldsMapping}
              ref={this.state.badges[index].front}
              onFormatChange={() => {}}/>
          </div>
        </div>
        <div className="back">
          <span className="heading">Back</span>
          <div className="badge-side-container">
            <this.state.badge.back
              member={this.state.members[index]}
              fieldsMapping={this.state.fieldsMapping}
              ref={this.state.badges[index].back}/>
          </div>
        </div>
      </div>
    ));

    const preview =
      this.state.selected !== undefined ? (
        <div>
          Preview
          <button onClick={() => this.changeFormat()}>
            Try Recrop Avatar
          </button>
          <div className="badge-container">
            <div className="front">
              <span className="heading">Front</span>
              <div className="badge-side-container">
                <this.state.badge.front
                  member={this.state.selected}
                  avatarFormat={this.state.avatarFormat}
                  fieldsMapping={this.state.fieldsMapping}
                  onFormatChange={(v) => this.handleFormatChange(v)}
                  preview/>
              </div>
            </div>
            <div className="back">
              <span className="heading">Back</span>
              <div className="badge-side-container">
                <this.state.badge.back
                  member={this.state.selected} fieldsMapping={this.state.fieldsMapping} preview />
              </div>
            </div>
          </div>
        </div>
      ) : (
        'Please click on one of the elements to see the preview'
      );

    const printButton =
      this.state.members.length === 0 ? (
        <div>
          <button disabled>Print ({this.state.members.length})</button>
          <span>Please select some records to print</span>
        </div>
      ) : (
        <button onClick={() => this.print()}>
          Print ({this.state.members.length})
        </button>
      );
    return this.state.loading ? (
      <div class="loader">Loading...</div>
    ) : (
      <div className='printer'>
        {printButton}
        <div className="preview">{preview}</div>
        <div className="to-print">{badges}</div>
      </div>
    );
  }
}