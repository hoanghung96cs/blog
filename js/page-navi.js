var perPage = 20;
var numPages = 3,
    firstText = '<i class="fas fa-angle-double-left"></i>',
    lastText = '<i class="fas fa-angle-double-right"></i>',
    prevText = '<i class="fas fa-angle-left"></i>',
    nextText = '<i class="fas fa-angle-right"></i>',
    urlactivepage = location.href,
    home_page = "/";
if (typeof firstText == "undefined") firstText = "First";
if (typeof lastText == "undefined") lastText = "Last";
var noPage;
var currentPage;
var currentPageNo;
var postLabel;
pagecurrentg();

function totalcountdata(json) {
    var totaldata = parseInt(json.feed.openSearch$totalResults.$t, 10);
    var html = '';
    pageNumber = parseInt(numPages / 2);
    if (pageNumber == numPages - pageNumber) {
        numPages = pageNumber * 2 + 1
    }
    pageStart = currentPageNo - pageNumber;
    if (pageStart < 1) pageStart = 1;
    lastPageNo = parseInt(totaldata / perPage) + 1;
    if (lastPageNo - 1 == totaldata / perPage) lastPageNo = lastPageNo - 1;
    pageEnd = pageStart + numPages - 1;
    if (pageEnd > lastPageNo) pageEnd = lastPageNo;
    html += "<span class='showpageOf'>Page " + currentPageNo + '/' + lastPageNo + "</span>";
    var prevNumber = parseInt(currentPageNo) - 1;
    if (currentPageNo > 1) {
        if (currentPage == "page") {
            html += '<span class="showpage firstpage"><a href="' + home_page + '">' + firstText + '</a></span>'
        } else {
            html += '<span class="displaypageNum firstpage"><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">' + firstText + '</a></span>'
        }
    }
    if (currentPageNo > 2) {
        if (currentPageNo == 3) {
            if (currentPage == "page") {
                html += '<span class="showpage"><a href="' + home_page + '">' + prevText + '</a></span>'
            } else {
                html += '<span class="displaypageNum"><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">' + prevText + '</a></span>'
            }
        } else {
            if (currentPage == "page") {
                html += '<span class="displaypageNum"><a onclick="redirectpage(' + prevNumber + ');return false">' + prevText + '</a></span>'
            } else {
                html += '<span class="displaypageNum"><a onclick="redirectlabel(' + prevNumber + ');return false">' + prevText + '</a></span>'
            }
        }
    }
    if (pageStart > 1) {
        if (currentPage == "page") {
            html += '<span class="displaypageNum"><a href="' + home_page + '">1</a></span>'
        } else {
            html += '<span class="displaypageNum"><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">1</a></span>'
        }
    }
    if (pageStart > 2) {
        html += ' ... '
    }
    for (var jj = pageStart; jj <= pageEnd; jj++) {
        if (currentPageNo == jj) {
            html += '<span class="pagecurrent">' + jj + '</span>'
        } else if (jj == 1) {
            if (currentPage == "page") {
                html += '<span class="displaypageNum"><a href="' + home_page + '">1</a></span>'
            } else {
                html += '<span class="displaypageNum"><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">1</a></span>'
            }
        } else {
            if (currentPage == "page") {
                html += '<span class="displaypageNum"><a onclick="redirectpage(' + jj + ');return false">' + jj + '</a></span>'
            } else {
                html += '<span class="displaypageNum"><a onclick="redirectlabel(' + jj + ');return false">' + jj + '</a></span>'
            }
        }
    }
    if (pageEnd < lastPageNo - 1) {
        html += '...'
    }
    if (pageEnd < lastPageNo) {
        if (currentPage == "page") {
            html += '<span class="displaypageNum"><a onclick="redirectpage(' + lastPageNo + ');return false">' + lastPageNo + '</a></span>'
        } else {
            html += '<span class="displaypageNum"><a onclick="redirectlabel(' + lastPageNo + ');return false">' + lastPageNo + '</a></span>'
        }
    }
    var nextnumber = parseInt(currentPageNo) + 1;
    if (currentPageNo < (lastPageNo - 1)) {
        if (currentPage == "page") {
            html += '<span class="displaypageNum"><a onclick="redirectpage(' + nextnumber + ');return false">' + nextText + '</a></span>'
        } else {
            html += '<span class="displaypageNum"><a onclick="redirectlabel(' + nextnumber + ');return false">' + nextText + '</a></span>'
        }
    }
    if (currentPageNo < lastPageNo) {
        if (currentPage == "page") {
            html += '<span class="displaypageNum lastpage"><a onclick="redirectpage(' + lastPageNo + ');return false">' + lastText + '</a></span>'
        } else {
            html += '<span class="displaypageNum lastpage"><a onclick="redirectlabel(' + lastPageNo + ');return false">' + lastText + '</a></span>'
        }
    }
    var pageArea = document.getElementsByName("pageArea");
    var blogPager = document.getElementById("blog-pager");
    for (var p = 0; p < pageArea.length; p++) {
        pageArea[p].innerHTML = html
    }
    if (pageArea && pageArea.length > 0) {
        html = ''
    }
    if (blogPager) {
        blogPager.innerHTML = html
    }
}

