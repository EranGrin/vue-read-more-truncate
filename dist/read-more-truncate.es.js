import { openBlock as M, createElementBlock as y, createElementVNode as A, renderSlot as be, normalizeStyle as Ce, createTextVNode as le, toDisplayString as oe, createCommentVNode as X, pushScopeId as we, popScopeId as Ae } from "vue";
var se = {};
Object.defineProperty(se, "__esModule", { value: !0 });
var Te = [
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
], he = [
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
], I = ["audio", "math", "svg", "video"], g = 10, Re = 33, Me = 34, ye = 38, ge = 39, W = 47, K = 59, N = 60, Oe = 61, q = 62, Ve = /[<&\n\ud800-\udbff]/, Le = /[<&\ud800-\udbff]/, ke = /\s+/g;
function Se(e, t, i) {
  return i === void 0 && (i = {}), e ? (e = e.toString(), i.html ? We(e, t, i) : Be(e, t, i)) : "";
}
var De = se.default = Se;
function We(e, t, i) {
  for (var a = i.imageWeight, n = a === void 0 ? 2 : a, f = i.indicator, u = f === void 0 ? "…" : f, R = i.maxLines, m = R === void 0 ? 1 / 0 : R, s = i.stripTags, O = s === void 0 ? !1 : s, l = u.length, d = 1, p = typeof O == "boolean" ? function() {
    return O;
  } : function(E) {
    return O.includes(E);
  }, c = [], H = function(E) {
    for (var z; z = c.pop(), z !== void 0; )
      p(z) || (E += "</" + z + ">");
    return E;
  }, r = 0, v = -1, Y = e.length; r < Y; r++) {
    var V = r ? e.slice(r) : e, J = Ge(c), ve = v > -1 || J ? Le : Ve, B = V.search(ve), b = B > -1 ? B : V.length;
    if (v === -1) {
      if (J) {
        var C = Pe(b === V.length ? V : V.slice(0, B));
        if (p(c[c.length - 1])) {
          var Q = r > 0 && !T(e.charCodeAt(r - 1)), Z = !T(e.charCodeAt(r + b));
          C.length > 0 ? C = (Q ? " " : "") + C + (Z ? " " : "") : Q && Z && (C = " "), e = e.slice(0, r) + C + e.slice(r + b), b = C.length;
        }
        if (l += C.length, l > t)
          break;
      } else if (l += b, l > t) {
        r = Math.max(r + b - l + t, 0);
        break;
      }
    }
    if (r += b, B === -1)
      break;
    var _ = e.charCodeAt(r);
    if (_ === N) {
      var F = e.charCodeAt(r + 1), j = F === Re;
      if (j && e.substr(r + 2, 2) === "--") {
        var _e = e.indexOf("-->", r + 4) + 3;
        r = _e - 1;
      } else if (j && e.substr(r + 2, 7) === "[CDATA[") {
        var me = e.indexOf("]]>", r + 9) + 3;
        r = me - 1;
      } else {
        var U = F === W;
        if (l === t && !U) {
          l++;
          break;
        }
        for (var G = 0, h = r, L = !1; ; ) {
          if (h++, h >= Y)
            throw new Error("Invalid HTML: " + e);
          var k = e.charCodeAt(h);
          if (L)
            G ? k === G && (L = !1) : T(k) ? L = !1 : k === q && (L = !1, h--);
          else if (k === Oe) {
            for (; T(e.charCodeAt(h + 1)); )
              h++;
            L = !0;
            var x = e.charCodeAt(h + 1);
            x === Me || x === ge ? (G = x, h++) : G = 0;
          } else if (k === q) {
            var ee = r + (U ? 2 : 1), pe = Math.min(Fe(e, ee), h), o = e.slice(ee, pe).toLowerCase();
            o.charCodeAt(o.length - 1) === W && (o = o.slice(0, o.length - 1));
            var P = p(o);
            if (U) {
              var He = c.pop();
              if (He !== o)
                throw new Error("Invalid HTML: " + e);
              if (I.includes(o) && !I.some(function(E) {
                return c.includes(E);
              })) {
                if (P)
                  r = v, v = -1;
                else if (v = -1, l += n, l > t)
                  break;
              }
              var Ee = he.includes(o);
              if (Ee && v === -1 && !P && (d++, d > m)) {
                c.push(o);
                break;
              }
            } else if (Te.includes(o) || e.charCodeAt(h - 1) === W) {
              if (!P) {
                if (o === "br") {
                  if (d++, d > m)
                    break;
                } else if (o === "img" && (l += n, l > t))
                  break;
              }
            } else
              I.some(function(E) {
                return c.includes(E);
              }) || I.includes(o) && (v = r), c.push(o);
            P && v === -1 ? (e = e.slice(0, r) + e.slice(h + 1), r--) : r = h;
            break;
          }
        }
        if (l > t || d > m)
          break;
      }
    } else if (_ === ye) {
      for (var h = r + 1, te = !0; ; ) {
        var re = e.charCodeAt(h);
        if (ce(re))
          h++;
        else {
          if (re === K)
            break;
          te = !1;
          break;
        }
      }
      if (v === -1 && (l++, l > t))
        break;
      te && (r = h);
    } else if (_ === g) {
      if (l++, l > t || (d++, d > m))
        break;
    } else {
      if (v === -1 && (l++, l > t))
        break;
      if ((_ & 64512) === 55296) {
        var F = e.charCodeAt(r + 1);
        (F & 64512) === 56320 && r++;
      }
    }
  }
  if (l > t) {
    var S = $e(e, r);
    if (u) {
      for (var w = r + S.length; e.charCodeAt(w) === N && e.charCodeAt(w + 1) === W; ) {
        var ie = e.indexOf(">", w + 2) + 1;
        if (ie)
          w = ie;
        else
          break;
      }
      w && (w === e.length || ne(e, w)) && (r += S.length, S = e.charAt(r));
    }
    for (; S === "<" && e.charCodeAt(r + 1) === W; ) {
      var o = c.pop();
      if (!o)
        break;
      var $ = e.indexOf(">", r + 2);
      if ($ === -1 || e.slice(r + 2, $).trim() !== o)
        throw new Error("Invalid HTML: " + e);
      p(o) ? e = e.slice(0, r) + e.slice($ + 1) : r = $ + 1, S = e.charAt(r);
    }
    if (r < e.length) {
      if (!i.breakWords)
        for (var D = r - u.length; D >= 0; D--) {
          var _ = e.charCodeAt(D);
          if (_ === q || _ === K)
            break;
          if (_ === g || _ === N) {
            r = D;
            break;
          } else if (T(_)) {
            r = D + (u ? 1 : 0);
            break;
          }
        }
      var ae = e.slice(0, r);
      return ne(e, r) || (ae += u), H(ae);
    }
  } else if (d > m)
    return H(e.slice(0, r));
  return e;
}
function Be(e, t, i) {
  for (var a = i.indicator, n = a === void 0 ? "…" : a, f = i.maxLines, u = f === void 0 ? 1 / 0 : f, R = n.length, m = 1, s = 0, O = e.length; s < O && (R++, !(R > t)); s++) {
    var l = e.charCodeAt(s);
    if (l === g) {
      if (m++, m > u)
        break;
    } else if ((l & 64512) === 55296) {
      var d = e.charCodeAt(s + 1);
      (d & 64512) === 56320 && s++;
    }
  }
  if (R > t) {
    var p = fe(e, s);
    if (n) {
      var c = s + p.length;
      if (c === e.length)
        return e;
      if (e.charCodeAt(c) === g)
        return e.slice(0, s + p.length);
    }
    if (!i.breakWords)
      for (var H = s - n.length; H >= 0; H--) {
        var l = e.charCodeAt(H);
        if (l === g) {
          s = H, p = `
`;
          break;
        } else if (T(l)) {
          s = H + (n ? 1 : 0);
          break;
        }
      }
    return e.slice(0, s) + (p === `
` ? "" : n);
  } else if (m > u)
    return e.slice(0, s);
  return e;
}
function Fe(e, t) {
  for (var i = e.length, a = t; a < i; a++)
    if (T(e.charCodeAt(a)))
      return a;
  return i;
}
function ce(e) {
  return e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
function ne(e, t) {
  var i = e.charCodeAt(t);
  if (i === g)
    return !0;
  if (i === N) {
    var a = "(" + he.join("|") + "|br)", n = new RegExp("^<" + a + `[	
\f\r ]*/?>`, "i");
    return n.test(e.slice(t));
  } else
    return !1;
}
function T(e) {
  return e === 9 || e === 10 || e === 12 || e === 13 || e === 32;
}
function Ge(e) {
  for (var t = e.length - 1; t >= 0; t--) {
    var i = e[t];
    if (i === "li" || i === "td")
      return !1;
    if (i === "ol" || i === "table" || i === "ul")
      return !0;
  }
  return !1;
}
function Pe(e) {
  return e.trim().replace(ke, " ");
}
function fe(e, t) {
  var i = e.charCodeAt(t);
  if ((i & 64512) === 55296) {
    var a = e.charCodeAt(t + 1);
    if ((a & 64512) === 56320)
      return String.fromCharCode(i, a);
  }
  return String.fromCharCode(i);
}
function $e(e, t) {
  var i = fe(e, t);
  if (i === "&")
    for (; ; ) {
      t++;
      var a = e.charCodeAt(t);
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
const ze = {
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
    async waitForElementHeight(e, t = 3e3) {
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
        }, t);
      });
    }
  }
};
const Ie = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [a, n] of t)
    i[a] = n;
  return i;
}, Ne = {
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
  mixins: [ze],
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
      this.clippedHTML = De(this.htmlString, e, { html: !0 });
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
      const t = e.getBoundingClientRect();
      return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth);
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
}, ue = (e) => (we("data-v-d0683042"), e = e(), Ae(), e), Ue = { class: "truncate-read-more" }, xe = { ref: "scrollRef" }, Xe = { style: { position: "relative" } }, qe = {
  ref: "htmlRef",
  style: { visibility: "hidden", position: "absolute", "z-index": "-1" },
  class: "rte readmore__content readmore__content--htmlRef"
}, Ke = ["innerHTML"], Ye = {
  key: 0,
  class: "readmore-button-container",
  style: { "margin-top": "0.5rem" }
}, Je = {
  viewBox: "0 0 19 12",
  fill: "currentColor",
  style: { width: "9.3765px", height: "5.5855px", "margin-right": "0.3rem", "margin-bottom": "0.15rem" }
}, Qe = /* @__PURE__ */ ue(() => /* @__PURE__ */ A("path", { d: "M8.879.204a.702.702 0 0 1 1 0l8.672 8.6a.702.702 0 0 1 0 1l-1.16 1.16a.702.702 0 0 1-1 0L9.377 4.019l-7.014 6.943a.702.702 0 0 1-1 0l-1.16-1.16a.702.702 0 0 1 0-1L8.879.204z" }, null, -1)), Ze = [
  Qe
], je = {
  viewBox: "0 0 18.753 11.171",
  fill: "currentColor",
  style: { width: "9.3765px", height: "5.5855px", "margin-right": "0.3rem", "margin-bottom": "0.1rem" }
}, et = /* @__PURE__ */ ue(() => /* @__PURE__ */ A("path", { d: "M8.879 10.964a.7.7 0 0 0 1 0l8.672-8.6a.7.7 0 0 0 0-1l-1.16-1.16a.7.7 0 0 0-1 0L9.377 7.149 2.363.206a.7.7 0 0 0-1 0l-1.16 1.16a.7.7 0 0 0 0 1z" }, null, -1)), tt = [
  et
];
function rt(e, t, i, a, n, f) {
  return M(), y("div", Ue, [
    A("div", xe, null, 512),
    A("div", Xe, [
      A("div", qe, [
        be(e.$slots, "html", {}, void 0, !0)
      ], 512)
    ]),
    A("div", {
      ref: "contentBox",
      style: Ce(f.displayHeight),
      class: "rte readmore__content readmore__content--contentBox"
    }, [
      A("div", {
        innerHTML: e.isExpanded ? f.htmlString : e.clippedHTML
      }, null, 8, Ke)
    ], 4),
    e.readMoreButtonVisible ? (M(), y("div", Ye, [
      e.isExpanded ? (M(), y("div", {
        key: 0,
        class: "truncate-read-more__button",
        onClick: t[0] || (t[0] = (...u) => f.toggle && f.toggle(...u))
      }, [
        (M(), y("svg", Je, Ze)),
        le(" " + oe(i.readLessButtonText), 1)
      ])) : X("", !0),
      e.isExpanded ? X("", !0) : (M(), y("div", {
        key: 1,
        class: "truncate-read-more__button",
        onClick: t[1] || (t[1] = (...u) => f.toggle && f.toggle(...u))
      }, [
        (M(), y("svg", je, tt)),
        le(" " + oe(i.readMoreButtonText), 1)
      ]))
    ])) : X("", !0)
  ]);
}
const de = /* @__PURE__ */ Ie(Ne, [["render", rt], ["__scopeId", "data-v-d0683042"]]), it = (e) => {
  e.component("truncate-read-more", de);
}, at = (e) => {
  e.component("truncate-read-more", de);
}, ot = {
  install: (e) => {
    e.version && e.version.startsWith("3") ? at(e) : it(e);
  }
};
export {
  de as TruncateReadMore,
  ot as VueTruncateReadMore
};
