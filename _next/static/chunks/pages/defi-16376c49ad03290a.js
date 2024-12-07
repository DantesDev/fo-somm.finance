(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [701],
  {
    92684: function (e, n, r) {
      "use strict";
      r.d(n, {
        Sx: function () {
          return u;
        },
      });
      var t = r(16557),
        s = r(19703),
        i = r(67294),
        a = r(85393);
      function o() {
        return (
          (o = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var r = arguments[n];
                  for (var t in r)
                    Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
                }
                return e;
              }),
          o.apply(this, arguments)
        );
      }
      var l = s.jU ? i.useLayoutEffect : i.useEffect;
      function c(e, n) {
        void 0 === n && (n = {});
        var r = n,
          t = r.ssr,
          c = void 0 === t || t,
          u = r.fallback,
          d = (0, a.O)(),
          x = Array.isArray(e) ? e : [e],
          f = Array.isArray(u) ? u : [u];
        f = f.filter(function (e) {
          return null != e;
        });
        var p = (0, i.useState)(function () {
            return x.map(function (e, n) {
              return {
                media: e,
                matches: c ? !!f[n] : d.window.matchMedia(e).matches,
              };
            });
          }),
          m = p[0],
          h = p[1];
        return (
          l(function () {
            c &&
              h(
                x.map(function (e) {
                  return { media: e, matches: d.window.matchMedia(e).matches };
                })
              );
            var e = x.map(function (e) {
                return d.window.matchMedia(e);
              }),
              n = function (e) {
                h(function (n) {
                  return n.slice().map(function (n) {
                    return n.media === e.media
                      ? o({}, n, { matches: e.matches })
                      : n;
                  });
                });
              };
            return (
              e.forEach(function (e) {
                (0, s.mf)(e.addListener)
                  ? e.addListener(n)
                  : e.addEventListener("change", n);
              }),
              function () {
                e.forEach(function (e) {
                  (0, s.mf)(e.removeListener)
                    ? e.removeListener(n)
                    : e.removeEventListener("change", n);
                });
              }
            );
          }, []),
          m.map(function (e) {
            return e.matches;
          })
        );
      }
      s.Ts;
      s.Ts;
      function u(e, n) {
        var r,
          i = (function (e) {
            var n,
              r,
              i = (0, s.Kn)(e) ? e : { fallback: null != e ? e : "base" },
              a = (0, t.Fg)().__breakpoints.details.map(function (e) {
                var n = e.minMaxQuery;
                return {
                  breakpoint: e.breakpoint,
                  query: n.replace("@media screen and ", ""),
                };
              }),
              o = a.map(function (e) {
                return e.breakpoint === i.fallback;
              }),
              l = c(
                a.map(function (e) {
                  return e.query;
                }),
                { fallback: o, ssr: i.ssr }
              );
            return null !=
              (n =
                null ==
                (r =
                  a[
                    l.findIndex(function (e) {
                      return 1 == e;
                    })
                  ])
                  ? void 0
                  : r.breakpoint)
              ? n
              : i.fallback;
          })((0, s.Kn)(n) ? n : { fallback: null != n ? n : "base" }),
          a = (0, t.Fg)();
        if (i) {
          var o = Array.from(
            (null == (r = a.__breakpoints) ? void 0 : r.keys) || []
          );
          return (function (e, n, r) {
            void 0 === r && (r = s.AV);
            var t = Object.keys(e).indexOf(n);
            if (-1 !== t) return e[n];
            for (var i = r.indexOf(n); i >= 0; ) {
              if (null != e[r[i]]) {
                t = i;
                break;
              }
              i -= 1;
            }
            return -1 !== t ? e[r[t]] : void 0;
          })(
            (0, s.kJ)(e)
              ? (0, s.sq)(
                  Object.entries((0, s.Yq)(e, o)).map(function (e) {
                    return [e[0], e[1]];
                  })
                )
              : e,
            i,
            o
          );
        }
      }
    },
    79361: function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = function (e, n, r) {
          n in e
            ? Object.defineProperty(e, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = r);
          return e;
        });
    },
    45720: function (e, n, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/defi",
        function () {
          return r(78103);
        },
      ]);
    },
    84856: function (e, n, r) {
      "use strict";
      r.d(n, {
        $: function () {
          return x;
        },
      });
      var t = r(40872),
        s = r(26042),
        i = r(69396),
        a = r(85893),
        o = r(68527),
        l = function (e) {
          var n = (0, t.Z)({}, e);
          return (0, a.jsxs)(
            o.xv,
            (0, i.Z)((0, s.Z)({}, n), {
              children: [
                "\xa9 ",
                new Date().getFullYear(),
                " Somm ",
              ],
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
        u = r(78663),
        d = function () {
          return (0, a.jsxs)(o.xu, {
            display: "flex",
            w: "full",
            justifyContent: { base: "unset", md: "flex-end" },
            flexWrap: { base: "wrap", sm: "nowrap" },
            gap: { base: 4, sm: "20px" },
            children: [
              (0, a.jsx)(o.rU, {
                href: "https://sommelier-finance.gitbook.io/sommelier-documentation",
                children: (0, a.jsxs)(o.xu, {
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  w: "6.6rem",
                  children: [
                    (0, a.jsx)(o.xv, {
                      as: "u",
                      fontSize: "12px",
                      textDecoration: "none",
                      children: "Documentation",
                    }),
                    (0, a.jsx)(c, {}),
                  ],
                }),
              }),
              (0, a.jsx)(o.rU, {
                href: u.G.telegram.url,
                isExternal: !0,
                children: (0, a.jsxs)(o.xu, {
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  w: "4.3rem",
                  children: [
                    (0, a.jsx)(o.xv, {
                      as: "u",
                      fontSize: "12px",
                      textDecoration: "none",
                      children: u.G.telegram.name,
                    }),
                    (0, a.jsx)(c, {}),
                  ],
                }),
              }),
              (0, a.jsx)(o.rU, {
                href: u.G.twitter.url,
                isExternal: !0,
                children: (0, a.jsxs)(o.xu, {
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  w: "3.5rem",
                  children: [
                    (0, a.jsx)(o.xv, {
                      as: "u",
                      fontSize: "12px",
                      textDecoration: "none",
                      children: u.G.twitter.name,
                    }),
                    (0, a.jsx)(c, {}),
                  ],
                }),
              }),
            ],
          });
        },
        x = function (e) {
          var n = (0, t.Z)({}, e);
          return (0, a.jsx)(
            o.W2,
            (0, i.Z)(
              (0, s.Z)(
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
                children: (0, a.jsx)(o.kC, {
                  mt: 10,
                  pt: 10,
                  pb: 10,
                  borderTop: "1px solid",
                  borderColor: "primary.dark",
                  children: (0, a.jsxs)(o.kC, {
                    w: "100%",
                    marginTop: ["1.5rem", "0"],
                    justifyContent: "space-between",
                    flexDir: { base: "column-reverse", md: "row" },
                    children: [
                      (0, a.jsx)(l, {
                        color: "neutral.300",
                        fontSize: "sm",
                        mt: { base: 8, md: 0 },
                      }),
                      (0, a.jsx)(d, {}),
                    ],
                  }),
                }),
              }
            )
          );
        };
    },
    2800: function (e, n, r) {
      "use strict";
      r.d(n, {
        x: function () {
          return l;
        },
      });
      var t = r(26042),
        s = r(69396),
        i = r(99534),
        a = r(85893),
        o = r(68527),
        l = function (e) {
          var n = e.href,
            r = e.children,
            l = (0, i.Z)(e, ["href", "children"]);
          return n
            ? (0, a.jsx)(
                o.kC,
                (0, s.Z)(
                  (0, t.Z)(
                    {
                      border: "1px solid",
                      borderColor: "surface.tertiary",
                      backgroundColor: "surface.secondary",
                      borderRadius: "16px",
                      alignItems: "center",
                      backdropFilter: "blur(5px)",
                      px: 6,
                      py: 4,
                      as: "a",
                      href: n,
                    },
                    l
                  ),
                  { children: r }
                )
              )
            : (0, a.jsx)(
                o.kC,
                (0, s.Z)(
                  (0, t.Z)(
                    {
                      border: "1px solid",
                      borderColor: "surface.tertiary",
                      backgroundColor: "surface.secondary",
                      borderRadius: "16px",
                      alignItems: "center",
                      backdropFilter: "blur(5px)",
                      px: 6,
                      py: 4,
                    },
                    l
                  ),
                  { children: r }
                )
              );
        };
    },
    78103: function (e, n, r) {
      "use strict";
      r.r(n),
        r.d(n, {
          default: function () {
            return b;
          },
        });
      var t = r(85893),
        s = r(26042),
        i = r(69396),
        a = r(92684),
        o = r(68527),
        l = r(34651),
        c = r(84856),
        u = r(2962),
        d = r(34557),
        x = r(2800),
        f = r(25675),
        p = r.n(f),
        m = function (e) {
          var n = e.href,
            r = e.src,
            s = e.alt,
            i = e.objectFit,
            o = void 0 === i ? "scale-down" : i,
            l = (0, a.Sx)({ base: 100, md: 150, xl: 177 }),
            c = (0, a.Sx)({ base: 30, md: 40, xl: 52 });
          return (0, t.jsx)(d.r, {
            isExternal: !0,
            href: n,
            children: (0, t.jsx)(x.x, {
              justifyContent: "center",
              h: "full",
              children: (0, t.jsx)(p(), {
                width: l,
                height: c,
                alt: s,
                src: r,
                objectFit: o,
              }),
            }),
          });
        },
        h = function (e) {
          var n = e.yarn;
          return (0, t.jsxs)(
            o.W2,
            (0, i.Z)(
              (0, s.Z)(
                {
                  maxW: "container.xl",
                  px: "0",
                  position: { base: "static", lg: "relative" },
                },
                n ? { yarn: n } : {}
              ),
              {
                children: [
                  (0, t.jsx)(u.PB, {
                    title: "DeFi",
                    description:
                      "Somm is the most powerful chain mid frequency platform and single place for all strategies across DeFi.",
                  }),
                  (0, t.jsx)(l.Ee, {
                    width: "640px",
                    src: "assets/bg-R1-min.png",
                    alt: "",
                    position: "absolute",
                    top: { base: "-424px", lg: "-388px" },
                    right: { base: "-299px", lg: "-328px" },
                    zIndex: "1",
                    maxW: "initial",
                  }),
                  (0, t.jsxs)(o.W2, {
                    maxW: "container.xl",
                    position: "relative",
                    zIndex: "2",
                    px: { base: 4, md: 7, lg: 24 },
                    paddingTop: "4rem",
                    children: [
                      (0, t.jsx)(o.X6, {
                        mb: { base: 4, md: 8 },
                        size: "2xl",
                        children: "DeFi",
                      }),
                      (0, t.jsx)(o.X6, {
                        mb: 5,
                        size: "md",
                        children:
                          "Use your Somm vault tokens to access new opportunities across DeFi.",
                      }),
                      (0, t.jsxs)(o.xu, {
                        position: "relative",
                        zIndex: "2",
                        w: "full",
                        pt: 10,
                        children: [
                          (0, t.jsx)(o.X6, {
                            mb: 5,
                            size: "lg",
                            children: "Leverage",
                          }),
                          (0, t.jsx)(o.X6, {
                            mb: 5,
                            size: "md",
                            children:
                              "Use your vault tokens as collateral to access leverage.",
                          }),
                          (0, t.jsxs)(o.MI, {
                            gap: 6,
                            columns: { base: 1, md: 2, xl: 3 },
                            children: [
                              (0, t.jsx)(m, {
                                href: "https://v2.sturdy.finance/overview/",
                                src: "/assets/logos/sturdy.svg",
                                alt: "sturdy",
                              }),
                              (0, t.jsx)(m, {
                                href: "https://app.pwn.xyz/#/create-loan",
                                src: "/assets/logos/pwn.svg",
                                alt: "pwn",
                              }),
                              (0, t.jsx)(m, {
                                href: "https://levana.finance/",
                                src: "/assets/logos/levana.svg",
                                alt: "levana",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)(o.xu, {
                        position: "relative",
                        zIndex: "2",
                        w: "full",
                        pt: 10,
                        children: [
                          (0, t.jsx)(o.X6, {
                            mb: 5,
                            size: "lg",
                            children: "LP",
                          }),
                          (0, t.jsx)(o.X6, {
                            mb: 5,
                            size: "md",
                            children:
                              "Use your vault tokens to provide liquidity on DEXs.",
                          }),
                          (0, t.jsx)(o.MI, {
                            gap: 6,
                            columns: { base: 1, md: 2, xl: 3 },
                            children: (0, t.jsx)(m, {
                              href: "https://app.osmosis.zone/pool/1213",
                              src: "/assets/logos/osmosis.svg",
                              alt: "osmosis",
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsxs)(o.xu, {
                        position: "relative",
                        zIndex: "2",
                        w: "full",
                        pt: 10,
                        children: [
                          (0, t.jsx)(o.X6, {
                            mb: 5,
                            size: "lg",
                            children: "Other",
                          }),
                          (0, t.jsx)(o.X6, {
                            mb: 5,
                            size: "md",
                            children:
                              "Access other unique DeFi opportunities for your vault tokens.",
                          }),
                          (0, t.jsxs)(o.MI, {
                            gap: 6,
                            columns: { base: 1, md: 2, xl: 3 },
                            children: [
                              (0, t.jsx)(m, {
                                href: "https://app.superform.xyz/protocol/sommelier/",
                                src: "/assets/logos/superform.png",
                                alt: "superform",
                              }),
                              (0, t.jsx)(m, {
                                href: "https://rhino.fi",
                                src: "/assets/logos/rhino.svg",
                                alt: "rhino",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)(c.$, { marginTop: 32 }),
                ],
              }
            )
          );
        },
        b = function () {
          return (0, t.jsx)(h, {});
        };
    },
  },
  function (e) {
    e.O(0, [260, 774, 888, 179], function () {
      return (n = 45720), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
