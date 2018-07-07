function removeHtmlTag(t, e) {
    for (var n = t.split("<"), i = 0; i < n.length; i++) - 1 != n[i].indexOf(">") && (n[i] = n[i].substring(n[i].indexOf(">") + 1, n[i].length));
    return (n = n.join("")).substring(0, e - 1)
}

function sliderposts(t) {
    j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0, img = new Array, maxpost = numposts1 <= t.feed.entry.length ? numposts1 : t.feed.entry.length;
    for (var e = 0; e < maxpost; e++) {
        var n, i = t.feed.entry[e],
            r = i.category[0].term,
            m = i.title.$t;
        if (e == t.feed.entry.length) break;
        for (var l = 0; l < i.link.length; l++)
            if ("alternate" == i.link[l].rel) {
                n = i.link[l].href;
                break
            }
        for (l = 0; l < i.link.length; l++)
            if ("replies" == i.link[l].rel && "text/html" == i.link[l].type) {
                i.link[l].title.split(" ")[0];
                break
            }
        if ("content" in i) var o = i.content.$t;
        else if ("summary" in i) o = i.summary.$t;
        else o = "";
        postdate = i.published.$t, j > imgr.length - 1 && (j = 0), img[e] = imgr[j], s = o, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), -1 != a && -1 != b && -1 != c && "" != d && (img[e] = d);
        for (var h = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], u = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], p = postdate.split("-")[2].substring(0, 2), f = postdate.split("-")[1], w = postdate.split("-")[0], g = 0; g < h.length; g++)
            if (parseInt(f) == h[g]) {
                f = u[g];
                break
            }
        if (0 == e) {
            var v = '<div class="main-post col-post"><div class="date"><p><span>' + (p + " " + f + " " + w) + '</span></p></div><a href="' + n + '"><img width="530" height="400" src="' + img[e] + '" alt=""></img><div class="info"><div class="box-title"><h3><span class="box-label">' + r + '</span><a href="' + n + '" title="">' + m + "</a></h3></div></div></a></div>";
            document.write(v)
        } else {
            v = '<div class="second-post col-post"><a href="' + n + '"><img width="275" height="280" src="' + img[e] + '"></img><div class="info"><div class="box-title"><h3><span class="box-label">' + r + '</span><a href="' + n + '" title="">' + m + "</a></h3></div></div></a></div>";
            document.write(v)
        }
        j++
    }
}

