(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.BadgesLib = {}, global.React));
})(this, (function (exports, React$1) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var Badge = function Badge(_ref) {
    var members = _ref.members,
        selected = _ref.selected,
        badgeRefs = _ref.badgeRefs,
        fieldsMapping = _ref.fieldsMapping,
        badge = _ref.badge;

    var _useState = React$1.useState('portrait'),
        _useState2 = _slicedToArray(_useState, 2),
        avatarFormat = _useState2[0],
        setAvatarFormat = _useState2[1];

    var changeFormat = function changeFormat(format) {
      setAvatarFormat(format);
    };

    var badges = members.length > 0 ? members.map(function (member, index) {
      return /*#__PURE__*/React.createElement("div", {
        className: "badge-container",
        key: member[fieldsMapping.uid]
      }, /*#__PURE__*/React.createElement("div", {
        className: "front"
      }, /*#__PURE__*/React.createElement("span", {
        className: "heading"
      }, "Front"), /*#__PURE__*/React.createElement("div", {
        className: "badge-side-container"
      }, /*#__PURE__*/React.createElement(badge.front, {
        member: members[index],
        avatarFormat: avatarFormat,
        fieldsMapping: fieldsMapping,
        ref: badgeRefs[index].front,
        onFormatChange: function onFormatChange() {}
      }))), /*#__PURE__*/React.createElement("div", {
        className: "back"
      }, /*#__PURE__*/React.createElement("span", {
        className: "heading"
      }, "Back"), /*#__PURE__*/React.createElement("div", {
        className: "badge-side-container"
      }, /*#__PURE__*/React.createElement(badge.back, {
        member: members[index],
        fieldsMapping: fieldsMapping,
        ref: badgeRefs[index].back
      }))));
    }) : null;
    var preview = selected != null ? /*#__PURE__*/React.createElement("div", null, "Preview", /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return changeFormat(avatarFormat === 'portrait' ? 'landscape' : 'portrait');
      }
    }, "Try Recrop Avatar"), /*#__PURE__*/React.createElement("div", {
      className: "badge-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "front"
    }, /*#__PURE__*/React.createElement("span", {
      className: "heading"
    }, "Front"), /*#__PURE__*/React.createElement("div", {
      className: "badge-side-container"
    }, /*#__PURE__*/React.createElement(badge.front, {
      member: selected,
      avatarFormat: avatarFormat,
      fieldsMapping: fieldsMapping,
      onFormatChange: function onFormatChange(v) {
        return changeFormat(v);
      },
      preview: true
    }))), /*#__PURE__*/React.createElement("div", {
      className: "back"
    }, /*#__PURE__*/React.createElement("span", {
      className: "heading"
    }, "Back"), /*#__PURE__*/React.createElement("div", {
      className: "badge-side-container"
    }, /*#__PURE__*/React.createElement(badge.back, {
      member: selected,
      fieldsMapping: fieldsMapping,
      preview: true
    }))))) : 'Please click on one of the elements to see the preview';
    return /*#__PURE__*/React.createElement("div", {
      className: "badge"
    }, /*#__PURE__*/React.createElement("div", {
      className: "preview"
    }, preview), /*#__PURE__*/React.createElement("div", {
      className: "to-print"
    }, badges));
  };

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$2 = ".printer, .container {\n  font-family: ProximaNovaRegular, sans-serif;\n}\n\n.bold {\n  font-family: ProximaNovaBold, sans-serif;\n}\n\n.to-print {\n  display: none;\n}\n\np {\n  margin: 0;\n}\n\nbutton {\n  margin: 1rem 1rem 1rem 0;\n}\n\n.preview {\n  height: 400px;\n  width: 520px;\n}\n\n.badge-container {\n  display: flex;\n}\n\n.badge-side-container {\n  border: 5px solid #dbdbdb;\n  margin-right: 20px;\n}\n\n.loader,\n.loader:after {\n  border-radius: 50%;\n  width: 10em;\n  height: 10em;\n}\n.loader {\n  margin: 60px auto;\n  font-size: 10px;\n  position: relative;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(223, 223, 223, 0.2);\n  border-right: 1.1em solid rgba(223, 223, 223, 0.2);\n  border-bottom: 1.1em solid rgba(223, 223, 223, 0.2);\n  border-left: 1.1em solid #dfdfdf;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.1s infinite linear;\n}\n@-webkit-keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}";
  styleInject(css_248z$2);

  var Printer = function Printer(_ref) {
    var members = _ref.members,
        selected = _ref.selected,
        fieldsMapping = _ref.fieldsMapping,
        badge = _ref.badge;

    var _useState = React$1.useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        loading = _useState2[0],
        setLoading = _useState2[1];

    var badgeRefs = members.map(function () {
      return {
        front: /*#__PURE__*/React__default["default"].createRef(),
        back: /*#__PURE__*/React__default["default"].createRef()
      };
    });

    var print = function print() {
      // create hidden iframe
      var oldFrame = document.getElementById('o-hidd-frame');

      if (oldFrame) {
        oldFrame.parentNode.removeChild(oldFrame);
      }

      var oHiddFrame = document.createElement('iframe');
      oHiddFrame.id = 'o-hidd-frame';
      oHiddFrame.style.position = 'fixed';
      oHiddFrame.style.visibility = 'hidden';
      document.body.appendChild(oHiddFrame);
      var w = oHiddFrame.contentWindow; // const w = window.open();
      // add needed styles, badge front and back elements to the iframe

      var styles = '';
      document.querySelectorAll('style').forEach(function (el) {
        return styles = styles + el.outerHTML;
      });
      w.document.write("\n        <html>\n        ".concat(styles, "\n        <head>\n          <link\n            href=\"https://cdn.jsdelivr.net/gh/mishkolesnikov/ui-bakery-badges@main/font/Proxima_Nova_Webkit.css\"\n            rel=\"stylesheet\"\n          />\n        </head>\n        <body>\n          ").concat(badgeRefs.map(function (badge) {
        return badge.front.current.outerHTML + badge.back.current.outerHTML;
      }).join(''), "\n        </body>\n        </html>")); // print iframe content right after all needed images loaded

      var linkEls = w.document.querySelectorAll('link[rel=stylesheet]');

      if (w.document.images.length > 0 || linkEls.lengh > 0 || w.document.fonts.size > 0) {
        setLoading(true);
        var linksAndImagesLoadingPromises = Array.from([].concat(_toConsumableArray(w.document.images), _toConsumableArray(linkEls))).filter(function (img) {
          return !img.complete;
        }).filter(function (img) {
          return img.src || img.href;
        }).map(function (img) {
          return new Promise(function (resolve) {
            img.onload = img.onerror = function () {
              resolve();
            };
          });
        });
        Promise.all([].concat(_toConsumableArray(linksAndImagesLoadingPromises), [w.document.fonts.ready])).then(function () {
          setLoading(false);
          w.print();
        });
      } else {
        w.print();
      }
    };

    var printButton = members.length === 0 ? /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("button", {
      disabled: true
    }, "Print (", members.length, ")"), /*#__PURE__*/React__default["default"].createElement("span", null, "Please select some records to print")) : /*#__PURE__*/React__default["default"].createElement("button", {
      onClick: function onClick() {
        return print();
      }
    }, "Print (", members.length, ")");
    return loading ? /*#__PURE__*/React__default["default"].createElement("div", {
      className: "loader"
    }, "Loading...") : /*#__PURE__*/React__default["default"].createElement("div", {
      className: "printer"
    }, printButton, /*#__PURE__*/React__default["default"].createElement(Badge, {
      members: members,
      selected: selected,
      badgeRefs: badgeRefs,
      fieldsMapping: fieldsMapping,
      badge: badge
    }));
  };

  const ncaLogoBase64 = 'data:image/png;base64,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';
  const certLogoBase64 = 'data:image/png;base64,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';
  const meritLogoBase64$1 = 'data:image/png;base64,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';

  /* eslint-disable */

  /**
   * @fileoverview
   * - Using the 'QRCode for Javascript library'
   * - Fixed dataset of 'QRCode for Javascript library' for support full-spec.
   * - this library has no dependencies.
   * 
   * @author davidshimjs
   * @see <a href="http://www.d-project.com/" target="_blank">http://www.d-project.com/</a>
   * @see <a href="http://jeromeetienne.github.com/jquery-qrcode/" target="_blank">http://jeromeetienne.github.com/jquery-qrcode/</a>
   */
  function QRCode() {
    //---------------------------------------------------------------------
    // QRCode for JavaScript
    //
    // Copyright (c) 2009 Kazuhiko Arase
    //
    // URL: http://www.d-project.com/
    //
    // Licensed under the MIT license:
    //   http://www.opensource.org/licenses/mit-license.php
    //
    // The word "QR Code" is registered trademark of 
    // DENSO WAVE INCORPORATED
    //   http://www.denso-wave.com/qrcode/faqpatent-e.html
    //
    //---------------------------------------------------------------------
    function QR8bitByte(data) {
      this.mode = QRMode.MODE_8BIT_BYTE;
      this.data = data;
      this.parsedData = []; // Added to support UTF-8 Characters

      for (var i = 0, l = this.data.length; i < l; i++) {
        var byteArray = [];
        var code = this.data.charCodeAt(i);

        if (code > 0x10000) {
          byteArray[0] = 0xF0 | (code & 0x1C0000) >>> 18;
          byteArray[1] = 0x80 | (code & 0x3F000) >>> 12;
          byteArray[2] = 0x80 | (code & 0xFC0) >>> 6;
          byteArray[3] = 0x80 | code & 0x3F;
        } else if (code > 0x800) {
          byteArray[0] = 0xE0 | (code & 0xF000) >>> 12;
          byteArray[1] = 0x80 | (code & 0xFC0) >>> 6;
          byteArray[2] = 0x80 | code & 0x3F;
        } else if (code > 0x80) {
          byteArray[0] = 0xC0 | (code & 0x7C0) >>> 6;
          byteArray[1] = 0x80 | code & 0x3F;
        } else {
          byteArray[0] = code;
        }

        this.parsedData.push(byteArray);
      }

      this.parsedData = Array.prototype.concat.apply([], this.parsedData);

      if (this.parsedData.length != this.data.length) {
        this.parsedData.unshift(191);
        this.parsedData.unshift(187);
        this.parsedData.unshift(239);
      }
    }

    QR8bitByte.prototype = {
      getLength: function (buffer) {
        return this.parsedData.length;
      },
      write: function (buffer) {
        for (var i = 0, l = this.parsedData.length; i < l; i++) {
          buffer.put(this.parsedData[i], 8);
        }
      }
    };

    function QRCodeModel(typeNumber, errorCorrectLevel) {
      this.typeNumber = typeNumber;
      this.errorCorrectLevel = errorCorrectLevel;
      this.modules = null;
      this.moduleCount = 0;
      this.dataCache = null;
      this.dataList = [];
    }

    QRCodeModel.prototype = {
      addData: function (data) {
        var newData = new QR8bitByte(data);
        this.dataList.push(newData);
        this.dataCache = null;
      },
      isDark: function (row, col) {
        if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
          throw new Error(row + "," + col);
        }

        return this.modules[row][col];
      },
      getModuleCount: function () {
        return this.moduleCount;
      },
      make: function () {
        this.makeImpl(false, this.getBestMaskPattern());
      },
      makeImpl: function (test, maskPattern) {
        this.moduleCount = this.typeNumber * 4 + 17;
        this.modules = new Array(this.moduleCount);

        for (var row = 0; row < this.moduleCount; row++) {
          this.modules[row] = new Array(this.moduleCount);

          for (var col = 0; col < this.moduleCount; col++) {
            this.modules[row][col] = null;
          }
        }

        this.setupPositionProbePattern(0, 0);
        this.setupPositionProbePattern(this.moduleCount - 7, 0);
        this.setupPositionProbePattern(0, this.moduleCount - 7);
        this.setupPositionAdjustPattern();
        this.setupTimingPattern();
        this.setupTypeInfo(test, maskPattern);

        if (this.typeNumber >= 7) {
          this.setupTypeNumber(test);
        }

        if (this.dataCache == null) {
          this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
        }

        this.mapData(this.dataCache, maskPattern);
      },
      setupPositionProbePattern: function (row, col) {
        for (var r = -1; r <= 7; r++) {
          if (row + r <= -1 || this.moduleCount <= row + r) continue;

          for (var c = -1; c <= 7; c++) {
            if (col + c <= -1 || this.moduleCount <= col + c) continue;

            if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
              this.modules[row + r][col + c] = true;
            } else {
              this.modules[row + r][col + c] = false;
            }
          }
        }
      },
      getBestMaskPattern: function () {
        var minLostPoint = 0;
        var pattern = 0;

        for (var i = 0; i < 8; i++) {
          this.makeImpl(true, i);
          var lostPoint = QRUtil.getLostPoint(this);

          if (i == 0 || minLostPoint > lostPoint) {
            minLostPoint = lostPoint;
            pattern = i;
          }
        }

        return pattern;
      },
      createMovieClip: function (target_mc, instance_name, depth) {
        var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
        var cs = 1;
        this.make();

        for (var row = 0; row < this.modules.length; row++) {
          var y = row * cs;

          for (var col = 0; col < this.modules[row].length; col++) {
            var x = col * cs;
            var dark = this.modules[row][col];

            if (dark) {
              qr_mc.beginFill(0, 100);
              qr_mc.moveTo(x, y);
              qr_mc.lineTo(x + cs, y);
              qr_mc.lineTo(x + cs, y + cs);
              qr_mc.lineTo(x, y + cs);
              qr_mc.endFill();
            }
          }
        }

        return qr_mc;
      },
      setupTimingPattern: function () {
        for (var r = 8; r < this.moduleCount - 8; r++) {
          if (this.modules[r][6] != null) {
            continue;
          }

          this.modules[r][6] = r % 2 == 0;
        }

        for (var c = 8; c < this.moduleCount - 8; c++) {
          if (this.modules[6][c] != null) {
            continue;
          }

          this.modules[6][c] = c % 2 == 0;
        }
      },
      setupPositionAdjustPattern: function () {
        var pos = QRUtil.getPatternPosition(this.typeNumber);

        for (var i = 0; i < pos.length; i++) {
          for (var j = 0; j < pos.length; j++) {
            var row = pos[i];
            var col = pos[j];

            if (this.modules[row][col] != null) {
              continue;
            }

            for (var r = -2; r <= 2; r++) {
              for (var c = -2; c <= 2; c++) {
                if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
                  this.modules[row + r][col + c] = true;
                } else {
                  this.modules[row + r][col + c] = false;
                }
              }
            }
          }
        }
      },
      setupTypeNumber: function (test) {
        var bits = QRUtil.getBCHTypeNumber(this.typeNumber);

        for (var i = 0; i < 18; i++) {
          var mod = !test && (bits >> i & 1) == 1;
          this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
        }

        for (var i = 0; i < 18; i++) {
          var mod = !test && (bits >> i & 1) == 1;
          this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
        }
      },
      setupTypeInfo: function (test, maskPattern) {
        var data = this.errorCorrectLevel << 3 | maskPattern;
        var bits = QRUtil.getBCHTypeInfo(data);

        for (var i = 0; i < 15; i++) {
          var mod = !test && (bits >> i & 1) == 1;

          if (i < 6) {
            this.modules[i][8] = mod;
          } else if (i < 8) {
            this.modules[i + 1][8] = mod;
          } else {
            this.modules[this.moduleCount - 15 + i][8] = mod;
          }
        }

        for (var i = 0; i < 15; i++) {
          var mod = !test && (bits >> i & 1) == 1;

          if (i < 8) {
            this.modules[8][this.moduleCount - i - 1] = mod;
          } else if (i < 9) {
            this.modules[8][15 - i - 1 + 1] = mod;
          } else {
            this.modules[8][15 - i - 1] = mod;
          }
        }

        this.modules[this.moduleCount - 8][8] = !test;
      },
      mapData: function (data, maskPattern) {
        var inc = -1;
        var row = this.moduleCount - 1;
        var bitIndex = 7;
        var byteIndex = 0;

        for (var col = this.moduleCount - 1; col > 0; col -= 2) {
          if (col == 6) col--;

          while (true) {
            for (var c = 0; c < 2; c++) {
              if (this.modules[row][col - c] == null) {
                var dark = false;

                if (byteIndex < data.length) {
                  dark = (data[byteIndex] >>> bitIndex & 1) == 1;
                }

                var mask = QRUtil.getMask(maskPattern, row, col - c);

                if (mask) {
                  dark = !dark;
                }

                this.modules[row][col - c] = dark;
                bitIndex--;

                if (bitIndex == -1) {
                  byteIndex++;
                  bitIndex = 7;
                }
              }
            }

            row += inc;

            if (row < 0 || this.moduleCount <= row) {
              row -= inc;
              inc = -inc;
              break;
            }
          }
        }
      }
    };
    QRCodeModel.PAD0 = 0xEC;
    QRCodeModel.PAD1 = 0x11;

    QRCodeModel.createData = function (typeNumber, errorCorrectLevel, dataList) {
      var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
      var buffer = new QRBitBuffer();

      for (var i = 0; i < dataList.length; i++) {
        var data = dataList[i];
        buffer.put(data.mode, 4);
        buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
        data.write(buffer);
      }

      var totalDataCount = 0;

      for (var i = 0; i < rsBlocks.length; i++) {
        totalDataCount += rsBlocks[i].dataCount;
      }

      if (buffer.getLengthInBits() > totalDataCount * 8) {
        throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
      }

      if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
        buffer.put(0, 4);
      }

      while (buffer.getLengthInBits() % 8 != 0) {
        buffer.putBit(false);
      }

      while (true) {
        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }

        buffer.put(QRCodeModel.PAD0, 8);

        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }

        buffer.put(QRCodeModel.PAD1, 8);
      }

      return QRCodeModel.createBytes(buffer, rsBlocks);
    };

    QRCodeModel.createBytes = function (buffer, rsBlocks) {
      var offset = 0;
      var maxDcCount = 0;
      var maxEcCount = 0;
      var dcdata = new Array(rsBlocks.length);
      var ecdata = new Array(rsBlocks.length);

      for (var r = 0; r < rsBlocks.length; r++) {
        var dcCount = rsBlocks[r].dataCount;
        var ecCount = rsBlocks[r].totalCount - dcCount;
        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);
        dcdata[r] = new Array(dcCount);

        for (var i = 0; i < dcdata[r].length; i++) {
          dcdata[r][i] = 0xff & buffer.buffer[i + offset];
        }

        offset += dcCount;
        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);

        for (var i = 0; i < ecdata[r].length; i++) {
          var modIndex = i + modPoly.getLength() - ecdata[r].length;
          ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
        }
      }

      var totalCodeCount = 0;

      for (var i = 0; i < rsBlocks.length; i++) {
        totalCodeCount += rsBlocks[i].totalCount;
      }

      var data = new Array(totalCodeCount);
      var index = 0;

      for (var i = 0; i < maxDcCount; i++) {
        for (var r = 0; r < rsBlocks.length; r++) {
          if (i < dcdata[r].length) {
            data[index++] = dcdata[r][i];
          }
        }
      }

      for (var i = 0; i < maxEcCount; i++) {
        for (var r = 0; r < rsBlocks.length; r++) {
          if (i < ecdata[r].length) {
            data[index++] = ecdata[r][i];
          }
        }
      }

      return data;
    };

    var QRMode = {
      MODE_NUMBER: 1 << 0,
      MODE_ALPHA_NUM: 1 << 1,
      MODE_8BIT_BYTE: 1 << 2,
      MODE_KANJI: 1 << 3
    };
    var QRErrorCorrectLevel = {
      L: 1,
      M: 0,
      Q: 3,
      H: 2
    };
    var QRMaskPattern = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    var QRUtil = {
      PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
      G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
      G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
      G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
      getBCHTypeInfo: function (data) {
        var d = data << 10;

        while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
          d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
        }

        return (data << 10 | d) ^ QRUtil.G15_MASK;
      },
      getBCHTypeNumber: function (data) {
        var d = data << 12;

        while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
          d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
        }

        return data << 12 | d;
      },
      getBCHDigit: function (data) {
        var digit = 0;

        while (data != 0) {
          digit++;
          data >>>= 1;
        }

        return digit;
      },
      getPatternPosition: function (typeNumber) {
        return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
      },
      getMask: function (maskPattern, i, j) {
        switch (maskPattern) {
          case QRMaskPattern.PATTERN000:
            return (i + j) % 2 == 0;

          case QRMaskPattern.PATTERN001:
            return i % 2 == 0;

          case QRMaskPattern.PATTERN010:
            return j % 3 == 0;

          case QRMaskPattern.PATTERN011:
            return (i + j) % 3 == 0;

          case QRMaskPattern.PATTERN100:
            return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;

          case QRMaskPattern.PATTERN101:
            return i * j % 2 + i * j % 3 == 0;

          case QRMaskPattern.PATTERN110:
            return (i * j % 2 + i * j % 3) % 2 == 0;

          case QRMaskPattern.PATTERN111:
            return (i * j % 3 + (i + j) % 2) % 2 == 0;

          default:
            throw new Error("bad maskPattern:" + maskPattern);
        }
      },
      getErrorCorrectPolynomial: function (errorCorrectLength) {
        var a = new QRPolynomial([1], 0);

        for (var i = 0; i < errorCorrectLength; i++) {
          a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
        }

        return a;
      },
      getLengthInBits: function (mode, type) {
        if (1 <= type && type < 10) {
          switch (mode) {
            case QRMode.MODE_NUMBER:
              return 10;

            case QRMode.MODE_ALPHA_NUM:
              return 9;

            case QRMode.MODE_8BIT_BYTE:
              return 8;

            case QRMode.MODE_KANJI:
              return 8;

            default:
              throw new Error("mode:" + mode);
          }
        } else if (type < 27) {
          switch (mode) {
            case QRMode.MODE_NUMBER:
              return 12;

            case QRMode.MODE_ALPHA_NUM:
              return 11;

            case QRMode.MODE_8BIT_BYTE:
              return 16;

            case QRMode.MODE_KANJI:
              return 10;

            default:
              throw new Error("mode:" + mode);
          }
        } else if (type < 41) {
          switch (mode) {
            case QRMode.MODE_NUMBER:
              return 14;

            case QRMode.MODE_ALPHA_NUM:
              return 13;

            case QRMode.MODE_8BIT_BYTE:
              return 16;

            case QRMode.MODE_KANJI:
              return 12;

            default:
              throw new Error("mode:" + mode);
          }
        } else {
          throw new Error("type:" + type);
        }
      },
      getLostPoint: function (qrCode) {
        var moduleCount = qrCode.getModuleCount();
        var lostPoint = 0;

        for (var row = 0; row < moduleCount; row++) {
          for (var col = 0; col < moduleCount; col++) {
            var sameCount = 0;
            var dark = qrCode.isDark(row, col);

            for (var r = -1; r <= 1; r++) {
              if (row + r < 0 || moduleCount <= row + r) {
                continue;
              }

              for (var c = -1; c <= 1; c++) {
                if (col + c < 0 || moduleCount <= col + c) {
                  continue;
                }

                if (r == 0 && c == 0) {
                  continue;
                }

                if (dark == qrCode.isDark(row + r, col + c)) {
                  sameCount++;
                }
              }
            }

            if (sameCount > 5) {
              lostPoint += 3 + sameCount - 5;
            }
          }
        }

        for (var row = 0; row < moduleCount - 1; row++) {
          for (var col = 0; col < moduleCount - 1; col++) {
            var count = 0;
            if (qrCode.isDark(row, col)) count++;
            if (qrCode.isDark(row + 1, col)) count++;
            if (qrCode.isDark(row, col + 1)) count++;
            if (qrCode.isDark(row + 1, col + 1)) count++;

            if (count == 0 || count == 4) {
              lostPoint += 3;
            }
          }
        }

        for (var row = 0; row < moduleCount; row++) {
          for (var col = 0; col < moduleCount - 6; col++) {
            if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
              lostPoint += 40;
            }
          }
        }

        for (var col = 0; col < moduleCount; col++) {
          for (var row = 0; row < moduleCount - 6; row++) {
            if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
              lostPoint += 40;
            }
          }
        }

        var darkCount = 0;

        for (var col = 0; col < moduleCount; col++) {
          for (var row = 0; row < moduleCount; row++) {
            if (qrCode.isDark(row, col)) {
              darkCount++;
            }
          }
        }

        var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
        lostPoint += ratio * 10;
        return lostPoint;
      }
    };
    var QRMath = {
      glog: function (n) {
        if (n < 1) {
          throw new Error("glog(" + n + ")");
        }

        return QRMath.LOG_TABLE[n];
      },
      gexp: function (n) {
        while (n < 0) {
          n += 255;
        }

        while (n >= 256) {
          n -= 255;
        }

        return QRMath.EXP_TABLE[n];
      },
      EXP_TABLE: new Array(256),
      LOG_TABLE: new Array(256)
    };

    for (var i = 0; i < 8; i++) {
      QRMath.EXP_TABLE[i] = 1 << i;
    }

    for (var i = 8; i < 256; i++) {
      QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
    }

    for (var i = 0; i < 255; i++) {
      QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
    }

    function QRPolynomial(num, shift) {
      if (num.length == undefined) {
        throw new Error(num.length + "/" + shift);
      }

      var offset = 0;

      while (offset < num.length && num[offset] == 0) {
        offset++;
      }

      this.num = new Array(num.length - offset + shift);

      for (var i = 0; i < num.length - offset; i++) {
        this.num[i] = num[i + offset];
      }
    }

    QRPolynomial.prototype = {
      get: function (index) {
        return this.num[index];
      },
      getLength: function () {
        return this.num.length;
      },
      multiply: function (e) {
        var num = new Array(this.getLength() + e.getLength() - 1);

        for (var i = 0; i < this.getLength(); i++) {
          for (var j = 0; j < e.getLength(); j++) {
            num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
          }
        }

        return new QRPolynomial(num, 0);
      },
      mod: function (e) {
        if (this.getLength() - e.getLength() < 0) {
          return this;
        }

        var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
        var num = new Array(this.getLength());

        for (var i = 0; i < this.getLength(); i++) {
          num[i] = this.get(i);
        }

        for (var i = 0; i < e.getLength(); i++) {
          num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
        }

        return new QRPolynomial(num, 0).mod(e);
      }
    };

    function QRRSBlock(totalCount, dataCount) {
      this.totalCount = totalCount;
      this.dataCount = dataCount;
    }

    QRRSBlock.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];

    QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
      var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);

      if (rsBlock == undefined) {
        throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
      }

      var length = rsBlock.length / 3;
      var list = [];

      for (var i = 0; i < length; i++) {
        var count = rsBlock[i * 3 + 0];
        var totalCount = rsBlock[i * 3 + 1];
        var dataCount = rsBlock[i * 3 + 2];

        for (var j = 0; j < count; j++) {
          list.push(new QRRSBlock(totalCount, dataCount));
        }
      }

      return list;
    };

    QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {
      switch (errorCorrectLevel) {
        case QRErrorCorrectLevel.L:
          return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];

        case QRErrorCorrectLevel.M:
          return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];

        case QRErrorCorrectLevel.Q:
          return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];

        case QRErrorCorrectLevel.H:
          return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];

        default:
          return undefined;
      }
    };

    function QRBitBuffer() {
      this.buffer = [];
      this.length = 0;
    }

    QRBitBuffer.prototype = {
      get: function (index) {
        var bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
      },
      put: function (num, length) {
        for (var i = 0; i < length; i++) {
          this.putBit((num >>> length - i - 1 & 1) == 1);
        }
      },
      getLengthInBits: function () {
        return this.length;
      },
      putBit: function (bit) {
        var bufIndex = Math.floor(this.length / 8);

        if (this.buffer.length <= bufIndex) {
          this.buffer.push(0);
        }

        if (bit) {
          this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
        }

        this.length++;
      }
    };
    var QRCodeLimitLength = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];

    function _isSupportCanvas() {
      return typeof CanvasRenderingContext2D != "undefined";
    } // android 2.x doesn't support Data-URI spec


    function _getAndroid() {
      var android = false;
      var sAgent = navigator.userAgent;

      if (/android/i.test(sAgent)) {
        // android
        android = true;
        var aMat = sAgent.toString().match(/android ([0-9]\.[0-9])/i);

        if (aMat && aMat[1]) {
          android = parseFloat(aMat[1]);
        }
      }

      return android;
    }

    var svgDrawer = function () {
      var Drawing = function (el, htOption) {
        this._el = el;
        this._htOption = htOption;
      };

      Drawing.prototype.draw = function (oQRCode) {
        var _htOption = this._htOption;
        var _el = this._el;
        var nCount = oQRCode.getModuleCount();
        Math.floor(_htOption.width / nCount);
        Math.floor(_htOption.height / nCount);
        this.clear();

        function makeSVG(tag, attrs) {
          var el = document.createElementNS('http://www.w3.org/2000/svg', tag);

          for (var k in attrs) if (attrs.hasOwnProperty(k)) el.setAttribute(k, attrs[k]);

          return el;
        }

        var svg = makeSVG("svg", {
          'viewBox': '0 0 ' + String(nCount) + " " + String(nCount),
          'width': '100%',
          'height': '100%',
          'fill': _htOption.colorLight
        });
        svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");

        _el.appendChild(svg);

        svg.appendChild(makeSVG("rect", {
          "fill": _htOption.colorLight,
          "width": "100%",
          "height": "100%"
        }));
        svg.appendChild(makeSVG("rect", {
          "fill": _htOption.colorDark,
          "width": "1",
          "height": "1",
          "id": "template"
        }));

        for (var row = 0; row < nCount; row++) {
          for (var col = 0; col < nCount; col++) {
            if (oQRCode.isDark(row, col)) {
              var child = makeSVG("use", {
                "x": String(col),
                "y": String(row)
              });
              child.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template");
              svg.appendChild(child);
            }
          }
        }
      };

      Drawing.prototype.clear = function () {
        while (this._el.hasChildNodes()) this._el.removeChild(this._el.lastChild);
      };

      return Drawing;
    }();

    var useSVG = document.documentElement.tagName.toLowerCase() === "svg"; // Drawing in DOM by using Table tag

    var Drawing = useSVG ? svgDrawer : !_isSupportCanvas() ? function () {
      var Drawing = function (el, htOption) {
        this._el = el;
        this._htOption = htOption;
      };
      /**
       * Draw the QRCode
       * 
       * @param {QRCode} oQRCode
       */


      Drawing.prototype.draw = function (oQRCode) {
        var _htOption = this._htOption;
        var _el = this._el;
        var nCount = oQRCode.getModuleCount();
        var nWidth = Math.floor(_htOption.width / nCount);
        var nHeight = Math.floor(_htOption.height / nCount);
        var aHTML = ['<table style="border:0;border-collapse:collapse;">'];

        for (var row = 0; row < nCount; row++) {
          aHTML.push('<tr>');

          for (var col = 0; col < nCount; col++) {
            aHTML.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + nWidth + 'px;height:' + nHeight + 'px;background-color:' + (oQRCode.isDark(row, col) ? _htOption.colorDark : _htOption.colorLight) + ';"></td>');
          }

          aHTML.push('</tr>');
        }

        aHTML.push('</table>');
        _el.innerHTML = aHTML.join(''); // Fix the margin values as real size.

        var elTable = _el.childNodes[0];
        var nLeftMarginTable = (_htOption.width - elTable.offsetWidth) / 2;
        var nTopMarginTable = (_htOption.height - elTable.offsetHeight) / 2;

        if (nLeftMarginTable > 0 && nTopMarginTable > 0) {
          elTable.style.margin = nTopMarginTable + "px " + nLeftMarginTable + "px";
        }
      };
      /**
       * Clear the QRCode
       */


      Drawing.prototype.clear = function () {
        this._el.innerHTML = '';
      };

      return Drawing;
    }() : function () {
      // Drawing in Canvas
      function _onMakeImage() {
        this._elImage.src = this._elCanvas.toDataURL("image/png");
        this._elImage.style.display = "block";
        this._elCanvas.style.display = "none";
      }
      /**
       * Check whether the user's browser supports Data URI or not
       * 
       * @private
       * @param {Function} fSuccess Occurs if it supports Data URI
       * @param {Function} fFail Occurs if it doesn't support Data URI
       */


      function _safeSetDataURI(fSuccess, fFail) {
        var self = this;
        self._fFail = fFail;
        self._fSuccess = fSuccess; // Check it just once

        if (self._bSupportDataURI === null) {
          var el = document.createElement("img");

          var fOnError = function () {
            self._bSupportDataURI = false;

            if (self._fFail) {
              self._fFail.call(self);
            }
          };

          var fOnSuccess = function () {
            self._bSupportDataURI = true;

            if (self._fSuccess) {
              self._fSuccess.call(self);
            }
          };

          el.onabort = fOnError;
          el.onerror = fOnError;
          el.onload = fOnSuccess;
          el.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="; // the Image contains 1px data.

          return;
        } else if (self._bSupportDataURI === true && self._fSuccess) {
          self._fSuccess.call(self);
        } else if (self._bSupportDataURI === false && self._fFail) {
          self._fFail.call(self);
        }
      }
      /**
       * Drawing QRCode by using canvas
       * 
       * @constructor
       * @param {HTMLElement} el
       * @param {Object} htOption QRCode Options 
       */

      var Drawing = function (el, htOption) {
        this._bIsPainted = false;
        this._android = _getAndroid();
        this._htOption = htOption;
        this._elCanvas = document.createElement("canvas");
        this._elCanvas.width = htOption.width;
        this._elCanvas.height = htOption.height;
        el.appendChild(this._elCanvas);
        this._el = el;
        this._oContext = this._elCanvas.getContext("2d");
        this._bIsPainted = false;
        this._elImage = document.createElement("img");
        this._elImage.alt = "Scan me!";
        this._elImage.style.display = "none";

        this._el.appendChild(this._elImage);

        this._bSupportDataURI = null;
      };
      /**
       * Draw the QRCode
       * 
       * @param {QRCode} oQRCode 
       */


      Drawing.prototype.draw = function (oQRCode) {
        var _elImage = this._elImage;
        var _oContext = this._oContext;
        var _htOption = this._htOption;
        var nCount = oQRCode.getModuleCount();
        var nWidth = _htOption.width / nCount;
        var nHeight = _htOption.height / nCount;
        var nRoundedWidth = Math.round(nWidth);
        var nRoundedHeight = Math.round(nHeight);
        _elImage.style.display = "none";
        this.clear();

        for (var row = 0; row < nCount; row++) {
          for (var col = 0; col < nCount; col++) {
            var bIsDark = oQRCode.isDark(row, col);
            var nLeft = col * nWidth;
            var nTop = row * nHeight;
            _oContext.strokeStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
            _oContext.lineWidth = 1;
            _oContext.fillStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;

            _oContext.fillRect(nLeft, nTop, nWidth, nHeight); // 안티 앨리어싱 방지 처리


            _oContext.strokeRect(Math.floor(nLeft) + 0.5, Math.floor(nTop) + 0.5, nRoundedWidth, nRoundedHeight);

            _oContext.strokeRect(Math.ceil(nLeft) - 0.5, Math.ceil(nTop) - 0.5, nRoundedWidth, nRoundedHeight);
          }
        }

        this._bIsPainted = true;
      };
      /**
       * Make the image from Canvas if the browser supports Data URI.
       */


      Drawing.prototype.makeImage = function () {
        if (this._bIsPainted) {
          _safeSetDataURI.call(this, _onMakeImage);
        }
      };
      /**
       * Return whether the QRCode is painted or not
       * 
       * @return {Boolean}
       */


      Drawing.prototype.isPainted = function () {
        return this._bIsPainted;
      };
      /**
       * Clear the QRCode
       */


      Drawing.prototype.clear = function () {
        this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);

        this._bIsPainted = false;
      };
      /**
       * @private
       * @param {Number} nNumber
       */


      Drawing.prototype.round = function (nNumber) {
        if (!nNumber) {
          return nNumber;
        }

        return Math.floor(nNumber * 1000) / 1000;
      };

      return Drawing;
    }();
    /**
     * Get the type by string length
     * 
     * @private
     * @param {String} sText
     * @param {Number} nCorrectLevel
     * @return {Number} type
     */

    function _getTypeNumber(sText, nCorrectLevel) {
      var nType = 1;

      var length = _getUTF8Length(sText);

      for (var i = 0, len = QRCodeLimitLength.length; i <= len; i++) {
        var nLimit = 0;

        switch (nCorrectLevel) {
          case QRErrorCorrectLevel.L:
            nLimit = QRCodeLimitLength[i][0];
            break;

          case QRErrorCorrectLevel.M:
            nLimit = QRCodeLimitLength[i][1];
            break;

          case QRErrorCorrectLevel.Q:
            nLimit = QRCodeLimitLength[i][2];
            break;

          case QRErrorCorrectLevel.H:
            nLimit = QRCodeLimitLength[i][3];
            break;
        }

        if (length <= nLimit) {
          break;
        } else {
          nType++;
        }
      }

      if (nType > QRCodeLimitLength.length) {
        throw new Error("Too long data");
      }

      return nType;
    }

    function _getUTF8Length(sText) {
      var replacedText = encodeURI(sText).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');
      return replacedText.length + (replacedText.length != sText ? 3 : 0);
    }
    /**
     * @class QRCode
     * @constructor
     * @example 
     * new QRCode(document.getElementById("test"), "http://jindo.dev.naver.com/collie");
     *
     * @example
     * var oQRCode = new QRCode("test", {
     *    text : "http://naver.com",
     *    width : 128,
     *    height : 128
     * });
     * 
     * oQRCode.clear(); // Clear the QRCode.
     * oQRCode.makeCode("http://map.naver.com"); // Re-create the QRCode.
     *
     * @param {HTMLElement|String} el target element or 'id' attribute of element.
     * @param {Object|String} vOption
     * @param {String} vOption.text QRCode link data
     * @param {Number} [vOption.width=256]
     * @param {Number} [vOption.height=256]
     * @param {String} [vOption.colorDark="#000000"]
     * @param {String} [vOption.colorLight="#ffffff"]
     * @param {QRCode.CorrectLevel} [vOption.correctLevel=QRCode.CorrectLevel.H] [L|M|Q|H] 
     */


    QRCode = function (el, vOption) {
      this._htOption = {
        width: 256,
        height: 256,
        typeNumber: 4,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRErrorCorrectLevel.H
      };

      if (typeof vOption === 'string') {
        vOption = {
          text: vOption
        };
      } // Overwrites options


      if (vOption) {
        for (var i in vOption) {
          this._htOption[i] = vOption[i];
        }
      }

      if (typeof el == "string") {
        el = document.getElementById(el);
      }

      if (this._htOption.useSVG) {
        Drawing = svgDrawer;
      }

      this._android = _getAndroid();
      this._el = el;
      this._oQRCode = null;
      this._oDrawing = new Drawing(this._el, this._htOption);

      if (this._htOption.text) {
        this.makeCode(this._htOption.text);
      }
    };
    /**
     * Make the QRCode
     * 
     * @param {String} sText link data
     */


    QRCode.prototype.makeCode = function (sText) {
      this._oQRCode = new QRCodeModel(_getTypeNumber(sText, this._htOption.correctLevel), this._htOption.correctLevel);

      this._oQRCode.addData(sText);

      this._oQRCode.make();

      this._el.title = sText;

      this._oDrawing.draw(this._oQRCode);

      this.makeImage();
    };
    /**
     * Make the Image from Canvas element
     * - It occurs automatically
     * - Android below 3 doesn't support Data-URI spec.
     * 
     * @private
     */


    QRCode.prototype.makeImage = function () {
      if (typeof this._oDrawing.makeImage == "function" && (!this._android || this._android >= 3)) {
        this._oDrawing.makeImage();
      }
    };
    /**
     * Clear the QRCode
     */


    QRCode.prototype.clear = function () {
      this._oDrawing.clear();
    };
    /**
     * @name QRCode.CorrectLevel
     */


    QRCode.CorrectLevel = QRErrorCorrectLevel;
    return QRCode;
  }

  const qrCodes$1 = {};
  const Back$1 = /*#__PURE__*/React__default["default"].forwardRef((_ref, ref) => {
    let {
      member,
      fieldsMapping,
      preview
    } = _ref;
    const qrId = preview ? `qr-code-preview` : `qr-code-${member[fieldsMapping.uid]}`;
    const qrCode = member[fieldsMapping.qrCode];
    React__default["default"].useEffect(() => {
      setTimeout(() => {
        const el = document.getElementById(qrId);

        if (qrCodes$1[qrId] && qrCodes$1[qrId]._el === el) {
          qrCodes$1[qrId].clear();
          qrCodes$1[qrId].makeCode(qrCode);
        } else {
          qrCodes$1[qrId] = new QRCode(document.getElementById(qrId), {
            text: qrCode,
            height: 230,
            width: 230
          });
        }
      });
    }, [qrCode, qrId]);
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "cert-membership container back",
      ref: ref
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "back-info-1 bold"
    }, /*#__PURE__*/React__default["default"].createElement("p", null, "Scanning the member QR code will return any FEMA CERT credentialing typing and NCA Credentials that the member has achieved.")), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "qr-code",
      id: qrId
    }), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "back-info-2 bold"
    }, /*#__PURE__*/React__default["default"].createElement("p", null, "Download the Merit App to scan this member\u2019s ID QR Code."), /*#__PURE__*/React__default["default"].createElement("p", null, "Search \u201CMerit\u201D on the App store and Android Shop")), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "logo-footer"
    }, /*#__PURE__*/React__default["default"].createElement("img", {
      src: meritLogoBase64$1,
      alt: "merit-logo",
      className: "merit-logo"
    })));
  });

  var css_248z$1 = ".cert-membership.container {\n  width: 270px;\n  height: 430px;\n  position: relative;\n  background-color: #fff;\n}\n\n.cert-membership .header-1 {\n  text-align: center;\n  background-color: #101e3d;\n  color: #ffffff;\n  font-size: 18px;\n  padding: 3px 0;\n}\n\n.cert-membership .header-2 {\n  text-align: center;\n  background-color: #6ea340;\n  font-size: 18px;\n  line-height: 1;\n  padding: 2px;\n}\n\n.cert-membership .body {\n  display: flex;\n  position: relative;\n}\n\n.cert-membership .side {\n  transform: rotate(-180deg);\n  text-align: center;\n  writing-mode: vertical-lr;\n  font-size: 9px;\n  padding: 0 10px;\n  position: absolute;\n  height: 100%;\n}\n\n.cert-membership .center {\n  padding-top: 13px;\n  text-align: center;\n}\n\n.cert-membership .footer {\n  height: 50px;\n  text-align: center;\n  line-height: 50px;\n  font-size: 32px;\n}\n\n.cert-membership .avatar-row {\n  display: flex;\n  justify-content: center;\n  height: 145px;\n}\n\n.cert-membership .avatar {\n  flex-shrink: 0;\n  height: 145px;\n  width: 145px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n\n.cert-membership .portrait .img {\n  width: 145px;\n}\n\n.cert-membership .landscape .img {\n  height: 145px;\n}\n\n.cert-membership .position {\n  padding-top: 10px;\n  min-width: 0;\n}\n\n.cert-membership .name {\n  font-size: 14px;\n  margin-top: 14px;\n  line-height: 1;\n}\n\n.cert-membership .last-name {\n  margin-top: 2px;\n}\n\n.cert-membership .logos {\n  margin-top: 15px;\n  height: 60px;\n}\n\n.cert-membership .logos img {\n  height: 60px;\n}\n\n.cert-membership .logos img:first-child {\n  margin-right: 10px;\n}\n\n.cert-membership .info {\n  margin-top: 10px;\n  padding: 0 20px;\n  font-size: 10px;\n}\n\n.cert-membership .footer-1 {\n  margin-top: 9px;\n  text-align: center;\n  background-color: #101e3d;\n  color: #ffffff;\n  font-size: 17px;\n  padding: 3px 5px;\n  text-transform: uppercase;\n}\n\n.cert-membership .footer-2 {\n  text-align: center;\n  background-color: #6ea340;\n  font-size: 17px;\n  line-height: 1;\n  padding: 2px 0;\n}\n\n.cert-membership .qr-code {\n  height: 230px;\n  width: 230px;\n  margin: 0 auto;\n  margin-top: 7px;\n}\n\n.cert-membership .merit-logo {\n  transform: scale(0.4);\n}\n\n.cert-membership .back-info-1 {\n  padding: 10px;\n  font-size: 12px;\n}\n\n.cert-membership .back-info-2 {\n  margin: 7px 0 10px;\n  font-size: 9px;\n  padding: 10px;\n}\n\n.cert-membership .back-info-2 p:first-child {\n  margin-bottom: 5px;\n}\n\n.cert-membership .logo-footer {\n  text-align: center;\n  margin-top: -10px;\n}\n\n@media print {\n  body {\n    padding: 0;\n    margin: 0;\n    print-color-adjust: exact;\n  }\n\n  .to-print {\n    display: block;\n  }\n}\n\n@page {\n  size: 54mm 86mm;\n  margin: 0mm;\n}";
  styleInject(css_248z$1);

  const Front$1 = /*#__PURE__*/React__default["default"].forwardRef((_ref, ref) => {
    let {
      member,
      avatarFormat,
      fieldsMapping,
      preview,
      onFormatChange
    } = _ref;
    const [avatarClasses, setAvatarClasses] = React__default["default"].useState('avatar ' + avatarFormat);
    const [avatarLoading, setAvatarLoading] = React__default["default"].useState(true);
    const avatarUrl = member[fieldsMapping.avatarUrl];
    React__default["default"].useEffect(() => {
      setAvatarClasses('avatar ' + avatarFormat);
    }, [avatarFormat]);
    React__default["default"].useEffect(() => {
      setAvatarLoading(true);
    }, [avatarUrl]);

    const imageOnLoadHandler = event => {
      setAvatarLoading(false);

      if (event.target.height / event.target.width < 1) {
        onFormatChange('landscape');
      } else {
        onFormatChange('portrait');
      }
    };

    const avatar = !preview ? /*#__PURE__*/React__default["default"].createElement("div", {
      className: avatarClasses
    }, /*#__PURE__*/React__default["default"].createElement("img", {
      src: avatarUrl,
      className: "img",
      onLoad: imageOnLoadHandler,
      alt: "avatar"
    })) : /*#__PURE__*/React__default["default"].createElement("div", {
      className: avatarClasses
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "loader",
      style: avatarLoading ? {} : {
        display: 'none'
      }
    }, "Loading..."), /*#__PURE__*/React__default["default"].createElement("img", {
      style: avatarLoading ? {
        display: 'none'
      } : {},
      src: member[fieldsMapping.avatarUrl],
      className: "img",
      onLoad: imageOnLoadHandler,
      alt: "avatar"
    }));
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "cert-membership container",
      ref: ref
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "header-1 bold"
    }, "National CERT Association"), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "header-2 bold"
    }, member[fieldsMapping.position] || '\u00A0'), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "body"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "side"
    }, member[fieldsMapping.expiration] ? 'Valid until ' + member[fieldsMapping.expiration] : '\u00A0'), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "center"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "avatar-row"
    }, avatar), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "name bold"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "value"
    }, member[fieldsMapping.firstName]), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "value last-name"
    }, member[fieldsMapping.lastName])), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "logos"
    }, /*#__PURE__*/React__default["default"].createElement("img", {
      className: "nca-logo",
      src: ncaLogoBase64,
      alt: "nca-logo"
    }), /*#__PURE__*/React__default["default"].createElement("img", {
      className: "cert-logo",
      src: certLogoBase64,
      alt: "cert-logo"
    })), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "info bold"
    }, "This card is valid for National CERT Association related events and activities only"))), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "footer-1 bold"
    }, member[fieldsMapping.memberNumber] ? getMemberType(member[fieldsMapping.memberNumber].slice(1)) : '\u00A0'), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "footer-2 bold"
    }, member[fieldsMapping.memberNumber] || '\u00A0'));
  });

  const getMemberType = memberNumber => {
    return memberNumber < 1000 ? 'Charter Member' : 'General Member';
  };

  const meritLogoBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcwAAAHMCAYAAABY25iGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE9GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuOWNjYzRkZTkzLCAyMDIyLzAzLzE0LTE0OjA3OjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuMyAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDctMTRUMTc6MjA6MTYtMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA3LTE5VDExOjE5OjU3LTA0OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA3LTE5VDExOjE5OjU3LTA0OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NDhlYTBkOS01MTc1LTQyNmQtOGY1Ni03ZTY2YWQyNjVhZDYiIHhtcE1NOkRvY3VtZW50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';
  const favLogoBase64 = 'data:image/png;base64,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';

  const qrCodes = {};
  const Back = /*#__PURE__*/React__default["default"].forwardRef((_ref, ref) => {
    let {
      member,
      fieldsMapping,
      preview
    } = _ref;
    const qrId = preview ? `qr-code-preview` : `qr-code-${member[fieldsMapping.uid]}`;
    const qrCode = member[fieldsMapping.qrCode];
    React__default["default"].useEffect(() => {
      setTimeout(() => {
        const el = document.getElementById(qrId);

        if (qrCodes[qrId] && qrCodes[qrId]._el === el) {
          qrCodes[qrId].clear();
          qrCodes[qrId].makeCode(qrCode);
        } else {
          qrCodes[qrId] = new QRCode(document.getElementById(qrId), {
            text: qrCode,
            height: 230,
            width: 230
          });
        }
      });
    }, [qrCode, qrId]);
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "fav-stuffing container back",
      ref: ref
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "back-content"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "back-info"
    }, "If found, email ", /*#__PURE__*/React__default["default"].createElement("b", {
      className: "bold"
    }, "help@merits.com")), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "qr-code-container"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "qr-code",
      id: qrId
    }), /*#__PURE__*/React__default["default"].createElement("img", {
      className: "merit-logo",
      src: meritLogoBase64,
      alt: "merit-logo"
    }))));
  });

  var css_248z = ".fav-stuffing.container {\n  width: 270px;\n  height: 430px;\n  position: relative;\n  overflow: hidden;\n  background: #ffffff;\n}\n\n.fav-stuffing .header-container {\n  border-bottom-left-radius: 5px;\n}\n\n.fav-stuffing .header {\n  background-color: #0a81c4;\n  height: 124px;\n  width: 100%;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 115px;\n}\n\n.fav-stuffing .body {\n  padding-top: 18px;\n  padding-left: 31px;\n}\n\n.fav-stuffing .name {\n  font-size: 46px;\n}\n\n.fav-stuffing .full-name {\n  font-size: 14px;\n  margin-bottom: 24px;\n}\n\n.fav-stuffing .position {\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n\n.fav-stuffing .eid {\n  font-size: 14px;\n}\n\n.fav-stuffing .footer img {\n  height: 54px;\n  margin-top: 43px;\n  margin-left: 102px;\n}\n\n.fav-stuffing .back-content {\n  padding: 151px 18px 0px;\n  height: 100%;\n}\n\n.fav-stuffing .qr-code-container {\n  position: relative;\n}\n\n.fav-stuffing .qr-code {\n  height: 230px;\n  width: 230px;\n  margin: 0 auto;\n}\n\n.fav-stuffing .merit-logo {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  height: 50px;\n  top: 50%;\n  left: 50%;\n}\n\n.fav-stuffing .back-info {\n  font-size: 11px;\n  margin-bottom: 21px;\n}\n\n@media print {\n  body {\n    padding: 0;\n    margin: 0;\n    print-color-adjust: exact;\n  }\n\n  .to-print {\n    display: block;\n  }\n}\n\n@page {\n  size: 54mm 86mm;\n  margin: 0mm;\n}";
  styleInject(css_248z);

  const Front = /*#__PURE__*/React__default["default"].forwardRef((_ref, ref) => {
    let {
      member,
      fieldsMapping,
      preview
    } = _ref;
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "fav-stuffing container front",
      ref: ref
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "header-container"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "header"
    })), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "body"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "name bold"
    }, member[fieldsMapping.name]), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "full-name"
    }, member[fieldsMapping.fullName]), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "position"
    }, member[fieldsMapping.position]), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "eid"
    }, /*#__PURE__*/React__default["default"].createElement("span", null, `EID\u00A0\u00A0\u00A0${member[fieldsMapping.eid]}`))), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "footer"
    }, /*#__PURE__*/React__default["default"].createElement("img", {
      src: favLogoBase64,
      alt: "fs-logo"
    })));
  });

  var badges = {
    certMembership: {
      back: Back$1,
      front: Front$1
    },
    favStuffing: {
      back: Back,
      front: Front
    }
  };

  exports.Printer = Printer;
  exports.badges = badges;

  Object.defineProperty(exports, '__esModule', { value: true });

}));