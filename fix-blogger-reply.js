* Tích hợp jQuery nếu blog chưa có: dán sau thẻ <head>

<script src='//cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js' type='text/javascript'></script>

1. Tìm thẻ

* Blog1 version 1 : tìm đến thẻ <b:includable id='threaded_comment_js' var='post'>

* Blog1 version 2 : tìm đến thẻ <b:includable id='threadedCommentJs' var='post'>

2. Thay toàn bộ nội dung bên trong nó thành

<script type='text/javascript'>//<![CDATA[
$(window).on("load", function() {
  function n(n, t) {
    $(n).each(function() {
      var n = $(this);
      n.on("click", function(e) {
        $(".comment-actions,.cancel-comment").show(), e.preventDefault();
        let c = n.parents(t).attr("id").substr(1),
          m = o.split("?");
        $("#comment-editor")[0].src = m[0] + "?parentID=" + c + "&" + m[1], n.parent().hide(), n.parents("li").append($(".comment-form")[0])
      })
    })
  }
  $(".comment-form").append('<a class="cancel-comment" style="font-family:Roboto,sans-serif;font-weight:700;font-size:12px;color:#ff0000;cursor:pointer;">CANCEL</a>'), $(".cancel-comment").hide();
  const o = $("#comment-editor-src").attr("href");
  $(".comment-block[id]").length ? n("a[o='r']", ".comment-block") : n(".comment-reply", "li"), $(".cancel-comment").on("click", function() {
    $(".comment-actions").show(), $("#comment-editor")[0].src = o, $(".comments-content").before($(".comment-form")[0]), $(this).hide()
  })
});
//]]></script>