function mythumbn(t) {
    for (var e = 0; e < numposts; e++) {
        var n, i = (v = t.feed.entry[e]).title.$t;
        if (e == t.feed.entry.length) break;
        for (var r = 0; r < v.link.length; r++) {
            if ("replies" == v.link[r].rel && "text/html" == v.link[r].type) var m = v.link[r].title,
                l = v.link[r].href;
            if ("alternate" == v.link[r].rel) {
                g = v.link[r].href;
                break
            }
        }
        try {
            n = (n = v.media$thumbnail.url).replace("/s72-c/", "/w" + thumb_width + "-h" + thumb_height + "-c/")
        } catch (t) {
            s = v.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), n = -1 != a && -1 != b && -1 != c && "" != d ? d : no_thumb
        }
        var o = (y = v.published.$t).substring(0, 4),
            h = y.substring(5, 7),
            u = y.substring(8, 10);
        document.write('<ul class="animagfid">'), document.write("<li>"), 1 == showpostthumbnails && document.write('<a href="' + g + '"><div class="Idnthemethumb"><img width="' + thumb_width + '" height="' + thumb_height + '" alt="' + i + '" src="' + n + '"/></div></a>'), document.write('<span class="Idnthemetitle"><a href="' + g + '" target ="_top">' + i + "</a></span>");
        var p = "";
        if (document.write('<span class="vienmeta">'), 1 == showpostdate && (p = p + '<span class="vienmeta_date">' + u + "/" + h + "/" + o + "</span>"), 1 == showcommentnum && ("1 Comments" == m && (m = "1 Comment"), "0 Comments" == m && (m = "No Comments"), p += m = '<span class="vienmeta_comment"><a href="' + l + '" target ="_top">' + m + "</a></span>"), 1 == displaymore && (p = p + '<span class="vienmeta_more"><a href="' + g + '" class="url" target ="_top">Read More...</a></span>'), document.write(p), document.write("</span>"), document.write('<span class="viesummary">'), "content" in v) var f = v.content.$t;
        else if ("summary" in v) f = v.summary.$t;
        else f = "";
        if (f = f.replace(/<\S[^>]*>/g, ""), 1 == showpostsummary)
            if (f.length < numchars) document.write(""), document.write(f), document.write("");
            else {
                document.write("");
                var w = (f = f.substring(0, numchars)).lastIndexOf(" ");
                f = f.substring(0, w), document.write(f + "..."), document.write("")
            }
        document.write("</span>"), document.write("</li>"), document.write("</ul>")
    }
    document.write('<ul class="animagfid2">');
    for (e = 1; e < numposts2; e++) {
        var g, v, k;
        i = (v = t.feed.entry[e]).title.$t;
        if (e == t.feed.entry.length) break;
        for (r = 1; r < v.link.length; r++) {
            if ("replies" == v.link[r].rel && "text/html" == v.link[r].type) m = v.link[r].title, l = v.link[r].href;
            if ("alternate" == v.link[r].rel) {
                g = v.link[r].href;
                break
            }
        }
        try {
            k = v.media$thumbnail.url.replace("/s72-c/", "/w" + thumb_width2 + "-h" + thumb_height2 + "-c/")
        } catch (t) {
            s = v.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), k = -1 != a && -1 != b && -1 != c && "" != d ? d : no_thumb2
        }
        var y;
        o = (y = v.published.$t).substring(0, 4), h = y.substring(5, 7), u = y.substring(8, 10);
        1 == showpostthumbnails2 && document.write('<a href="' + g + '"><div class="Idnthemethumb2"><img width="' + thumb_width2 + '" height="' + thumb_height2 + '" alt="' + i + '" src="' + k + '"/></div></a>'), document.write("<li>"), document.write('<span class="Idnthemetitle Idnthemetitle2"><a href="' + g + '" target ="_top">' + i + "</a></span>");
        p = "";
        document.write('<span class="vienmeta vienmeta2">'), 1 == showpostdate2 && (p = p + '<span class="vienmeta_date vienmeta_date2">' + u + "/" + h + "/" + o + "</span>"), 1 == showcommentnum2 && ("1 Comments" == m && (m = "1 Comment"), "0 Comments" == m && (m = "No Comments"), p += m = '<span class="vienmeta_comment vienmeta_comment2"><a href="' + l + '" target ="_top">' + m + "</a></span>"), 1 == displaymore2 && (p = p + '<span class="vienmeta_more vienmeta_more2"><a href="' + g + '" class="url" target ="_top">Read More...</a></span>'), document.write(p), document.write("</span>"), document.write("</li>")
    }
    document.write("</ul>")
}