function pagecurrentg() {
    var thisUrl = urlactivepage;
    if (thisUrl.indexOf("/search/label/") != -1) {
        if (thisUrl.indexOf("?updated-max") != -1) {
            postLabel = thisUrl.substring(thisUrl.indexOf("/search/label/") + 14, thisUrl.indexOf("?updated-max"))
        } else {
            postLabel = thisUrl.substring(thisUrl.indexOf("/search/label/") + 14, thisUrl.indexOf("?&max"))
        }
    }
    if (thisUrl.indexOf(".html") == -1) {
        if (thisUrl.indexOf("/search/label/") == -1) {
            currentPage = "page";
            if (urlactivepage.indexOf("#PageNo=") != -1) {
                currentPageNo = urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length)
            } else {
                currentPageNo = 1
            }
            if (thisUrl.indexOf("q=") == -1) {
                $.ajax({
                    url: home_page + "feeds/posts/summary",
                    type: "GET",
                    data: {
                        "alt": "json-in-script",
                        "max-results": 1,
                    },
                    dataType: "jsonp",
                    jsonpCallback: "totalcountdata"
                });
            } else {
                $.ajax({
                    url: home_page + "feeds/posts/summary",
                    type: "GET",
                    data: {
                        "alt": "json-in-script",
                        "q": thisUrl.split("?")[1].split("q=")[1].split("&")[0],
                    },
                    dataType: "jsonp",
                    jsonpCallback: "totalcountdata"
                });
            }
        } else {
            currentPage = "label";
            if (thisUrl.indexOf("&max-results=") == -1) {
                perPage = 20
            }
            if (urlactivepage.indexOf("#PageNo=") != -1) {
                currentPageNo = urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length)
            } else {
                currentPageNo = 1
            }
            $.ajax({
                url: home_page + "feeds/posts/summary/-/" + postLabel,
                type: "GET",
                data: {
                    "alt": "json-in-script",
                    "max-results": 1,
                },
                dataType: "jsonp",
                jsonpCallback: "totalcountdata"
            });
        }
    }
}

function redirectpage(numberpage) {
    jsonstart = (numberpage - 1) * perPage;
    noPage = numberpage;
    if (urlactivepage.indexOf("?q=") == -1) {
        $.ajax({
            url: home_page + "feeds/posts/summary",
            type: "GET",
            data: {
                "alt": "json-in-script",
                "max-results": 1,
                "start-index": jsonstart,
            },
            dataType: "jsonp",
            jsonpCallback: "finddatepost"
        });
    } else {
        $.ajax({
            url: home_page + "feeds/posts/summary",
            type: "GET",
            data: {
                "alt": "json-in-script",
                "q": urlactivepage.split("?")[1].split("q=")[1].split("&")[0],
                "start-index": jsonstart,
            },
            dataType: "jsonp",
            jsonpCallback: "finddatepost"
        });
    }
}

function redirectlabel(numberpage) {
    jsonstart = (numberpage - 1) * perPage;
    noPage = numberpage;
    $.ajax({
        url: home_page + "feeds/posts/summary/-/" + postLabel,
        type: "GET",
        data: {
            "alt": "json-in-script",
            "max-results": 1,
            "start-index": jsonstart,
        },
        dataType: "jsonp",
        jsonpCallback: "finddatepost"
    });
}

function finddatepost(root) {
    post = root.feed.entry[0];
    var timestamp1 = post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29);
    var timestamp = encodeURIComponent(timestamp1);
    if (currentPage == "page") {
        if (urlactivepage.indexOf("?q=") == -1) {
            var pAddress = "/search?updated-max=" + timestamp + "&max-results=" + perPage + "#PageNo=" + noPage
        } else {
            var pAddress = "/search?updated-max=" + timestamp + "&q=" + urlactivepage.split("?")[1].split("q=")[1].split("&")[0] + "&max-results=" + perPage + "#PageNo=" + noPage
        }
    } else {
        var pAddress = "/search/label/" + postLabel + "?updated-max=" + timestamp + "&max-results=" + perPage + "#PageNo=" + noPage
    }
    location.href = pAddress
}