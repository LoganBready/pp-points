(this["webpackJsonppp.points"] = this["webpackJsonppp.points"] || []).push([
  [0],
  {
    24: function (e, t, n) {},
    42: function (e, t, n) {},
    69: function (e, t, n) {
      "use strict";
      n.r(t);
      var c = n(1),
        a = n.n(c),
        s = n(34),
        r = n.n(s),
        i = (n(42), n(24), n(3)),
        o = n(4),
        l = n(15),
        j = n.n(l),
        u = n(11),
        d = n(0);
      function b() {
        return Object(d.jsx)("header", {
          className: "header",
          children: Object(d.jsx)("main", {
            children: Object(d.jsx)("nav", {
              children: Object(d.jsxs)("ul", {
                className: "nav-list",
                children: [
                  Object(d.jsx)("li", {
                    className: "nav-items",
                    children: Object(d.jsx)(u.b, {
                      className: "nav-link",
                      to: "/",
                      element: Object(d.jsx)("h1", { children: "test" }),
                      children: "Home",
                    }),
                  }),
                  Object(d.jsx)("li", {
                    className: "nav-items",
                    children: Object(d.jsx)(u.b, {
                      className: "nav-link",
                      to: "/AddStudent",
                      children: "Add Student",
                    }),
                  }),
                  Object(d.jsx)("li", {
                    className: "nav-items",
                    children: Object(d.jsx)(u.c, {
                      className: "nav-link",
                      to: "/StudentDirectory",
                      children: "Student Directory",
                    }),
                  }),
                  Object(d.jsx)("li", {
                    className: "nav-items",
                    children: Object(d.jsx)(u.c, {
                      className: "nav-link",
                      to: "/AdminLogin",
                      children: "Admin Login",
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      }
      function h() {
        var e = [
          '"Pair Programming is better than not Pair Programming" -somebody, probably',
          '"Two heads are better than one" -IDK',
          '"Keep calm and pair program" -Elon Musk',
          '"Oh, your one of those people \u30ed\u30fc\u30ed" -You know who',
          '"Do people actually read these" -Minecraft',
          '"Only kings Pair Program" -TheIronicAnimeGirl',
          '"He\'s the best gamer I ever saw" -Technoblade',
          '"Make Pair Programing Great Again" -Tonald Drump',
          '"I walk a lonely road, unless I am pair programming" -Blue Day',
          '"I\'m running out of ideas" -The guy making these',
          '"I wOrk BeTtEr bY mY sElF" -Ineffeciency',
          '"Got a bug in your code FLEX TAPE" -Knock off Billy Mays',
        ];
        return Object(d.jsx)("footer", {
          children: Object(d.jsx)("p", {
            className: "footer-qoute",
            children: e[Math.floor(Math.random() * e.length)],
          }),
        });
      }
      var p = Object(c.memo)(h);
      var m = function () {
          var e = Object(c.useState)(""),
            t = Object(o.a)(e, 2),
            n = t[0],
            a = t[1],
            s = Object(c.useState)(""),
            r = Object(o.a)(s, 2),
            i = r[0],
            l = r[1],
            u = Object(c.useState)(""),
            h = Object(o.a)(u, 2),
            m = h[0],
            O = h[1];
          return Object(d.jsxs)("div", {
            children: [
              Object(d.jsx)(b, {}),
              Object(d.jsxs)("div", {
                className: "main-page",
                children: [
                  Object(d.jsx)("div", {
                    className: "admin-login",
                    children: Object(d.jsx)("h1", {
                      className: "admin-log-header",
                      children: "Add Student",
                    }),
                  }),
                  Object(d.jsx)("div", {
                    children: Object(d.jsxs)("form", {
                      children: [
                        Object(d.jsx)("input", {
                          type: "text",
                          placeholder: "name",
                          onChange: function (e) {
                            return (t = e.target.value), void a(t);
                            var t;
                          },
                          className: "form-input",
                        }),
                        Object(d.jsx)("input", {
                          type: "text",
                          placeholder: "cohort",
                          onChange: function (e) {
                            return (t = e.target.value), void l(t);
                            var t;
                          },
                          className: "form-input",
                        }),
                        Object(d.jsx)("input", {
                          type: "text",
                          placeholder: "specialization",
                          onChange: function (e) {
                            return (t = e.target.value), void O(t);
                            var t;
                          },
                          className: "form-input",
                        }),
                        Object(d.jsx)("input", {
                          type: "submit",
                          onClick: function (e) {
                            e.preventDefault(),
                              (function () {
                                var e = {
                                  name: n,
                                  cohort: i,
                                  specialization: m,
                                };
                                j.a.post("/api/points", e).then(function (e) {
                                  return console.log("You did it");
                                });
                              })();
                          },
                          className: "form-input form-btn",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              Object(d.jsx)(p, {}),
            ],
          });
        },
        O = n(15);
      function x() {
        var e = Object(c.useState)(0),
          t = Object(o.a)(e, 2),
          n = t[0],
          a = t[1],
          s = Object(c.useState)(0),
          r = Object(o.a)(s, 2),
          i = r[0],
          l = r[1],
          j = Object(c.useState)(0),
          u = Object(o.a)(j, 2),
          h = u[0],
          m = u[1];
        if (
          (Object(c.useEffect)(function () {
            O.get("/api/points").then(function (e) {
              a(e.data), l(e.data);
            });
          }, []),
          !n)
        )
          return null;
        var x = i,
          f = x;
        return Object(d.jsxs)("div", {
          children: [
            Object(d.jsx)(b, {}),
            Object(d.jsxs)("div", {
              className: "sDirectory",
              children: [
                Object(d.jsx)("h1", { children: "Student Directory" }),
                Object(d.jsxs)("div", {
                  className: "searchContainer",
                  children: [
                    Object(d.jsx)("input", {
                      className: "searchDirectory",
                      onChange: function (e) {
                        return (t = e.target.value), m(t), void console.log(t);
                        var t;
                      },
                      placeholder: "search by cohort",
                    }),
                    Object(d.jsx)("button", {
                      className: "submitDirectory",
                      onClick: function () {
                        return (function (e) {
                          (f = x), console.log(x);
                          for (var t = [], n = 0; n < f.length; n++)
                            f[n].cohort.toLowerCase() === e.toLowerCase() &&
                              t.push(f[n]),
                              console.log(t),
                              a(t);
                        })(h);
                      },
                      children: "Search",
                    }),
                  ],
                }),
                Object(d.jsxs)("div", {
                  className: "directoryContainer",
                  children: [
                    Object(d.jsxs)("div", {
                      className: "keyCard",
                      children: [
                        Object(d.jsx)("p", {
                          className: "keyInfo",
                          children: "Name",
                        }),
                        Object(d.jsx)("p", {
                          className: "keyInfo",
                          children: "Cohort",
                        }),
                        Object(d.jsx)("p", {
                          className: "keyInfo",
                          children: "#PP-Points",
                        }),
                      ],
                    }),
                    n.map(function (e, t) {
                      return Object(d.jsxs)(
                        "div",
                        {
                          className: "studentCard",
                          children: [
                            Object(d.jsx)("p", {
                              className: "studentInfo",
                              children: n[t].name,
                            }),
                            Object(d.jsx)("p", {
                              className: "studentInfo",
                              children: n[t].cohort,
                            }),
                            Object(d.jsx)("p", {
                              className: "studentInfo",
                              children: n[t].points,
                            }),
                          ],
                        },
                        n[t].id
                      );
                    }),
                  ],
                }),
                Object(d.jsx)(p, {}),
              ],
            }),
          ],
        });
      }
      var f = n(13),
        v = n.n(f),
        g = n(16),
        N = n(36),
        y =
          (n(67),
          N.a.initializeApp({
            apiKey: "AIzaSyCSApiSIxvWPRa88VRPmVlCxdqK5Uwodrg",
            authDomain: "project-1f55b.firebaseapp.com",
            projectId: "project-1f55b",
            storageBucket: "project-1f55b.appspot.com",
            messagingSenderId: 705987820536,
            appId: "1:705987820536:web:99e0ae18c962a9af05740d",
          })),
        k = y.auth(),
        I = a.a.createContext();
      function C() {
        return Object(c.useContext)(I);
      }
      function S(e) {
        var t = e.children,
          n = Object(c.useState)(),
          a = Object(o.a)(n, 2),
          s = a[0],
          r = a[1],
          i = Object(c.useState)(!0),
          l = Object(o.a)(i, 2),
          j = l[0],
          u = l[1];
        Object(c.useEffect)(function () {
          return k.onAuthStateChanged(function (e) {
            r(e), u(!1);
          });
        }, []);
        var b = {
          currentUser: s,
          login: function (e, t) {
            return k.signInWithEmailAndPassword(e, t);
          },
          logout: function () {
            return k.signOut();
          },
        };
        return Object(d.jsx)(I.Provider, { value: b, children: !j && t });
      }
      function w() {
        var e = Object(c.useRef)(),
          t = Object(c.useRef)(),
          n = C().login,
          a = Object(c.useState)(""),
          s = Object(o.a)(a, 2),
          r = (s[0], s[1]),
          l = Object(c.useState)(!1),
          j = Object(o.a)(l, 2),
          u = (j[0], j[1]),
          h = Object(i.g)();
        function m() {
          return (m = Object(g.a)(
            v.a.mark(function c(a) {
              return v.a.wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return (
                          a.preventDefault(),
                          (c.prev = 1),
                          r(""),
                          u(!0),
                          (c.next = 6),
                          n(e.current.value, t.current.value)
                        );
                      case 6:
                        h.push("/studentdirectoryadmin"), (c.next = 12);
                        break;
                      case 9:
                        (c.prev = 9),
                          (c.t0 = c.catch(1)),
                          r("Failed to log in!");
                      case 12:
                        u(!1);
                      case 13:
                      case "end":
                        return c.stop();
                    }
                },
                c,
                null,
                [[1, 9]]
              );
            })
          )).apply(this, arguments);
        }
        return Object(d.jsxs)("div", {
          children: [
            Object(d.jsx)(b, {}),
            Object(d.jsxs)("div", {
              className: "main-page",
              children: [
                Object(d.jsx)("div", {
                  className: "admin-login",
                  children: Object(d.jsx)("h2", {
                    className: "admin-log-header",
                    children: "Admin Login",
                  }),
                }),
                Object(d.jsxs)("form", {
                  onSubmit: function (e) {
                    return m.apply(this, arguments);
                  },
                  children: [
                    Object(d.jsx)("input", {
                      className: "form-input",
                      type: "email",
                      ref: e,
                      name: "username",
                      placeholder: "email",
                      required: !0,
                    }),
                    Object(d.jsx)("input", {
                      className: "form-input",
                      type: "password",
                      ref: t,
                      name: "password",
                      placeholder: "password",
                      required: !0,
                    }),
                    Object(d.jsx)("button", {
                      className: "form-input form-btn",
                      type: "submit",
                      name: "login",
                      children: "Log In",
                    }),
                  ],
                }),
              ],
            }),
            Object(d.jsx)(p, {}),
          ],
        });
      }
      var A = n.p + "static/media/unicorn.c315a3fc.svg";
      var P = function () {
          return Object(d.jsxs)("div", {
            children: [
              Object(d.jsx)(b, {}),
              Object(d.jsxs)("div", {
                className: "logo-div",
                children: [
                  Object(d.jsx)("h1", { className: "be-a", children: "BE A" }),
                  Object(d.jsx)("img", { src: A, alt: "A Unicorn" }),
                  Object(d.jsx)("h1", {
                    className: "champion",
                    children: "CHAMPION",
                  }),
                ],
              }),
              Object(d.jsx)(p, {}),
            ],
          });
        },
        D = (n.p, n(15)),
        E = "/api/points";
      function L() {
        var e = Object(c.useState)(0),
          t = Object(o.a)(e, 2),
          n = t[0],
          a = t[1],
          s = Object(c.useState)(0),
          r = Object(o.a)(s, 2),
          i = r[0],
          l = r[1],
          j = Object(c.useState)(0),
          u = Object(o.a)(j, 2),
          h = u[0],
          m = u[1];
        if (
          (Object(c.useEffect)(function () {
            D.get(E).then(function (e) {
              a(e.data), l(e.data);
            });
          }, []),
          !n)
        )
          return null;
        var O = i,
          x = O;
        return Object(d.jsxs)("div", {
          children: [
            Object(d.jsx)(b, {}),
            Object(d.jsxs)("div", {
              className: "sDirectory",
              children: [
                Object(d.jsx)("h1", { children: "Student Directory" }),
                Object(d.jsxs)("div", {
                  className: "searchContainer",
                  children: [
                    Object(d.jsx)("input", {
                      className: "searchDirectory",
                      onChange: function (e) {
                        return (t = e.target.value), void m(t);
                        var t;
                      },
                      placeholder: "search by cohort",
                    }),
                    Object(d.jsx)("button", {
                      className: "submitDirectory",
                      onClick: function () {
                        return (function (e) {
                          (x = O), console.log(O);
                          for (var t = [], n = 0; n < x.length; n++)
                            x[n].cohort.toLowerCase() === e.toLowerCase() &&
                              t.push(x[n]),
                              console.log(t),
                              a(t);
                        })(h);
                      },
                      children: "Search",
                    }),
                  ],
                }),
                Object(d.jsxs)("div", {
                  className: "directoryContainer",
                  children: [
                    Object(d.jsxs)("div", {
                      className: "keyCard",
                      children: [
                        Object(d.jsx)("p", {
                          className: "keyInfo",
                          children: "Name ",
                        }),
                        Object(d.jsx)("p", {
                          className: "keyInfo",
                          children: " Cohort",
                        }),
                        Object(d.jsx)("p", {
                          className: "keyInfo",
                          children: "Item 1 \u2003 \u2003 Item 2",
                        }),
                        Object(d.jsx)("p", {
                          className: "keyInfo",
                          children: "#PP-Points",
                        }),
                      ],
                    }),
                    n.map(function (e, t) {
                      return Object(d.jsxs)(
                        "div",
                        {
                          className: "studentCard",
                          children: [
                            Object(d.jsx)("p", {
                              className: "studentInfo",
                              children: n[t].name,
                            }),
                            Object(d.jsx)("p", {
                              className: "studentInfo",
                              children: n[t].cohort,
                            }),
                            Object(d.jsxs)("label", {
                              className: "switch",
                              children: [
                                Object(d.jsx)("input", { type: "checkbox" }),
                                Object(d.jsx)("span", {
                                  className: "slider round",
                                }),
                              ],
                            }),
                            Object(d.jsxs)("label", {
                              className: "switch",
                              children: [
                                Object(d.jsx)("input", { type: "checkbox" }),
                                Object(d.jsx)("span", {
                                  className: "slider round",
                                }),
                              ],
                            }),
                            Object(d.jsxs)("p", {
                              className: "studentInfo",
                              children: [
                                Object(d.jsx)("button", {
                                  "data-user": n[t].id,
                                  className: "plusMinusBtn",
                                  onClick: function (e) {
                                    return (function (e) {
                                      var t = parseInt(e);
                                      D.put("".concat(E, "/").concat(t), {
                                        type: "minus1",
                                      }).then(function (e) {
                                        a(e.data);
                                      });
                                    })(e.target.dataset.user);
                                  },
                                  children: "-",
                                }),
                                n[t].points,
                                Object(d.jsx)("button", {
                                  "data-user": n[t].id,
                                  className: "plusMinusBtn",
                                  onClick: function (e) {
                                    return (function (e) {
                                      var t = parseInt(e);
                                      D.put("".concat(E, "/").concat(t), {
                                        type: "plus1",
                                      }).then(function (e) {
                                        a(e.data);
                                      });
                                    })(e.target.dataset.user);
                                  },
                                  children: "+",
                                }),
                                Object(d.jsx)("button", {
                                  "data-user": n[t].id,
                                  className: "plusMinusBtn",
                                  onClick: function (e) {
                                    return (function (e) {
                                      var t = parseInt(e);
                                      D.delete(
                                        "".concat(E, "/").concat(t)
                                      ).then(function (e) {
                                        a(e.data);
                                      });
                                    })(e.target.dataset.user);
                                  },
                                  children: "X",
                                }),
                              ],
                            }),
                          ],
                        },
                        n[t].id
                      );
                    }),
                  ],
                }),
                Object(d.jsx)(p, {}),
              ],
            }),
          ],
        });
      }
      var M = n(17),
        B = n(37),
        T = ["component"];
      function K(e) {
        var t = e.component,
          n = Object(B.a)(e, T),
          c = C().currentUser;
        return Object(d.jsx)(
          i.b,
          Object(M.a)(
            Object(M.a)({}, n),
            {},
            {
              render: function (e) {
                return c
                  ? Object(d.jsx)(t, Object(M.a)({}, e))
                  : Object(d.jsx)(i.a, { to: "/AdminLogin" });
              },
            }
          )
        );
      }
      function U() {
        var e = Object(c.useState)(""),
          t = Object(o.a)(e, 2),
          n = (t[0], t[1]),
          a = C(),
          s = a.currentUser,
          r = a.logout,
          l = Object(i.g)();
        function j() {
          return (j = Object(g.a)(
            v.a.mark(function e() {
              return v.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return n(""), (e.prev = 1), (e.next = 4), r();
                      case 4:
                        l.push("/AdminLogin"), console.log("hi"), (e.next = 11);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(1)),
                          n("Failed to log out");
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8]]
              );
            })
          )).apply(this, arguments);
        }
        return Object(d.jsxs)("div", {
          className: "app",
          children: [
            Object(d.jsx)("h2", { children: "Profile:" }),
            Object(d.jsx)("strong", { children: "Email: " }),
            s.email,
            Object(d.jsx)("button", {
              onClick: function () {
                return j.apply(this, arguments);
              },
              children: "log out",
            }),
          ],
        });
      }
      function q() {
        return Object(d.jsx)(S, {
          children: Object(d.jsx)("div", {
            className: "App",
            children: Object(d.jsx)("main", {
              children: Object(d.jsxs)(i.d, {
                children: [
                  Object(d.jsx)(i.b, { exact: !0, path: "/", component: P }),
                  Object(d.jsx)(i.b, {
                    path: "/StudentDirectory",
                    component: x,
                  }),
                  Object(d.jsx)(K, { path: "/AddStudent", component: m }),
                  Object(d.jsx)(i.b, { path: "/AdminLogin", component: w }),
                  Object(d.jsx)(K, {
                    path: "/studentdirectoryadmin",
                    component: L,
                  }),
                  Object(d.jsx)(K, { path: "/accountinfo", component: U }),
                ],
              }),
            }),
          }),
        });
      }
      r.a.render(
        Object(d.jsx)(u.a, {
          children: Object(d.jsx)(a.a.StrictMode, {
            children: Object(d.jsx)(q, {}),
          }),
        }),
        document.getElementById("root")
      );
    },
  },
  [[69, 1, 2]],
]);
//# sourceMappingURL=main.c177eb4a.chunk.js.map