function mythumbn1(t) {
    for (var e = 0; e < numposts; e++) {
        var n, i = (v = t.feed.entry[e]).title.$t;
        if (e == t.feed.entry.length) break;
        for (var r = 0; r < v.link.length; r++) {
            if ("replies" == v.link[r].rel && "text/html" == v.link[r].type) var m = v.link[r].title,
                l = v.link[r].href;
            if ("alternate" == v.link[r].rel) {
                g = v.link[r].href;
                break
            }
        }
        try {
            n = (n = v.media$thumbnail.url).replace("/s72-c/", "/w" + thumb_width + "-h" + thumb_height + "-c/")
        } catch (t) {
            s = v.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), n = -1 != a && -1 != b && -1 != c && "" != d ? d : no_thumb
        }
        var o = (y = v.published.$t).substring(0, 4),
            h = y.substring(5, 7),
            u = y.substring(8, 10);
        document.write('<ul class="animagfid1">'), document.write("<li>"), 1 == showpostthumbnails && document.write('<a href="' + g + '"><div class="Idnthemethumb"><img width="' + thumb_width + '" height="' + thumb_height + '" alt="' + i + '" src="' + n + '"/></div></a>'), document.write('<span class="Idnthemetitle"><a href="' + g + '" target ="_top">' + i + "</a></span>");
        var p = "";
        if (document.write('<span class="vienmeta">'), 1 == showpostdate && (p = p + '<span class="vienmeta_date">' + u + "/" + h + "/" + o + "</span>"), 1 == showcommentnum && ("1 Comments" == m && (m = "1 Comment"), "0 Comments" == m && (m = "No Comments"), p += m = '<span class="vienmeta_comment"><a href="' + l + '" target ="_top">' + m + "</a></span>"), 1 == displaymore && (p = p + '<span class="vienmeta_more"><a href="' + g + '" class="url" target ="_top">Read More...</a></span>'), document.write(p), document.write("</span>"), document.write('<span class="viesummary">'), "content" in v) var f = v.content.$t;
        else if ("summary" in v) f = v.summary.$t;
        else f = "";
        if (f = f.replace(/<\S[^>]*>/g, ""), 1 == showpostsummary)
            if (f.length < numchars) document.write(""), document.write(f), document.write("");
            else {
                document.write("");
                var w = (f = f.substring(0, numchars)).lastIndexOf(" ");
                f = f.substring(0, w), document.write(f + "..."), document.write("")
            }
        document.write("</span>"), document.write("</li>"), document.write("</ul>")
    }
    document.write('<ul class="animagfid22">');
    for (e = 1; e < numposts3; e++) {
        var g, v, k;
        i = (v = t.feed.entry[e]).title.$t;
        if (e == t.feed.entry.length) break;
        for (r = 1; r < v.link.length; r++) {
            if ("replies" == v.link[r].rel && "text/html" == v.link[r].type) m = v.link[r].title, l = v.link[r].href;
            if ("alternate" == v.link[r].rel) {
                g = v.link[r].href;
                break
            }
        }
        try {
            k = v.media$thumbnail.url.replace("/s72-c/", "/w" + thumb_width2 + "-h" + thumb_height2 + "-c/")
        } catch (t) {
            s = v.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), k = -1 != a && -1 != b && -1 != c && "" != d ? d : no_thumb2
        }
        var y;
        o = (y = v.published.$t).substring(0, 4), h = y.substring(5, 7), u = y.substring(8, 10);
        1 == showpostthumbnails2 && document.write('<a href="' + g + '"><div class="Idnthemethumb2"><img width="' + thumb_width2 + '" height="' + thumb_height2 + '" alt="' + i + '" src="' + k + '"/></div></a>'), document.write("<li>"), document.write('<span class="Idnthemetitle Idnthemetitle2"><a href="' + g + '" target ="_top">' + i + "</a></span>");
        p = "";
        document.write('<span class="vienmeta vienmeta2">'), 1 == showpostdate2 && (p = p + '<span class="vienmeta_date vienmeta_date2">' + u + "/" + h + "/" + o + "</span>"), 1 == showcommentnum2 && ("1 Comments" == m && (m = "1 Comment"), "0 Comments" == m && (m = "No Comments"), p += m = '<span class="vienmeta_comment vienmeta_comment2"><a href="' + l + '" target ="_top">' + m + "</a></span>"), 1 == displaymore2 && (p = p + '<span class="vienmeta_more vienmeta_more2"><a href="' + g + '" class="url" target ="_top">Read More...</a></span>'), document.write(p), document.write("</span>"), document.write("</li>")
    }
    document.write("</ul>")
}

