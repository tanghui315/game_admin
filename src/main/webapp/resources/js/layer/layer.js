/*!
 @Name：layer v2.0 弹层组件
 @Author：贤心
 @Site：http://layer.layui.com
 @License：LGPL

 */
!function (d, h) {
    var f, g, c = {
        getPath: function () {
            var k = document.scripts, i = k[k.length - 1], j = i.src;
            if (i.getAttribute("merge")) {
                return;
            }
            return j.substring(0, j.lastIndexOf("/") + 1);
        }(),
        enter: function (i) {
            if (i.keyCode === 13) {
                i.preventDefault();
            }
        },
        config: {},
        end: {},
        btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
        type: ["dialog", "page", "iframe", "loading", "tips"]
    };
    var b = {
        v: "2.0", ie6: !!d.ActiveXObject && !d.XMLHttpRequest, index: 0, path: c.getPath, config: function (j, k) {
            var l = 0;
            j = j || {};
            b.cache = c.config = f.extend(c.config, j);
            b.path = c.config.path || b.path;
            typeof j.extend === "string" && (j.extend = [j.extend]);
            b.use("skin/layer.css", (j.extend && j.extend.length > 0) ? (function i() {
                var m = j.extend;
                b.use(m[m[l] ? l : l - 1], l < m.length ? function () {
                    ++l;
                    return i;
                }() : k);
            }()) : k);
            return this;
        }, use: function (k, q, m) {
            var o = 0, r = f("head")[0];
            var k = k.replace(/\s/g, "");
            var n = /\.css$/.test(k);
            var l = document.createElement(n ? "link" : "script");
            var j = "layui_layer_" + k.replace(/\.|\//g, "");
            if (!b.path) {
                return;
            }
            if (n) {
                l.rel = "stylesheet";
            }
            l[n ? "href" : "src"] = /^http:\/\//.test(k) ? k : b.path + k;
            l.id = j;
            if (!f("#" + j)[0]) {
                r.appendChild(l);
            }
            (function p() {
                (n ? parseInt(f("#" + j).css("width")) === 1989 : b[m || j]) ? function () {
                    q && q();
                    try {
                        n || r.removeChild(l);
                    } catch (i) {
                    }
                }() : setTimeout(p, 100);
            }());
            return this;
        }, ready: function (k, j) {
            var i = typeof k === "function";
            if (i) {
                j = k;
            }
            b.config(f.extend(c.config, function () {
                return i ? {} : {path: k};
            }()), j);
            return this;
        }, alert: function (k, i, l) {
            var j = typeof i === "function";
            if (j) {
                l = i;
            }
            return b.open(f.extend({content: k, yes: l}, j ? {} : i));
        }, confirm: function (l, i, m, k) {
            var j = typeof i === "function";
            if (j) {
                k = m;
                m = i;
            }
            return b.open(f.extend({content: l, btn: c.btn, yes: m, cancel: k}, j ? {} : i));
        }, msg: function (m, k, j) {
            var l = typeof k === "function", o = c.config.skin;
            var n = (o ? o + " " + o + "-msg" : "") || "layui-layer-msg";
            var i = e.anim.length - 1;
            if (l) {
                j = k;
            }
            return b.open(f.extend({
                content: m,
                time: 1500,
                shade: false,
                skin: n,
                title: false,
                closeBtn: false,
                btn: false,
                icon: 2,
                end: j
            }, (l && !c.config.skin) ? {skin: n + " layui-layer-hui", shift: i} : function () {
                k = k || {};
                if (k.icon === -1 || k.icon === h && !c.config.skin) {
                    k.skin = n + " " + (k.skin || "layui-layer-hui");
                }
                return k;
            }()));
        }, load: function (j, i) {
            return b.open(f.extend({type: 3, icon: j || 0, shade: 0.01}, i));
        }, tips: function (k, i, j) {
            return b.open(f.extend({type: 4, content: [k, i], closeBtn: false, time: 3000, maxWidth: 210}, j));
        }
    };
    var a = function (i) {
        var j = this;
        j.index = ++b.index;
        j.config = f.extend({}, j.config, c.config, i);
        j.creat();
    };
    a.pt = a.prototype;
    var e = ["layui-layer", ".layui-layer-title", ".layui-layer-main", ".layui-layer-dialog", "layui-layer-iframe", "layui-layer-content", "layui-layer-btn", "layui-layer-close"];
    e.anim = ["layui-anim", "layui-anim-01", "layui-anim-02", "layui-anim-03", "layui-anim-04", "layui-anim-05", "layui-anim-06"];
    a.pt.config = {
        type: 0,
        shade: 0.3,
        fix: true,
        move: e[1],
        title: "&#x4FE1;&#x606F;",
        offset: "auto",
        area: "auto",
        closeBtn: 1,
        time: 0,
        zIndex: 19891014,
        maxWidth: 360,
        shift: 0,
        icon: -1,
        scrollbar: true,
        tips: 2
    };
    a.pt.vessel = function (m, q) {
        var n = this, i = n.index, l = n.config;
        var p = l.zIndex + i, k = typeof l.title === "object";
        var o = l.maxmin && (l.type === 1 || l.type === 2);
        var j = (l.title ? '<div class="layui-layer-title" style="' + (k ? l.title[1] : "") + '">' + (k ? l.title[0] : l.title) + "</div>" : "");
        l.zIndex = p;
        q([l.shade ? ('<div class="layui-layer-shade" id="layui-layer-shade' + i + '" times="' + i + '" style="' + ("z-index:" + (p - 1) + "; background-color:" + (l.shade[1] || "#000") + "; opacity:" + (l.shade[0] || l.shade) + "; filter:alpha(opacity=" + (l.shade[0] * 100 || l.shade * 100) + ");") + '"></div>') : "", '<div class="' + e[0] + " " + (e.anim[l.shift] || "") + (" layui-layer-" + c.type[l.type]) + (((l.type == 0 || l.type == 2) && !l.shade) ? " layui-layer-border" : "") + " " + (l.skin || "") + '" id="' + e[0] + i + '" type="' + c.type[l.type] + '" times="' + i + '" showtime="' + l.time + '" conType="' + (m ? "object" : "string") + '" style="z-index: ' + p + "; width:" + l.area[0] + ";height:" + l.area[1] + (l.fix ? "" : ";position:absolute;") + '">' + (m && l.type != 2 ? "" : j) + '<div class="layui-layer-content' + ((l.type == 0 && l.icon !== -1) ? " layui-layer-padding" : "") + (l.type == 3 ? " layui-layer-loading" + l.icon : "") + '">' + (l.type == 0 && l.icon !== -1 ? '<i class="layui-layer-ico layui-layer-ico' + l.icon + '"></i>' : "") + (l.type == 1 && m ? "" : (l.content || "")) + '</div><span class="layui-layer-setwin">' + function () {
            var r = o ? '<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>' : "";
            l.closeBtn && (r += '<a class="layui-layer-ico ' + e[7] + " " + e[7] + (l.title ? l.closeBtn : (l.type == 4 ? "1" : "2")) + '" href="javascript:;"></a>');
            return r;
        }() + "</span>" + (l.btn ? function () {
            var t = "";
            typeof l.btn === "string" && (l.btn = [l.btn]);
            for (var s = 0, r = l.btn.length; s < r; s++) {
                t += '<a class="' + e[6] + "" + s + '">' + l.btn[s] + "</a>";
            }
            return '<div class="' + e[6] + '">' + t + "</div>";
        }() : "") + "</div>"], j);
        return n;
    };
    a.pt.creat = function () {
        var k = this, i = k.config, m = k.index, n;
        var j = i.content, l = typeof j === "object";
        if (typeof i.area === "string") {
            i.area = i.area === "auto" ? ["", ""] : [i.area, ""];
        }
        switch (i.type) {
            case 0:
                i.btn = ("btn" in i) ? i.btn : c.btn[0];
                b.closeAll("dialog");
                break;
            case 2:
                var j = i.content = l ? i.content : [i.content || "http://sentsin.com?from=layer", "auto"];
                i.content = '<iframe scrolling="' + (i.content[1] || "auto") + '" allowtransparency="true" id="' + e[4] + "" + m + '" name="' + e[4] + "" + m + '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' + i.content[0] + '"></iframe>';
                break;
            case 3:
                i.title = false;
                i.closeBtn = false;
                i.icon === -1 && (i.icon === 0);
                b.closeAll("loading");
                break;
            case 4:
                l || (i.content = [i.content, "body"]);
                i.follow = i.content[1];
                i.content = i.content[0] + '<i class="layui-layer-TipsG"></i>';
                i.title = false;
                i.shade = false;
                i.fix = false;
                i.tips = typeof i.tips === "object" ? i.tips : [i.tips, true];
                i.tipsMore || b.closeAll("tips");
                break;
        }
        k.vessel(l, function (p, o) {
            f("body").append(p[0]);
            l ? function () {
                (i.type == 2 || i.type == 4) ? function () {
                    f("body").append(p[1]);
                }() : function () {
                    if (!j.parents("." + e[0])[0]) {
                        j.show().addClass("layui-layer-wrap").wrap(p[1]);
                        f("#" + e[0] + m).find("." + e[5]).before(o);
                    }
                }();
            }() : f("body").append(p[1]);
            k.layero = f("#" + e[0] + m);
            i.scrollbar || e.html.css("overflow", "hidden").attr("layer-full", m);
        }).auto(m);
        i.type == 2 && b.ie6 && k.layero.find("iframe").attr("src", j[0]);
        f(document).off("keydown", c.enter).on("keydown", c.enter);
        i.type == 4 ? k.tips() : k.offset();
        if (i.fix) {
            g.on("resize", function () {
                k.offset();
                (/^\d+%$/.test(i.area[0]) || /^\d+%$/.test(i.area[1])) && k.auto(m);
                i.type == 4 && k.tips();
            });
        }
        i.time <= 0 || setTimeout(function () {
            b.close(k.index);
        }, i.time);
        k.move().callback();
    };
    a.pt.auto = function (m) {
        var o = this, l = o.config, k = f("#" + e[0] + m);
        if (l.area[0] === "" && l.maxWidth > 0) {
            if (/MSIE 7/.test(navigator.userAgent) && l.btn) {
                k.width(k.innerWidth());
            }
            k.outerWidth() > l.maxWidth && k.width(l.maxWidth);
        }
        var n = [k.innerWidth(), k.innerHeight()];
        var p = k.find(e[1]).outerHeight() || 0;
        var j = k.find("." + e[6]).outerHeight() || 0;

        function i(q) {
            q = k.find(q);
            q.height(n[1] - p - j - 2 * (parseFloat(q.css("padding")) | 0));
        }

        switch (l.type) {
            case 2:
                i("iframe");
                break;
            default:
                if (l.area[1] === "") {
                    if (l.fix && n[1] >= g.height()) {
                        n[1] = g.height();
                        i("." + e[5]);
                    }
                } else {
                    i("." + e[5]);
                }
                break;
        }
        return o;
    };
    a.pt.offset = function () {
        var m = this, j = m.config, i = m.layero;
        var l = [i.outerWidth(), i.outerHeight()];
        var k = typeof j.offset === "object";
        m.offsetTop = (g.height() - l[1]) / 2;
        m.offsetLeft = (g.width() - l[0]) / 2;
        if (k) {
            m.offsetTop = j.offset[0];
            m.offsetLeft = j.offset[1] || m.offsetLeft;
        } else {
            if (j.offset !== "auto") {
                m.offsetTop = j.offset;
                if (j.offset === "rb") {
                    m.offsetTop = g.height() - l[1];
                    m.offsetLeft = g.width() - l[0];
                }
            }
        }
        if (!j.fix) {
            m.offsetTop = /%$/.test(m.offsetTop) ? g.height() * parseFloat(m.offsetTop) / 100 : parseFloat(m.offsetTop);
            m.offsetLeft = /%$/.test(m.offsetLeft) ? g.width() * parseFloat(m.offsetLeft) / 100 : parseFloat(m.offsetLeft);
            m.offsetTop += g.scrollTop();
            m.offsetLeft += g.scrollLeft();
        }
        i.css({top: m.offsetTop, left: m.offsetLeft});
    };
    a.pt.tips = function () {
        var p = this, o = p.config, k = p.layero;
        var n = [k.outerWidth(), k.outerHeight()], j = f(o.follow);
        if (!j[0]) {
            j = f("body");
        }
        var m = {width: j.outerWidth(), height: j.outerHeight(), top: j.offset().top, left: j.offset().left},
            l = k.find(".layui-layer-TipsG");
        var i = o.tips[0];
        o.tips[1] || l.remove();
        m.autoLeft = function () {
            if (m.left + n[0] - g.width() > 0) {
                m.tipLeft = m.left + m.width - n[0];
                l.css({right: 12, left: "auto"});
            } else {
                m.tipLeft = m.left;
            }
        };
        m.where = [function () {
            m.autoLeft();
            m.tipTop = m.top - n[1] - 10;
            l.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color", o.tips[1]);
        }, function () {
            m.tipLeft = m.left + m.width + 10;
            m.tipTop = m.top;
            l.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color", o.tips[1]);
        }, function () {
            m.autoLeft();
            m.tipTop = m.top + m.height + 10;
            l.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color", o.tips[1]);
        }, function () {
            m.tipLeft = m.left - n[0] - 10;
            m.tipTop = m.top;
            l.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color", o.tips[1]);
        }];
        m.where[i - 1]();
        if (i === 1) {
            m.top - (g.scrollTop() + n[1] + 8 * 2) < 0 && m.where[2]();
        } else {
            if (i === 2) {
                g.width() - (m.left + m.width + n[0] + 8 * 2) > 0 || m.where[3]();
            } else {
                if (i === 3) {
                    (m.top - g.scrollTop() + m.height + n[1] + 8 * 2) - g.height() > 0 && m.where[0]();
                } else {
                    if (i === 4) {
                        n[0] + 8 * 2 - m.left > 0 && m.where[1]();
                    }
                }
            }
        }
        k.find("." + e[5]).css({"background-color": o.tips[1], "padding-right": (o.closeBtn ? "30px" : "")});
        k.css({left: m.tipLeft, top: m.tipTop});
    };
    a.pt.move = function () {
        var k = this, j = k.config, i = {
            setY: 0, moveLayer: function () {
                var m = i.layero, n = parseInt(m.css("margin-left"));
                var o = parseInt(i.move.css("left"));
                n === 0 || (o = o - n);
                if (m.css("position") !== "fixed") {
                    o = o - m.parent().offset().left;
                    i.setY = 0;
                }
                m.css({left: o, top: parseInt(i.move.css("top")) - i.setY});
            }
        };
        var l = k.layero.find(j.move);
        j.move && l.attr("move", "ok");
        l.css({cursor: j.move ? "move" : "auto"});
        f(j.move).on("mousedown", function (q) {
            q.preventDefault();
            if (f(this).attr("move") === "ok") {
                i.ismove = true;
                i.layero = f(this).parents("." + e[0]);
                var o = i.layero.offset().left, p = i.layero.offset().top, n = i.layero.outerWidth() - 6,
                    m = i.layero.outerHeight() - 6;
                if (!f("#layui-layer-moves")[0]) {
                    f("body").append('<div id="layui-layer-moves" class="layui-layer-moves" style="left:' + o + "px; top:" + p + "px; width:" + n + "px; height:" + m + 'px; z-index:2147483584"></div>');
                }
                i.move = f("#layui-layer-moves");
                j.moveType && i.move.css({visibility: "hidden"});
                i.moveX = q.pageX - i.move.position().left;
                i.moveY = q.pageY - i.move.position().top;
                i.layero.css("position") !== "fixed" || (i.setY = g.scrollTop());
            }
        });
        f(document).mousemove(function (q) {
            if (i.ismove) {
                var n = q.pageX - i.moveX, p = q.pageY - i.moveY;
                q.preventDefault();
                if (!j.moveOut) {
                    i.setY = g.scrollTop();
                    var m = g.width() - i.move.outerWidth(), o = i.setY;
                    n < 0 && (n = 0);
                    n > m && (n = m);
                    p < o && (p = o);
                    p > g.height() - i.move.outerHeight() + i.setY && (p = g.height() - i.move.outerHeight() + i.setY);
                }
                i.move.css({left: n, top: p});
                j.moveType && i.moveLayer();
                n = p = m = o = null;
            }
        }).mouseup(function () {
            try {
                if (i.ismove) {
                    i.moveLayer();
                    i.move.remove();
                    j.moveEnd && j.moveEnd();
                }
                i.ismove = false;
            } catch (m) {
                i.ismove = false;
            }
        });
        return k;
    };
    a.pt.callback = function () {
        var l = this, i = l.layero, j = l.config;
        l.openLayer();
        if (j.success) {
            if (j.type == 2) {
                i.find("iframe")[0].onload = function () {
                    this.className = "";
                    j.success(i, l.index);
                };
            } else {
                j.success(i, l.index);
            }
        }
        b.ie6 && l.IE6(i);
        i.find("." + e[6]).children("a").on("click", function () {
            var m = f(this).index();
            j["btn" + (m + 1)] && j["btn" + (m + 1)](l.index, i);
            if (m === 0) {
                if (typeof(b.validate) == "function") {
                    var n = b.validate(f(i));
                    if (n == false) {
                        return false;
                    }
                }
                j.yes ? j.yes(l.index, i) : b.close(l.index);
            } else {
                if (m === 1) {
                    k();
                } else {
                    j["btn" + (m + 1)] || b.close(l.index);
                }
            }
        });

        function k() {
            var m = j.cancel && j.cancel(l.index);
            m === false || b.close(l.index);
        }

        i.find("." + e[7]).on("click", k);
        if (j.shadeClose) {
            f("#layui-layer-shade" + l.index).on("click", function () {
                b.close(l.index);
            });
        }
        i.find(".layui-layer-min").on("click", function () {
            b.min(l.index, j);
            j.min && j.min(i);
        });
        i.find(".layui-layer-max").on("click", function () {
            if (f(this).hasClass("layui-layer-maxmin")) {
                b.restore(l.index);
                j.restore && j.restore(i);
            } else {
                b.full(l.index, j);
                j.full && j.full(i);
            }
        });
        j.end && (c.end[l.index] = j.end);
    };
    c.reselect = function () {
        f.each(f("select"), function (i, j) {
            var k = f(this);
            if (!k.parents("." + e[0])[0]) {
                (k.attr("layer") == 1 && f("." + e[0]).length < 1) && k.removeAttr("layer").show();
            }
            k = null;
        });
    };
    a.pt.IE6 = function (i) {
        var j = this, l = i.offset().top;

        function k() {
            i.css({top: l + (j.config.fix ? g.scrollTop() : 0)});
        }

        k();
        g.scroll(k);
        f("select").each(function (m, n) {
            var o = f(this);
            if (!o.parents("." + e[0])[0]) {
                o.css("display") === "none" || o.attr({layer: "1"}).hide();
            }
            o = null;
        });
    };
    a.pt.openLayer = function () {
        var i = this;
        b.zIndex = i.config.zIndex;
        b.setTop = function (j) {
            var k = function () {
                b.zIndex++;
                j.css("z-index", b.zIndex + 1);
            };
            b.zIndex = parseInt(j[0].style.zIndex);
            j.on("mousedown", k);
            return b.zIndex;
        };
    };
    c.record = function (i) {
        var j = [i.outerWidth(), i.outerHeight(), i.position().top, i.position().left + parseFloat(i.css("margin-left"))];
        i.find(".layui-layer-max").addClass("layui-layer-maxmin");
        i.attr({area: j});
    };
    c.rescollbar = function (i) {
        if (e.html.attr("layer-full") == i) {
            if (e.html[0].style.removeProperty) {
                e.html[0].style.removeProperty("overflow");
            } else {
                e.html[0].style.removeAttribute("overflow");
            }
            e.html.removeAttr("layer-full");
        }
    };
    /*! 内置成员 */
    b.getChildFrame = function (i, j) {
        j = j || f("." + e[4]).attr("times");
        return f("#" + e[0] + j).find("iframe").contents().find(i);
    };
    b.getFrameIndex = function (i) {
        return f("#" + i).parents("." + e[4]).attr("times");
    };
    b.iframeAuto = function (l) {
        if (!l) {
            return;
        }
        var k = b.getChildFrame("body", l).outerHeight();
        var j = f("#" + e[0] + l);
        var m = j.find(e[1]).outerHeight() || 0;
        var i = j.find("." + e[6]).outerHeight() || 0;
        j.css({height: k + m + i});
        j.find("iframe").css({height: k});
    };
    b.iframeSrc = function (j, i) {
        f("#" + e[0] + j).find("iframe").attr("src", i);
    };
    b.style = function (l, k) {
        var j = f("#" + e[0] + l), m = j.attr("type");
        var n = j.find(e[1]).outerHeight() || 0;
        var i = j.find("." + e[6]).outerHeight() || 0;
        if (m === c.type[1] || m === c.type[2]) {
            j.css(k);
            if (m === c.type[2]) {
                j.find("iframe").css({height: parseFloat(k.height) - n - i});
            }
        }
    };
    b.min = function (k, j) {
        var i = f("#" + e[0] + k);
        var l = i.find(e[1]).outerHeight() || 0;
        c.record(i);
        b.style(k, {width: 180, height: l, overflow: "hidden"});
        i.find(".layui-layer-min").hide();
        i.attr("type") === "page" && i.find(e[4]).hide();
        c.rescollbar(k);
    };
    b.restore = function (j) {
        var i = f("#" + e[0] + j), l = i.attr("area").split(",");
        var k = i.attr("type");
        b.style(j, {
            width: parseFloat(l[0]),
            height: parseFloat(l[1]),
            top: parseFloat(l[2]),
            left: parseFloat(l[3]),
            overflow: "visible"
        });
        i.find(".layui-layer-max").removeClass("layui-layer-maxmin");
        i.find(".layui-layer-min").show();
        i.attr("type") === "page" && i.find(e[4]).show();
        c.rescollbar(j);
    };
    b.full = function (j) {
        var i = f("#" + e[0] + j), k;
        c.record(i);
        if (!e.html.attr("layer-full")) {
            e.html.css("overflow", "hidden").attr("layer-full", j);
        }
        clearTimeout(k);
        k = setTimeout(function () {
            var l = i.css("position") === "fixed";
            b.style(j, {
                top: l ? 0 : g.scrollTop(),
                left: l ? 0 : g.scrollLeft(),
                width: g.width(),
                height: g.height()
            });
            i.find(".layui-layer-min").hide();
        }, 100);
    };
    b.title = function (j, i) {
        var k = f("#" + e[0] + (i || b.index)).find(e[1]);
        k.html(j);
    };
    b.close = function (k) {
        var j = f("#" + e[0] + k), n = j.attr("type");
        if (!j[0]) {
            return;
        }
        if (n === c.type[1] && j.attr("conType") === "object") {
            j.children(":not(." + e[5] + ")").remove();
            for (var l = 0; l < 2; l++) {
                j.find(".layui-layer-wrap").unwrap().hide();
            }
        } else {
            if (n === c.type[2]) {
                try {
                    var m = f("#" + e[4] + k)[0];
                    m.contentWindow.document.write("");
                    m.contentWindow.close();
                    j.find("." + e[5])[0].removeChild(m);
                } catch (o) {
                }
            }
            j[0].innerHTML = "";
            j.remove();
        }
        f("#layui-layer-moves, #layui-layer-shade" + k).remove();
        b.ie6 && c.reselect();
        c.rescollbar(k);
        f(document).off("keydown", c.enter);
        typeof c.end[k] === "function" && c.end[k]();
        delete c.end[k];
    };
    b.closeAll = function (i) {
        f.each(f("." + e[0]), function () {
            var k = f(this);
            var j = i ? (k.attr("type") === i) : 1;
            j && b.close(k.attr("times"));
            j = null;
        });
    };
    c.run = function () {
        f = jQuery;
        g = f(d);
        e.html = f("html");
        b.open = function (j) {
            var i = new a(j);
            return i.index;
        };
    };
    "function" === typeof define ? define(function () {
        c.run();
        return b;
    }) : function () {
        d.layer = b;
        c.run();
        b.use("skin/layer.css");
    }();
}(window);