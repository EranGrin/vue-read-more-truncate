import { openBlock as M, createElementBlock as y, createElementVNode as A, renderSlot as Ee, normalizeStyle as be, createTextVNode as le, toDisplayString as oe, createCommentVNode as X, pushScopeId as Ce, popScopeId as we } from "vue";
var he = {};
Object.defineProperty(he, "__esModule", { value: !0 });
var Ae = [
  "area",
  "base",
  "br",
  "col",
  "command",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
], se = [
  "address",
  "article",
  "aside",
  "blockquote",
  "canvas",
  "dd",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "hr",
  "li",
  "main",
  "nav",
  "noscript",
  "ol",
  "output",
  "p",
  "pre",
  "section",
  "table",
  "tbody",
  "tfoot",
  "thead",
  "tr",
  "ul",
  "video"
], I = ["audio", "math", "svg", "video"], g = 10, Te = 33, Re = 34, Me = 38, ye = 39, W = 47, K = 59, N = 60, ge = 61, q = 62, Oe = /[<&\n\ud800-\udbff]/, Ve = /[<&\ud800-\udbff]/, Le = /\s+/g;
function ke(e, r, i) {
  return i === void 0 && (i = {}), e ? (e = e.toString(), i.html ? De(e, r, i) : We(e, r, i)) : "";
}
var Se = he.default = ke;
function De(e, r, i) {
  for (var a = i.imageWeight, n = a === void 0 ? 2 : a, f = i.indicator, u = f === void 0 ? "…" : f, R = i.maxLines, m = R === void 0 ? 1 / 0 : R, h = i.stripTags, O = h === void 0 ? !1 : h, l = u.length, d = 1, p = typeof O == "boolean" ? function() {
    return O;
  } : function(E) {
    return O.includes(E);
  }, c = [], H = function(E) {
    for (var z; z = c.pop(), z !== void 0; )
      p(z) || (E += "</" + z + ">");
    return E;
  }, t = 0, v = -1, Y = e.length; t < Y; t++) {
    var V = t ? e.slice(t) : e, J = Fe(c), de = v > -1 || J ? Ve : Oe, B = V.search(de), b = B > -1 ? B : V.length;
    if (v === -1) {
      if (J) {
        var C = Ge(b === V.length ? V : V.slice(0, B));
        if (p(c[c.length - 1])) {
          var Q = t > 0 && !T(e.charCodeAt(t - 1)), Z = !T(e.charCodeAt(t + b));
          C.length > 0 ? C = (Q ? " " : "") + C + (Z ? " " : "") : Q && Z && (C = " "), e = e.slice(0, t) + C + e.slice(t + b), b = C.length;
        }
        if (l += C.length, l > r)
          break;
      } else if (l += b, l > r) {
        t = Math.max(t + b - l + r, 0);
        break;
      }
    }
    if (t += b, B === -1)
      break;
    var _ = e.charCodeAt(t);
    if (_ === N) {
      var F = e.charCodeAt(t + 1), j = F === Te;
      if (j && e.substr(t + 2, 2) === "--") {
        var ve = e.indexOf("-->", t + 4) + 3;
        t = ve - 1;
      } else if (j && e.substr(t + 2, 7) === "[CDATA[") {
        var _e = e.indexOf("]]>", t + 9) + 3;
        t = _e - 1;
      } else {
        var U = F === W;
        if (l === r && !U) {
          l++;
          break;
        }
        for (var G = 0, s = t, L = !1; ; ) {
          if (s++, s >= Y)
            throw new Error("Invalid HTML: " + e);
          var k = e.charCodeAt(s);
          if (L)
            G ? k === G && (L = !1) : T(k) ? L = !1 : k === q && (L = !1, s--);
          else if (k === ge) {
            for (; T(e.charCodeAt(s + 1)); )
              s++;
            L = !0;
            var x = e.charCodeAt(s + 1);
            x === Re || x === ye ? (G = x, s++) : G = 0;
          } else if (k === q) {
            var ee = t + (U ? 2 : 1), me = Math.min(Be(e, ee), s), o = e.slice(ee, me).toLowerCase();
            o.charCodeAt(o.length - 1) === W && (o = o.slice(0, o.length - 1));
            var P = p(o);
            if (U) {
              var pe = c.pop();
              if (pe !== o)
                throw new Error("Invalid HTML: " + e);
              if (I.includes(o) && !I.some(function(E) {
                return c.includes(E);
              })) {
                if (P)
                  t = v, v = -1;
                else if (v = -1, l += n, l > r)
                  break;
              }
              var He = se.includes(o);
              if (He && v === -1 && !P && (d++, d > m)) {
                c.push(o);
                break;
              }
            } else if (Ae.includes(o) || e.charCodeAt(s - 1) === W) {
              if (!P) {
                if (o === "br") {
                  if (d++, d > m)
                    break;
                } else if (o === "img" && (l += n, l > r))
                  break;
              }
            } else
              I.some(function(E) {
                return c.includes(E);
              }) || I.includes(o) && (v = t), c.push(o);
            P && v === -1 ? (e = e.slice(0, t) + e.slice(s + 1), t--) : t = s;
            break;
          }
        }
        if (l > r || d > m)
          break;
      }
    } else if (_ === Me) {
      for (var s = t + 1, te = !0; ; ) {
        var re = e.charCodeAt(s);
        if (ce(re))
          s++;
        else {
          if (re === K)
            break;
          te = !1;
          break;
        }
      }
      if (v === -1 && (l++, l > r))
        break;
      te && (t = s);
    } else if (_ === g) {
      if (l++, l > r || (d++, d > m))
        break;
    } else {
      if (v === -1 && (l++, l > r))
        break;
      if ((_ & 64512) === 55296) {
        var F = e.charCodeAt(t + 1);
        (F & 64512) === 56320 && t++;
      }
    }
  }
  if (l > r) {
    var S = Pe(e, t);
    if (u) {
      for (var w = t + S.length; e.charCodeAt(w) === N && e.charCodeAt(w + 1) === W; ) {
        var ie = e.indexOf(">", w + 2) + 1;
        if (ie)
          w = ie;
        else
          break;
      }
      w && (w === e.length || ne(e, w)) && (t += S.length, S = e.charAt(t));
    }
    for (; S === "<" && e.charCodeAt(t + 1) === W; ) {
      var o = c.pop();
      if (!o)
        break;
      var $ = e.indexOf(">", t + 2);
      if ($ === -1 || e.slice(t + 2, $).trim() !== o)
        throw new Error("Invalid HTML: " + e);
      p(o) ? e = e.slice(0, t) + e.slice($ + 1) : t = $ + 1, S = e.charAt(t);
    }
    if (t < e.length) {
      if (!i.breakWords)
        for (var D = t - u.length; D >= 0; D--) {
          var _ = e.charCodeAt(D);
          if (_ === q || _ === K)
            break;
          if (_ === g || _ === N) {
            t = D;
            break;
          } else if (T(_)) {
            t = D + (u ? 1 : 0);
            break;
          }
        }
      var ae = e.slice(0, t);
      return ne(e, t) || (ae += u), H(ae);
    }
  } else if (d > m)
    return H(e.slice(0, t));
  return e;
}
function We(e, r, i) {
  for (var a = i.indicator, n = a === void 0 ? "…" : a, f = i.maxLines, u = f === void 0 ? 1 / 0 : f, R = n.length, m = 1, h = 0, O = e.length; h < O && (R++, !(R > r)); h++) {
    var l = e.charCodeAt(h);
    if (l === g) {
      if (m++, m > u)
        break;
    } else if ((l & 64512) === 55296) {
      var d = e.charCodeAt(h + 1);
      (d & 64512) === 56320 && h++;
    }
  }
  if (R > r) {
    var p = fe(e, h);
    if (n) {
      var c = h + p.length;
      if (c === e.length)
        return e;
      if (e.charCodeAt(c) === g)
        return e.slice(0, h + p.length);
    }
    if (!i.breakWords)
      for (var H = h - n.length; H >= 0; H--) {
        var l = e.charCodeAt(H);
        if (l === g) {
          h = H, p = `
`;
          break;
        } else if (T(l)) {
          h = H + (n ? 1 : 0);
          break;
        }
      }
    return e.slice(0, h) + (p === `
` ? "" : n);
  } else if (m > u)
    return e.slice(0, h);
  return e;
}
function Be(e, r) {
  for (var i = e.length, a = r; a < i; a++)
    if (T(e.charCodeAt(a)))
      return a;
  return i;
}
function ce(e) {
  return e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
function ne(e, r) {
  var i = e.charCodeAt(r);
  if (i === g)
    return !0;
  if (i === N) {
    var a = "(" + se.join("|") + "|br)", n = new RegExp("^<" + a + `[	
\f\r ]*/?>`, "i");
    return n.test(e.slice(r));
  } else
    return !1;
}
function T(e) {
  return e === 9 || e === 10 || e === 12 || e === 13 || e === 32;
}
function Fe(e) {
  for (var r = e.length - 1; r >= 0; r--) {
    var i = e[r];
    if (i === "li" || i === "td")
      return !1;
    if (i === "ol" || i === "table" || i === "ul")
      return !0;
  }
  return !1;
}
function Ge(e) {
  return e.trim().replace(Le, " ");
}
function fe(e, r) {
  var i = e.charCodeAt(r);
  if ((i & 64512) === 55296) {
    var a = e.charCodeAt(r + 1);
    if ((a & 64512) === 56320)
      return String.fromCharCode(i, a);
  }
  return String.fromCharCode(i);
}
function Pe(e, r) {
  var i = fe(e, r);
  if (i === "&")
    for (; ; ) {
      r++;
      var a = e.charCodeAt(r);
      if (ce(a))
        i += String.fromCharCode(a);
      else if (a === K) {
        i += String.fromCharCode(a);
        break;
      } else
        break;
    }
  return i;
}
const $e = {
  /**
   * @description
   * - This mixin is used to wait for an element's clientHeight to be available,
   *   before executing a function.
   * - ResizeObserver will be resolved into a Promise, which then can be used to access the height.
   * @example
   *  this.waitForElementHeight(this.$refs.myCustomRef).then((element) => {
   *      ... do stuff with the element's height
   *  }).catch(() => {
   *      console.warn(
   *          'Could not get clientHeight of element with ref: myCustomRef',
   *      );
   *  });
   */
  methods: {
    async waitForElementHeight(e, r = 3e3) {
      return new Promise((i, a) => {
        e.clientHeight && i(e.clientHeight);
        const n = new ResizeObserver(() => {
          e.clientHeight && (i(e.clientHeight), n.disconnect());
        });
        n.observe(e, {
          childList: !0,
          subtree: !0,
          attribute: !0
        }), setTimeout(() => {
          a(), n.disconnect();
        }, r);
      });
    }
  }
};
const ze = (e, r) => {
  const i = e.__vccOpts || e;
  for (const [a, n] of r)
    i[a] = n;
  return i;
}, Ie = {
  props: {
    /**
     * TruncateValue are the characters-number that the text should be truncate to
     */
    truncateValue: { type: Number, default: null },
    /**
     * @prop onlyIfMoreThanValue define a condition to activate the truncate
     * only if characters count is greater than the given value
     *
     * @example Truncate will be active only if more than 700 characters are available
     * :only-if-more-than-value="700"
     */
    onlyIfMoreThanValue: { type: Number, default: null },
    readMoreButtonText: { type: String, default: "Read more" },
    readLessButtonText: { type: String, default: "Read less" }
  },
  mixins: [$e],
  data: () => ({
    clippedHTML: "",
    expandHeightValue: null,
    collapseHeightValue: null,
    isExpanded: !1,
    readMoreButtonVisible: !1,
    isResized: !1,
    wrongContainerHeightValue: !1
  }),
  methods: {
    toggle() {
      this.isExpanded = !this.isExpanded, this.truncateMethod();
    },
    addReadMore() {
      this.matchTextLength().then((e) => {
        this.readMoreButtonVisible = e;
      });
    },
    async matchTextLength() {
      return this.countCharacters() > this.onlyIfMoreThanValue && this.truncateValue < this.countCharacters();
    },
    countCharacters() {
      return new DOMParser().parseFromString(this.htmlString, "text/html").querySelector("body").innerText.length;
    },
    /**
     * @method truncateCharacters
     * Receive @argument truncateValue and based on this value will truncate
     */
    truncateCharacters(e) {
      this.clippedHTML = Se(this.htmlString, e, { html: !0 });
    },
    /**
     * @method truncateMethod
     * The main method that will truncate if collapse, or untruncate if expand
     *
     * @note Due to inconsistency window box height API there are several
     * conditional checks to reset the value incase of mismatch
     */
    truncateMethod() {
      this.expandHeightValue - this.collapseHeightValue <= 15 && !this.initialTruncate && (this.resetHeight(), this.wrongContainerHeightValue = !0), !this.isExpanded && this.truncateOnlyIfMoreThan ? (!this.initialTruncate & !this.isInViewport(this.$refs.scrollRef) && this.$refs.scrollRef.scrollIntoView({ behavior: "smooth", block: "center" }), this.truncateCharacters(this.truncateValue)) : this.truncateCharacters(1e6), this.wrongContainerHeightValue && (this.wrongContainerHeightValue = !1, this.expandHeight(), setTimeout(() => {
        this.collapseHeight();
      }, 500)), this.initialTruncate = !1;
    },
    /**
     * @method resetHeight
     * In case of expand and than resize screen, we don't have the collapse height value
     * and therefore setting the height 'auto' and than only setting new collapse height
     */
    resetHeight() {
      this.expandHeightValue = "auto", this.collapseHeightValue = "auto";
    },
    onResizeMethod() {
      this.wrongContainerHeightValue = !0, this.resetHeight();
    },
    expandHeight() {
      this.waitForElementHeight(this.$refs.htmlRef).then(() => {
        var e;
        this.expandHeightValue = (e = this.$refs.htmlRef) == null ? void 0 : e.clientHeight;
      }).catch(() => {
        console.warn("Could not get clientHeight of element with ref: htmlRef");
      });
    },
    collapseHeight() {
      this.waitForElementHeight(this.$refs.contentBox).then(() => {
        var e;
        this.collapseHeightValue = (e = this.$refs.contentBox) == null ? void 0 : e.clientHeight;
      }).catch(() => {
        console.warn("Could not get clientHeight of element with ref: contentBox");
      });
    },
    isInViewport(e) {
      const r = e.getBoundingClientRect();
      return r.top >= 0 && r.left >= 0 && r.bottom <= (window.innerHeight || document.documentElement.clientHeight) && r.right <= (window.innerWidth || document.documentElement.clientWidth);
    }
  },
  async mounted() {
    this.initialTruncate = !0, this.truncateMethod(), this.addReadMore(), this.$nextTick(() => {
      window.addEventListener("resize", this.onResizeMethod);
    }), this.expandHeight(), this.collapseHeight();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResizeMethod);
  },
  computed: {
    htmlString() {
      return this.$refs.htmlRef.innerHTML;
    },
    /**
     * @method displayHeight
     * Will assign the height values of expand or collapse to the content parent container
     * and therefor the height transition will take place
     */
    displayHeight() {
      return this.expandHeightValue === "auto" || this.collapseHeightValue === "auto" ? "height: auto" : this.isExpanded && this.expandHeightValue !== "auto" ? `height: ${this.expandHeightValue}px` : `height: ${this.collapseHeightValue}px`;
    },
    truncateOnlyIfMoreThan() {
      return this.countCharacters() > this.onlyIfMoreThanValue;
    }
  }
}, ue = (e) => (Ce("data-v-d0683042"), e = e(), we(), e), Ne = { class: "truncate-read-more" }, Ue = { ref: "scrollRef" }, xe = { style: { position: "relative" } }, Xe = {
  ref: "htmlRef",
  style: { visibility: "hidden", position: "absolute", "z-index": "-1" },
  class: "rte readmore__content readmore__content--htmlRef"
}, qe = ["innerHTML"], Ke = {
  key: 0,
  class: "readmore-button-container",
  style: { "margin-top": "0.5rem" }
}, Ye = {
  viewBox: "0 0 19 12",
  fill: "currentColor",
  style: { width: "9.3765px", height: "5.5855px", "margin-right": "0.3rem", "margin-bottom": "0.15rem" }
}, Je = /* @__PURE__ */ ue(() => /* @__PURE__ */ A("path", { d: "M8.879.204a.702.702 0 0 1 1 0l8.672 8.6a.702.702 0 0 1 0 1l-1.16 1.16a.702.702 0 0 1-1 0L9.377 4.019l-7.014 6.943a.702.702 0 0 1-1 0l-1.16-1.16a.702.702 0 0 1 0-1L8.879.204z" }, null, -1)), Qe = [
  Je
], Ze = {
  viewBox: "0 0 18.753 11.171",
  fill: "currentColor",
  style: { width: "9.3765px", height: "5.5855px", "margin-right": "0.3rem", "margin-bottom": "0.1rem" }
}, je = /* @__PURE__ */ ue(() => /* @__PURE__ */ A("path", { d: "M8.879 10.964a.7.7 0 0 0 1 0l8.672-8.6a.7.7 0 0 0 0-1l-1.16-1.16a.7.7 0 0 0-1 0L9.377 7.149 2.363.206a.7.7 0 0 0-1 0l-1.16 1.16a.7.7 0 0 0 0 1z" }, null, -1)), et = [
  je
];
function tt(e, r, i, a, n, f) {
  return M(), y("div", Ne, [
    A("div", Ue, null, 512),
    A("div", xe, [
      A("div", Xe, [
        Ee(e.$slots, "html", {}, void 0, !0)
      ], 512)
    ]),
    A("div", {
      ref: "contentBox",
      style: be(f.displayHeight),
      class: "rte readmore__content readmore__content--contentBox"
    }, [
      A("div", {
        innerHTML: e.isExpanded ? f.htmlString : e.clippedHTML
      }, null, 8, qe)
    ], 4),
    e.readMoreButtonVisible ? (M(), y("div", Ke, [
      e.isExpanded ? (M(), y("div", {
        key: 0,
        class: "truncate-read-more__button",
        onClick: r[0] || (r[0] = (...u) => f.toggle && f.toggle(...u))
      }, [
        (M(), y("svg", Ye, Qe)),
        le(" " + oe(i.readLessButtonText), 1)
      ])) : X("", !0),
      e.isExpanded ? X("", !0) : (M(), y("div", {
        key: 1,
        class: "truncate-read-more__button",
        onClick: r[1] || (r[1] = (...u) => f.toggle && f.toggle(...u))
      }, [
        (M(), y("svg", Ze, et)),
        le(" " + oe(i.readMoreButtonText), 1)
      ]))
    ])) : X("", !0)
  ]);
}
const rt = /* @__PURE__ */ ze(Ie, [["render", tt], ["__scopeId", "data-v-d0683042"]]), it = (e) => {
  e.component("truncate-read-more", rt);
}, lt = {
  install: (e) => {
    it(e);
  }
};
export {
  rt as TruncateReadMore,
  lt as VueTruncateReadMore
};
