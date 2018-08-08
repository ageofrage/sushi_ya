let biscuit,bisStart;
let menuPosition = $("#menu").offset().top;
let howtoPosition = $("#howto").offset().top;
let tipsPosition = $("#tips").offset().top;
let sushidaPosition = $("#sushida").offset().top;
let scrollWindow = $(window);
let scrollHeader = $(".header");
let targetBottom;


//cookieでアクセス回数を検索
//cookie有効なら作動
if(navigator.cookieEnabled){
  biscuit=document.cookie + ";";
  bisStart=biscuit.indexOf("count=",0);
  //初めてじゃなければ非表示
  if(bisStart>=0){
    $(function(){
      $("#main").before('<h1 class="attention">申し訳ありませんが、一見さん以外はお断りしています。</h1>');
      $("#main").hide();
    });
  }else{
    //初めてなら表示
    $(function(){
      console.log(bisStart);
      document.cookie="count=1;";
      $("#menu").before('<h1 class="attention">いらっしゃい！</h1>');
    });
  };
  //cookie無効の場合
}else{
  document.write("cookieを有効にしてください");
};

$(function(){
  //modal
  $("#tuna").click(function(){
    $("#tuna-modal").fadeIn("fast");
  });
  $("#shrimp").click(function(){
    $("#shrimp-modal").fadeIn("fast");
  });
  $("#salmon").click(function(){
    $("#salmon-modal").fadeIn("fast");
  });
  $("#egg").click(function(){
    $("#egg-modal").fadeIn("fast");
  });
  $(".close-modal").click(function(){
    $(".modal-wrapper").fadeOut("fast");
  });

  //howtoのslideDown&UP
  function howtoSlide() {
      $(this).next().slideToggle(200);
  };
  $(".howto-title").click(howtoSlide);

  //tips答え表示
  $(".tips-q").click(function(){
    $(this).next().addClass("animated flipInY");
    $(this).removeClass("animated flipInY");

    $(this).css({
      "display":"none"
    });
    $(this).next().css({
      "display":"block"
    });
  });

  //tips答え非表示
  $(".tips-a").click(function(){
    $(this).prev().addClass("animated flipInY");
    $(this).removeClass("animated flipInY");

    $(this).css({
      "display":"none"
    });
    $(this).prev().css({
      "display":"block"
    });
  });

  //任意の場所にスクロール
  $(".to-menu").click(function(){
    $("html,body").animate({
        scrollTop : menuPosition
    }, {
        queue : false
    });
  });

  $(".to-how").click(function(){
    $("html,body").animate({
        scrollTop : howtoPosition
    }, {
        queue : false
    });
  });

  $(".to-tips").click(function(){
    $("html,body").animate({
        scrollTop : tipsPosition
    }, {
        queue : false
    });
  });

  $(".to-sushi").click(function(){
    $("html,body").animate({
        scrollTop : sushidaPosition
    }, {
        queue : false
    });
  });

//ヘッダーのスクロール
  scrollWindow.on("scroll",function(){
      targetBottom = $(".top-img").height();
      if(scrollWindow.scrollTop() > targetBottom){
          scrollHeader.addClass("fix");
      }
      else{
          scrollHeader.removeClass("fix");
      }
  });
  scrollWindow.trigger("scroll");
});
