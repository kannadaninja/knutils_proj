(function (e, t) {
  typeof exports == "object" && typeof module < "u"
    ? t(exports)
    : typeof define == "function" && define.amd
    ? define(["exports"], t)
    : ((e = typeof globalThis < "u" ? globalThis : e || self), t((e.Cb = {})));
})(this, function (e) {
  "use strict";
  const t = (n, i = "div") => {
    if (!/<\/?[a-z][\s\S]*>/i.test(n)) return n;
    const o = document.createElement(i);
    return (o.textContent = n), o.outerHTML;
  };
  (e.wrapTextInTag = t),
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
});
