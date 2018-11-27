<!-- CSS to your liking -->

<script type='text/javascript'>
// Variable required 

// Can customize
var perPage=5,
    numPages = 3,
    firstText = 'First',
    lastText = 'Last',
    prevText = 'Prev',
    nextText = 'Next',

// Not Edit
var noPage = currentPage = currentPageNo = postLabel = null
    urlactivepage = location.href,
    home_page = "/";
</script>

<script type='text/javascript'>//<![CDATA[
var totalcountdata = e => {
        let a = parseInt(e.feed.openSearch$totalResults.$t, 10),
            s = "";
        pageNumber = parseInt(numPages / 2), pageNumber == numPages - pageNumber && (numPages = 2 * pageNumber + 1), pageStart = currentPageNo - pageNumber, pageStart < 1 && (pageStart = 1), lastPageNo = parseInt(a / perPage) + 1, lastPageNo - 1 == a / perPage && (lastPageNo -= 1), pageEnd = pageStart + numPages - 1, pageEnd > lastPageNo && (pageEnd = lastPageNo), s += "<span class='showpageOf'>Page " + currentPageNo + "/" + lastPageNo + "</span>";
        let t = parseInt(currentPageNo) - 1;
        currentPageNo > 1 && (s += "page" == currentPage ? '<span class="showpage firstpage"><a href="' + home_page + '">' + firstText + "</a></span>" : '<span class="displaypageNum firstpage"><a href="/search/label/' + postLabel + "?&max-results=" + perPage + '">' + firstText + "</a></span>"), currentPageNo > 2 && (s += 3 == currentPageNo ? "page" == currentPage ? '<span class="showpage"><a href="' + home_page + '">' + prevText + "</a></span>" : '<span class="displaypageNum"><a href="/search/label/' + postLabel + "?&max-results=" + perPage + '">' + prevText + "</a></span>" : "page" == currentPage ? '<span class="displaypageNum"><a onclick="redirectpage(' + t + ');return false">' + prevText + "</a></span>" : '<span class="displaypageNum"><a onclick="redirectlabel(' + t + ');return false">' + prevText + "</a></span>"), pageStart > 1 && (s += "page" == currentPage ? '<span class="displaypageNum"><a href="' + home_page + '">1</a></span>' : '<span class="displaypageNum"><a href="/search/label/' + postLabel + "?&max-results=" + perPage + '">1</a></span>'), pageStart > 2 && (s += "<span class='dot'>...</span>");
        for (let e = pageStart; e <= pageEnd; e++) s += currentPageNo == e ? '<span class="pagecurrent">' + e + "</span>" : 1 == e ? "page" == currentPage ? '<span class="displaypageNum"><a href="' + home_page + '">1</a></span>' : '<span class="displaypageNum"><a href="/search/label/' + postLabel + "?&max-results=" + perPage + '">1</a></span>' : "page" == currentPage ? '<span class="displaypageNum"><a onclick="redirectpage(' + e + ');return false">' + e + "</a></span>" : '<span class="displaypageNum"><a onclick="redirectlabel(' + e + ');return false">' + e + "</a></span>";
        pageEnd < lastPageNo - 1 && (s += "<span class='dot'>...</span>"), pageEnd < lastPageNo && (s += "page" == currentPage ? '<span class="displaypageNum"><a onclick="redirectpage(' + lastPageNo + ');return false">' + lastPageNo + "</a></span>" : '<span class="displaypageNum"><a onclick="redirectlabel(' + lastPageNo + ');return false">' + lastPageNo + "</a></span>");
        let r = parseInt(currentPageNo) + 1;
        currentPageNo < lastPageNo - 1 && (s += "page" == currentPage ? '<span class="displaypageNum"><a onclick="redirectpage(' + r + ');return false">' + nextText + "</a></span>" : '<span class="displaypageNum"><a onclick="redirectlabel(' + r + ');return false">' + nextText + "</a></span>"), currentPageNo < lastPageNo && (s += "page" == currentPage ? '<span class="displaypageNum lastpage"><a onclick="redirectpage(' + lastPageNo + ');return false">' + lastText + "</a></span>" : '<span class="displaypageNum lastpage"><a onclick="redirectlabel(' + lastPageNo + ');return false">' + lastText + "</a></span>");
        let p = document.getElementsByName("pageArea"),
            n = document.getElementById("blog-pager");
        for (let e = 0; e < p.length; e++) p[e].innerHTML = s;
        p && p.length > 0 && (s = ""), n && (n.innerHTML = s)
    },
    pagecurrentg = () => {
        let e = urlactivepage; - 1 != e.indexOf("/search/label/") && (postLabel = -1 != e.indexOf("?updated-max") ? e.substring(e.indexOf("/search/label/") + 14, e.indexOf("?updated-max")) : e.substring(e.indexOf("/search/label/") + 14, e.indexOf("?&max"))), -1 == e.indexOf(".html") && (-1 == e.indexOf("/search/label/") ? (currentPage = "page", currentPageNo = -1 != urlactivepage.indexOf("#PageNo=") ? urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length) : 1, -1 == e.indexOf("q=") ? fetch("/feeds/posts/summary?alt=json&max-results=1").then(e => e.json()).then(e => {
            totalcountdata(e)
        }) : fetch(`/feeds/posts/summary?alt=json&q=${e.split("?")[1].split("q=")[1].split("&")[0]}`).then(e => e.json()).then(e => {
            totalcountdata(e)
        })) : (currentPage = "label", -1 == e.indexOf("&max-results=") && (perPage = 20), currentPageNo = -1 != urlactivepage.indexOf("#PageNo=") ? urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length) : 1, fetch(`/feeds/posts/summary/?alt=json&category=${postLabel}&max-results=1`).then(e => e.json()).then(e => {
            totalcountdata(e)
        })))
    },
    redirectpage = e => {
        jsonstart = (e - 1) * perPage, noPage = e, -1 == urlactivepage.indexOf("?q=") ? fetch(`/feeds/posts/summary?alt=json&max-results=1&start-index=${jsonstart}`).then(e => e.json()).then(e => {
            finddatepost(e)
        }) : fetch(`/feeds/posts/summary?alt=json&start-index=${jsonstart}&q=${urlactivepage.split("?")[1].split("q=")[1].split("&")[0]}`).then(e => e.json()).then(e => {
            finddatepost(e)
        })
    },
    redirectlabel = e => {
        jsonstart = (e - 1) * perPage, noPage = e, fetch(`/feeds/posts/summary/?alt=json&start-index=${jsonstart}&category=${postLabel}&max-results=1`).then(e => e.json()).then(e => {
            finddatepost(e)
        })
    },
    finddatepost = e => {
        post = e.feed.entry[0];
        let a = post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29),
            s = encodeURIComponent(a);
        if ("page" == currentPage)
            if (-1 == urlactivepage.indexOf("?q=")) var t = "/search?updated-max=" + s + "&max-results=" + perPage + "#PageNo=" + noPage;
            else t = "/search?updated-max=" + s + "&q=" + urlactivepage.split("?")[1].split("q=")[1].split("&")[0] + "&max-results=" + perPage + "#PageNo=" + noPage;
        else t = "/search/label/" + postLabel + "?updated-max=" + s + "&max-results=" + perPage + "#PageNo=" + noPage;
        location.href = t
    };
void 0 === firstText && (firstText = "First"), void 0 === lastText && (lastText = "Last"), pagecurrentg();
//]]></script>