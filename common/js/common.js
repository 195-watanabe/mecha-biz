//ハンバーガーメニュー
$(".hamburger-btn").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
  $(".hamburger-btn-center").toggleClass('active');//ボタン自身に activeクラスを付与し
  $(".hamburger-drawer").fadeToggle(200);//ボタン自身に activeクラスを付与し
});