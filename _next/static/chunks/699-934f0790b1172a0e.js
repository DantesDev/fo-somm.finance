"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [699],
  {
    79042: function (e, n, r) {
      r.d(n, {
        Td: function () {
          return v;
        },
        Th: function () {
          return g;
        },
        Tr: function () {
          return C;
        },
        hr: function () {
          return j;
        },
        iA: function () {
          return p;
        },
        p3: function () {
          return b;
        },
      });
      var t = r(16557),
        i = r(19703),
        s = r(67294);
      function a() {
        return (
          (a = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var r = arguments[n];
                  for (var t in r)
                    Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
                }
                return e;
              }),
          a.apply(this, arguments)
        );
      }
      function l(e, n) {
        if (null == e) return {};
        var r,
          t,
          i = {},
          s = Object.keys(e);
        for (t = 0; t < s.length; t++)
          (r = s[t]), n.indexOf(r) >= 0 || (i[r] = e[r]);
        return i;
      }
      var o = ["className"],
        c = ["placement"],
        x = ["isNumeric"],
        u = ["isNumeric"],
        m = (0, t.eC)("Table"),
        d = m[0],
        f = m[1],
        p = (0, t.Gp)(function (e, n) {
          var r = (0, t.jC)("Table", e),
            c = (0, t.Lr)(e),
            x = c.className,
            u = l(c, o);
          return s.createElement(
            d,
            { value: r },
            s.createElement(
              t.m$.table,
              a(
                {
                  role: "table",
                  ref: n,
                  __css: r.table,
                  className: (0, i.cx)("chakra-table", x),
                },
                u
              )
            )
          );
        });
      i.Ts && (p.displayName = "Table");
      var h = (0, t.Gp)(function (e, n) {
        var r = e.placement,
          i = void 0 === r ? "bottom" : r,
          o = l(e, c),
          x = f();
        return s.createElement(
          t.m$.caption,
          a({}, o, { ref: n, __css: a({}, x.caption, { captionSide: i }) })
        );
      });
      i.Ts && (h.displayName = "TableCaption");
      var j = (0, t.Gp)(function (e, n) {
          var r = f();
          return s.createElement(
            t.m$.thead,
            a({}, e, { ref: n, __css: r.thead })
          );
        }),
        b = (0, t.Gp)(function (e, n) {
          var r = f();
          return s.createElement(
            t.m$.tbody,
            a({}, e, { ref: n, __css: r.tbody })
          );
        }),
        g = (0, t.Gp)(function (e, n) {
          var r = e.isNumeric,
            i = l(e, x),
            o = f();
          return s.createElement(
            t.m$.th,
            a({}, i, { ref: n, __css: o.th, "data-is-numeric": r })
          );
        }),
        C = (0, t.Gp)(function (e, n) {
          var r = f();
          return s.createElement(
            t.m$.tr,
            a({ role: "row" }, e, { ref: n, __css: r.tr })
          );
        }),
        v = (0, t.Gp)(function (e, n) {
          var r = e.isNumeric,
            i = l(e, u),
            o = f();
          return s.createElement(
            t.m$.td,
            a({ role: "gridcell" }, i, {
              ref: n,
              __css: o.td,
              "data-is-numeric": r,
            })
          );
        });
    },
    63898: function (e, n, r) {
      r.d(n, {
        Il: function () {
          return a;
        },
        FR: function () {
          return x;
        },
        E_: function () {
          return u;
        },
        zk: function () {
          return m;
        },
        Ye: function () {
          return o;
        },
      });
      var t = r(85893),
        i = r(79042),
        s = r(22822),
        a = function (e) {
          var n = e.data;
          return (0, t.jsxs)(i.iA, {
            size: "lg",
            variant: "contribute",
            display: { base: "none", lg: "initial" },
            children: [
              (0, t.jsx)(i.hr, {
                children: (0, t.jsxs)(i.Tr, {
                  children: [
                    (0, t.jsx)(i.Th, { children: "Role" }),
                    (0, t.jsx)(i.Th, { children: "Contribution" }),
                    (0, t.jsx)(i.Th, { children: "Earn" }),
                    (0, t.jsx)(i.Th, {}),
                  ],
                }),
              }),
              (0, t.jsx)(i.p3, {
                children: n.map(function (e, n) {
                  return (0,
                  t.jsxs)(i.Tr, { fontSize: "md", children: [(0, t.jsx)(i.Td, { fontSize: "1.3rem", fontWeight: "bold", children: e.roleTitle }), (0, t.jsx)(i.Td, { maxW: "31.25rem", children: e.contribution }), (0, t.jsx)(i.Td, { children: e.earnTitle.join(", ") }), (0, t.jsx)(i.Td, { children: (0, t.jsx)(s.n, { buttonTitle: "Connect", href: e.link, isBlank: !0 }) })] }, n);
                }),
              }),
            ],
          });
        },
        l = r(68527),
        o = function (e) {
          var n = e.data;
          return (0, t.jsx)(l.xu, {
            display: { base: "initial", lg: "none" },
            children: n.map(function (e, n) {
              return (0,
              t.jsxs)(l.Kq, { fontSize: "md", borderBottom: "1px", borderColor: "primary.dark", _first: { borderTop: "1px", borderColor: "primary.dark" }, py: "2rem", spacing: 4, children: [(0, t.jsx)(l.xv, { fontSize: "1.3rem", fontWeight: "bold", children: e.roleTitle }), (0, t.jsxs)(l.Kq, { spacing: 4, children: [(0, t.jsxs)(l.xu, { children: [(0, t.jsx)(l.xv, { fontSize: "xs", fontWeight: 600, pb: "0.25rem", children: "Contribution" }), (0, t.jsx)(l.xv, { fontSize: "md", children: e.contribution })] }), (0, t.jsxs)(l.xu, { children: [(0, t.jsx)(l.xv, { fontSize: "xs", fontWeight: 600, pb: "0.25rem", children: "Earn" }), (0, t.jsx)(l.xv, { fontSize: "md", children: e.earnTitle.join(", ") })] })] }), (0, t.jsx)(l.xu, { children: (0, t.jsx)(s.n, { buttonTitle: "Connect", href: e.link, isBlank: !0 }) })] }, n);
            }),
          });
        },
        c = r(34651),
        x = function () {
          return (0, t.jsx)(l.xu, {
            width: "40.75rem",
            height: "auto",
            position: "absolute",
            top: { base: "-5.625rem", md: "-5.625rem", lg: "-9.6rem" },
            left: { base: "-28.75rem", md: "-22.3rem", lg: "-21rem" },
            zIndex: "1",
            maxW: "initial",
            children: (0, t.jsxs)("picture", {
              children: [
                (0, t.jsx)("source", {
                  srcSet: "assets/bg-L1-min.webp",
                  type: "image/webp",
                }),
                (0, t.jsx)("source", {
                  srcSet: "assets/bg-L1-min.png",
                  type: "image/png",
                }),
                (0, t.jsx)(c.Ee, {
                  height: "auto",
                  width: "81.5rem",
                  src: "assets/bg-L1-min.png",
                  alt: "",
                  draggable: "false",
                }),
              ],
            }),
          });
        },
        u = function () {
          return (0, t.jsx)(l.xu, {
            width: "40.75rem",
            height: "auto",
            position: "absolute",
            top: { base: "-15.9rem", md: "-26.5rem", lg: "-25.5rem" },
            right: { base: "-21rem", md: "-18.75rem", lg: "-17.8rem" },
            zIndex: "1",
            maxW: "initial",
            children: (0, t.jsxs)("picture", {
              children: [
                (0, t.jsx)("source", {
                  srcSet: "assets/bg-R1-min.webp",
                  type: "image/webp",
                }),
                (0, t.jsx)("source", {
                  srcSet: "assets/bg-R1-min.png",
                  type: "image/png",
                }),
                (0, t.jsx)(c.Ee, {
                  height: "41.6rem",
                  width: "80rem",
                  src: "aassets/bg-R1-min.png",
                  alt: "",
                  draggable: "false",
                }),
              ],
            }),
          });
        },
        m = function () {
          return (0, t.jsx)(l.xu, {
            width: "86.25rem",
            height: "auto",
            position: "absolute",
            top: { base: "100.5rem", md: "102.5rem", lg: "52.25rem" },
            right: { base: "-62.5rem", md: "-56.25rem", lg: "-37rem" },
            zIndex: "1",
            maxW: "initial",
            children: (0, t.jsxs)("picture", {
              children: [
                (0, t.jsx)("source", {
                  srcSet: "assets/bg-R2-min.webp",
                  type: "image/webp",
                }),
                (0, t.jsx)("source", {
                  srcSet: "assets/bg-R2-min.png",
                  type: "image/png",
                }),
                (0, t.jsx)(c.Ee, {
                  height: "52.75rem",
                  width: "86.25rem",
                  src: "assets/bg-R2-min.png",
                  alt: "",
                  draggable: "false",
                }),
              ],
            }),
          });
        };
    },
    84856: function (e, n, r) {
      r.d(n, {
        $: function () {
          return m;
        },
      });
      var t = r(40872),
        i = r(26042),
        s = r(69396),
        a = r(85893),
        l = r(68527),
        o = function (e) {
          var n = (0, t.Z)({}, e);
          return (0, a.jsxs)(
            l.xv,
            (0, s.Z)((0, i.Z)({}, n), {
              children: ["\xa9 ", new Date().getFullYear(), " Somm "],
            })
          );
        },
        c = function () {
          return (0, a.jsxs)("svg", {
            width: 15,
            height: 15,
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsx)("path", {
                d: "M10.9029 4.52571C10.9616 4.58661 11.0323 4.63477 11.1104 4.66721C11.1886 4.69965 11.2726 4.71568 11.3572 4.71429C11.527 4.71207 11.6892 4.64362 11.8093 4.52354C11.9294 4.40346 11.9978 4.24123 12 4.07143V0.642857C11.9978 0.473051 11.9294 0.310825 11.8093 0.190743C11.6892 0.0706621 11.527 0.00221997 11.3572 0L7.92861 0C7.7588 0.00221997 7.59658 0.0706621 7.4765 0.190743C7.35641 0.310825 7.28797 0.473051 7.28575 0.642857C7.28486 0.727391 7.30112 0.811227 7.33353 0.889306C7.36594 0.967385 7.41383 1.03809 7.47432 1.09714L8.57147 2.20286C8.5922 2.22285 8.6087 2.24681 8.61997 2.27332C8.63124 2.29983 8.63704 2.32834 8.63704 2.35714C8.63704 2.38595 8.63124 2.41446 8.61997 2.44096C8.6087 2.46747 8.5922 2.49144 8.57147 2.51143L5.52004 5.57143C5.39965 5.69196 5.33203 5.85536 5.33203 6.02571C5.33203 6.19607 5.39965 6.35946 5.52004 6.48C5.64057 6.60039 5.80397 6.66801 5.97432 6.66801C6.14468 6.66801 6.30807 6.60039 6.42861 6.48L9.48861 3.42857C9.52957 3.3871 9.58467 3.36261 9.64289 3.36C9.69715 3.36159 9.74897 3.38292 9.78861 3.42L10.9029 4.52571Z",
                fill: "#6C4ED9",
              }),
              (0, a.jsx)("path", {
                d: "M9.79714 5.23711C9.77715 5.21637 9.75319 5.19987 9.72668 5.18861C9.70017 5.17734 9.67166 5.17153 9.64286 5.17153C9.61405 5.17153 9.58554 5.17734 9.55903 5.18861C9.53253 5.19987 9.50856 5.21637 9.48857 5.23711L8.63143 6.09425C8.59439 6.13731 8.57321 6.19176 8.57143 6.24854V10.5343C8.57143 10.5911 8.54885 10.6456 8.50867 10.6858C8.46848 10.726 8.41397 10.7485 8.35714 10.7485H1.5C1.44317 10.7485 1.38866 10.726 1.34848 10.6858C1.30829 10.6456 1.28571 10.5911 1.28571 10.5343V3.67711C1.28071 3.64624 1.28252 3.61464 1.29102 3.58455C1.29953 3.55445 1.31451 3.52658 1.33493 3.50289C1.35536 3.4792 1.38071 3.46027 1.40923 3.44742C1.43775 3.43458 1.46873 3.42813 1.5 3.42854H5.78571C5.84249 3.42675 5.89694 3.40558 5.94 3.36854L6.79714 2.51139C6.81788 2.4914 6.83438 2.46744 6.84564 2.44093C6.85691 2.41442 6.86272 2.38591 6.86272 2.35711C6.86272 2.3283 6.85691 2.2998 6.84564 2.27329C6.83438 2.24678 6.81788 2.22281 6.79714 2.20282C6.75408 2.16578 6.69963 2.14461 6.64286 2.14282H1.5C1.10287 2.14507 0.722644 2.30383 0.441826 2.58465C0.161008 2.86547 0.00225009 3.24569 0 3.64282L0 10.5C0.00225009 10.8971 0.161008 11.2773 0.441826 11.5581C0.722644 11.839 1.10287 11.9977 1.5 12H8.35714C8.75427 11.9977 9.1345 11.839 9.41532 11.5581C9.69613 11.2773 9.85489 10.8971 9.85714 10.5V5.35711C9.84852 5.31236 9.82776 5.27085 9.79714 5.23711Z",
                fill: "#6C4ED9",
              }),
            ],
          });
        },
        x = r(78663),
        u = function () {
          return (0, a.jsxs)(l.xu, {
            display: "flex",
            w: "full",
            justifyContent: { base: "unset", md: "flex-end" },
            flexWrap: { base: "wrap", sm: "nowrap" },
            gap: { base: 4, sm: "20px" },
            children: [
              (0, a.jsx)(l.rU, {
                href: "https://sommelier-finance.gitbook.io/sommelier-documentation",
                children: (0, a.jsxs)(l.xu, {
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  w: "6.6rem",
                  children: [
                    (0, a.jsx)(l.xv, {
                      as: "u",
                      fontSize: "12px",
                      textDecoration: "none",
                      children: "Documentation",
                    }),
                    (0, a.jsx)(c, {}),
                  ],
                }),
              }),
              (0, a.jsx)(l.rU, {
                href: x.G.telegram.url,
                isExternal: !0,
                children: (0, a.jsxs)(l.xu, {
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  w: "4.3rem",
                  children: [
                    (0, a.jsx)(l.xv, {
                      as: "u",
                      fontSize: "12px",
                      textDecoration: "none",
                      children: x.G.telegram.name,
                    }),
                    (0, a.jsx)(c, {}),
                  ],
                }),
              }),
            ],
          });
        },
        m = function (e) {
          var n = (0, t.Z)({}, e);
          return (0, a.jsx)(
            l.W2,
            (0, s.Z)(
              (0, i.Z)(
                {
                  display: "flex",
                  flexDir: "column",
                  justifyContent: "flex-start",
                  maxW: "container.xl",
                  w: "100%",
                  position: "relative",
                  px: { base: 4, md: 7, lg: 24 },
                  pt: { base: 4, md: 16 },
                  zIndex: 10,
                },
                n
              ),
              {
                children: (0, a.jsx)(l.kC, {
                  mt: 10,
                  pt: 10,
                  pb: 10,
                  borderTop: "1px solid",
                  borderColor: "primary.dark",
                  children: (0, a.jsxs)(l.kC, {
                    w: "100%",
                    marginTop: ["1.5rem", "0"],
                    justifyContent: "space-between",
                    flexDir: { base: "column-reverse", md: "row" },
                    children: [
                      (0, a.jsx)(o, {
                        color: "neutral.300",
                        fontSize: "sm",
                        mt: { base: 8, md: 0 },
                      }),
                      (0, a.jsx)(u, {}),
                    ],
                  }),
                }),
              }
            )
          );
        };
    },
    55431: function (e, n, r) {
      r.d(n, {
        S: function () {
          return o;
        },
      });
      var t = r(26042),
        i = r(69396),
        s = r(99534),
        a = r(85893),
        l = r(68527),
        o = function (e) {
          var n = e.children,
            r = (0, s.Z)(e, ["children"]);
          return (0, a.jsx)(
            l.W2,
            (0, i.Z)(
              (0, t.Z)(
                {
                  display: "flex",
                  flexDir: "column",
                  justifyContent: "flex-start",
                  maxW: "container.xl",
                  w: "100%",
                  position: "relative",
                  px: { base: 6, lg: 24 },
                  pt: { base: 6, md: 16 },
                  pb: { sm: 8, md: 24 },
                  zIndex: 10,
                },
                r
              ),
              { children: n }
            )
          );
        };
    },
  },
]);