function mythumbn2(t) {
    document.write('<div id="recent-posts">');
    for (var e = 0; numpost > e; e++) {
        var n, i, r = t.feed.entry[e],
            m = r.title.$t;
        if (e == t.feed.entry.length) break;
        for (var l = 0; l < r.link.length; l++)
            if ("replies" == r.link[l].rel && "text/html" == r.link[l].type && (r.link[l].title, r.link[l].href), "alternate" == r.link[l].rel) {
                n = r.link[l].href;
                break
            }
        try {
            i = r.media$thumbnail.url
        } catch (t) {
            s = r.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), i = -1 != a && -1 != b && -1 != c && "" != d ? d : '" style="display: none;'
        }
        var o = r.published.$t,
            h = o.substring(0, 4),
            u = o.substring(5, 7),
            p = o.substring(8, 10),
            f = new Array;
        f[1] = "Jan", f[2] = "Feb", f[3] = "Mar", f[4] = "Apr", f[5] = "May", f[6] = "Jun", f[7] = "Jul", f[8] = "Aug", f[9] = "Sep", f[10] = "Oct", f[11] = "Nov", f[12] = "Dec", document.write('<div class="post_wrapper1">'), document.write('<div class="post_thumb"><a href="' + n + '"><img src="' + i.replace("/s72-c/", "/s120-c/") + '" alt="' + m + '" height="90" width="90"></div>');
        var w = "";
        if (document.write(""), 1 == showpostdate && (w = w + p + "/" + u + "/" + h, 1), document.write('<div class="post_desc"><a href="' + n + '"><h5>' + m + '</h5></a><span class="meta"><i class="fa fa-clock-o"></i>&nbsp;' + w + "</span><p>"), "content" in r) var g = r.content.$t;
        else if ("summary" in r) g = r.summary.$t;
        else g = "";
        if (g = g.replace(/<\S[^>]*>/g, ""), 1 == showpostsummary)
            if (g.length < numchars) document.write(""), document.write(g), document.write("");
            else {
                document.write("");
                var v = (g = g.substring(0, numchars)).lastIndexOf(" ");
                g = g.substring(0, v), document.write(g + "..."), document.write("")
            }
        document.write("</p></div><div class='clear'></div></div>"), 1 == displayseparator && e != numposts - 1 && document.write("")
    }
    document.write("</div>")
}
imgr = new Array, imgr[0] = "http://sites.google.com/site/fdblogsite/Home/nothumbnail.gif", showRandomImg = !0, aBold = !0, summaryPost = 150, summaryTitle = 50, numposts1 = 10, featured_numposts = "5";
var numpost = 3,
    displayseparator = !1,
    showpostdate = !0,
    showpostsummary = !0,
    numchars = 50;

function bp_thumbnail_resize(t, e) {
    return image_tag = '<img width="300" height="200" src="' + t.replace("/s72-c/", "/w300-h200-c/") + '" alt="' + e.replace(/"/g, "") + '" title="' + e.replace(/"/g, "") + '"/>', "" != e ? image_tag : ""
}
var mql = window.matchMedia("screen and (min-width: 60em)");
mql.matches && (window.onload = function() {
    var t = document.getElementById("diginetfeed");
    null == t && (window.location.href = "http://www.idntheme.com"), t.setAttribute("href", "http://www.idntheme.com"), t.setAttribute("rel", "nofollow"), t.innerHTML = "<a href='http://www.idntheme.com/' target='_blank' title='Kreativitas adalah kunci kesuksesan'>Idntheme</a>"
});

//]]>
var numposts = 8;
var numposts2 = 0;
var numposts3 = 0;
var showpostthumbnails = true;
var showpostthumbnails2 = true;
var displaymore = true;
var displaymore2 = true;
var showcommentnum = true;
var showcommentnum2 = true;
var showpostdate = true;
var showpostdate2 = true;
var showpostsummary = true;
var numchars = 100;
var thumb_width = 350;
var thumb_height = 210;
var thumb_width2 = 110;
var thumb_height2 = 110;
var no_thumb = 'http://1.bp.blogspot.com/-7vDs5hMaDho/U268E2ecF4I/AAAAAAAADY8/RBHVTTuJrxc/w300-h140-c/no-image.png'
var no_thumb2 = 'http://3.bp.blogspot.com/-ltyYh4ysBHI/U04MKlHc6pI/AAAAAAAADQo/PFxXaGZu9PQ/s60-c/no-image.png'
