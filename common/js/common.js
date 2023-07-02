//ハンバーガーメニュー
$(".hamburger-btn").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
  $(".hamburger-btn-center").toggleClass('active');//ボタン自身に activeクラスを付与し
  $(".hamburger-drawer").fadeToggle(200);//ボタン自身に activeクラスを付与し
});

// TOPページのプロジェクトピックアップのスライド
$('.pickup-slide').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  prevArrow: '<img src="../../common/images/btn_pickup_prev.png" class="slide-arrow prev-arrow">',
  nextArrow: '<img src="../../common/images/btn_pickup_next.png" class="slide-arrow next-arrow">',

  responsive: [{
   breakpoint: 767, // ブレイクポイントを指定
    settings: {
     slidesToShow: 1,
    },
   }
 ]
});