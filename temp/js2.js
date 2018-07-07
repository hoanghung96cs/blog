$(function() {
    $(window).scroll(function() {
        $(this).scrollTop() > 400 ? $(".animagftotop").addClass("arlniainf") : $(".animagftotop").removeClass("arlniainf")
    }), $(".animagftotop").click(function() {
        return $("html,body").animate({
            scrollTop: 0
        }, 400), !1
    })
}), $(document).ready(function() {
    $("#PopularPosts1,.recent_posts_Idntheme").find("img").each(function(t, e) {
        (e = $(e)).attr({
            src: e.attr("src").replace(/s\B\d{2,4}/, "s90")
        }), e.attr("width", "100%"), e.attr("height", "auto")
    })
}), $(function() {
    var t, e, n, a;
    $(".ripplelink").click(function(i) {
        0 === $(this).find(".ink").length && $(this).prepend("<span class='ink'></span>"), (t = $(this).find(".ink")).removeClass("animate"), t.height() || t.width() || (e = Math.max($(this).outerWidth(), $(this).outerHeight()), t.css({
            height: e,
            width: e
        })), n = i.pageX - $(this).offset().left - t.width() / 2, a = i.pageY - $(this).offset().top - t.height() / 2, t.css({
            top: a + "px",
            left: n + "px"
        }).addClass("animate")
    })
});
var newidth = 202,
    neweight = 120;
$(".popular-posts .item-thumbnail img,ul.recent_posts_arlina img").each(function() {
    $(this).attr("width");
    $(this).attr("width", newidth), $(this).attr("height", neweight), $(this).attr("src", $(this).attr("src").replace("/s72-c/", "/w" + newidth + "-h" + neweight + "-c/"))
}), $(".PopularPosts .item-snippet").text(function(t, e) {
    return e.substr(0, 130)
}), $("ul li:has(ul)").addClass("has-submenu"), $("ul li ul").addClass("sub-menu"), $("ul.dropdown li").hover(function() {
    $(this).addClass("hover")
}, function() {
    $(this).removeClass("hover")
});
var $menu = $("#menu"),
    $menulink = $("#spinner-form"),
    $search = $("#search"),
    $search_box = $(".search_box"),
    $menuTrigger = $(".has-submenu > a");
$menulink.click(function(t) {
    $menulink.toggleClass("active"), $menu.toggleClass("active"), $search.hasClass("active") && $(".menu.active").css("padding-top", "50px")
}), $search.click(function(t) {
    t.preventDefault(), $search_box.toggleClass("active")
}), $menuTrigger.click(function(t) {
    t.preventDefault(), $(this).toggleClass("active").next("ul").toggleClass("active")
}), $("ul li:has(ul)"), $(function() {
    var t = $(document).scrollTop(),
        e = $(".nav_wrapper").outerHeight();
    $(window).scroll(function() {
        var n = $(document).scrollTop();
        $(document).scrollTop(), $(".nav_wrapper").css("position", "fixed"), n > e ? $(".nav_wrapper").addClass("scroll") : $(".nav_wrapper").removeClass("scroll"), n > t ? $(".nav_wrapper").removeClass("no-scroll") : $(".nav_wrapper").addClass("no-scroll"), t = $(document).scrollTop()
    })
});
var mql = window.matchMedia("screen and (min-width: 60em)");
mql.matches && (window.onload = function() {
    var t = document.getElementById("diginetfeed");
    null == t && (window.location.href = "http://www.idntheme.com"), t.setAttribute("href", "http://www.idntheme.com"), t.setAttribute("rel", "nofollow"), t.innerHTML = "<a href='http://www.idntheme.com/' target='_blank' title='Kreativitas adalah kunci kesuksesan'>Idntheme</a>"
});