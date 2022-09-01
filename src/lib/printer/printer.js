import React, { useState } from 'react';
import { Badge } from '../badge/badge';
import './printer.css';

export const Printer = ({members, selected, fieldsMapping, badge}) => {

  const [loading, setLoading] = useState(false);
  
  const badgeRefs = members.map(() => ({
    front: React.createRef(),
    back: React.createRef(),
  }));

  const print = () => {
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
          ${badgeRefs
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
      setLoading(true);

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
        setLoading(false);
        w.print();
      });
    } else {
      w.print();
    }
  }

  const printButton =
    members.length === 0 ? (
      <div>
        <button disabled>Print ({members.length})</button>
        <span>Please select some records to print</span>
      </div>
    ) : (
      <button onClick={() => print()}>
        Print ({members.length})
      </button>
    );

  return loading ? (
    <div className="loader">Loading...</div>
  ) : (
    <div className='printer'>
      {printButton}
      <Badge
        members={members}
        selected={selected}
        badgeRefs={badgeRefs}
        fieldsMapping={fieldsMapping}
        badge={badge}
      />
    </div>
  );
}
