//ハンバーガーメニュー
$(".hamburger-btn").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
  $(".hamburger-btn-center").toggleClass('active');//ボタン自身に activeクラスを付与し
  $(".hamburger-drawer").fadeToggle(200);//ボタン自身に activeクラスを付与し
});

// スムーススクロール
var headerHeight = $('header').outerHeight();
$('a[href^="#"]').click(function() {
    var href= $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:position}, 500);   
    return false;
});

// プロジェクト検索のモーダル
$(".searchbtn").click(function () {//ボタンがクリックされたら
  $('body').addClass('modal-open');//modal-openクラスを付与
  $('.modal-bg').addClass('modal-open');//modal-openクラスを付与
});

$(".searchbtn-area").click(function () {//地域検索ボタンがクリックされたら
  $('.modal-area').addClass('modal-open');//modal-openクラスを付与
});

$(".searchbtn-industry").click(function () {//業種検索ボタンがクリックされたら
  $('.modal-industry').addClass('modal-open');//modal-openクラスを付与
});

$(".searchbtn-tag").click(function () {//業種検索ボタンがクリックされたら
  $('.modal-tag').addClass('modal-open');//modal-openクラスを付与
});

$(".searchbtn-newsletter").click(function () {//業種検索ボタンがクリックされたら
  $('.modal-newsletter').addClass('modal-open');//modal-openクラスを付与
});

$(".modal-bg").click(function () {//背景がクリックされたら
  $('body').removeClass('modal-open');//クラス削除
  $('.modal-bg').removeClass('modal-open');//クラス削除
  $('.modal').removeClass('modal-open');//クラス削除
});

$(".modal-close").click(function () {//closeボタンがクリックされたら
  $('body').removeClass('modal-open');//クラス削除
  $('.modal-bg').removeClass('modal-open');//クラス削除
  $('.modal').removeClass('modal-open');//クラス削除
});

$(".btn-submit").click(function () {//closeボタンがクリックされたら
  $('body').removeClass('modal-open');//クラス削除
  $('.modal-bg').removeClass('modal-open');//クラス削除
  $('.modal').removeClass('modal-open');//クラス削除
});

// アコーディオン
$(function () {
  $(".accordion-ttl").on("click", function () {
    $(this).next().slideToggle(300);
    $(this).toggleClass("open", 300);
  });
});

// 検索タグのチェックとクリア
// 地域
$(function() {
  $('input[name="area"]').on('change', function() {   
    var tagItem = [];
    var searchItem = [];
    $('input[name="area"]:checked').each(function() {
      tagItem.push('<li class="tag-item">' + $(this).val() + '<span class="close"></span></li>');            
      searchItem.push($(this).val() + '<span class="dot">, </span>');            
    });
    
    $('ul.tag-list-area').html(tagItem);
    $('button.searchbtn-area').html(searchItem);
  });
  
  $('.btn-clear').on('click', function() {
    if($("input:checkbox[name='area']").prop( 'checked', false )){
      
      $("input:checkbox[name='area']").prop( 'checked', false );
      $('ul.tag-list-area').html('');
      $('button.searchbtn-area').html('地域を選ぶ');
      
    }
    return false;
  });

  $('.modal-close').on('click', function() {
    if($("input:checkbox[name='area']").prop( 'checked', false )){
      
      $("input:checkbox[name='area']").prop( 'checked', false );
      $('ul.tag-list-area').html('');
      $('button.searchbtn-area').html('地域を選ぶ');
      
    }
    return false;
  });

  $('.modal-bg').on('click', function() {
    if($("input:checkbox[name='area']").prop( 'checked', false )){
      
      $("input:checkbox[name='area']").prop( 'checked', false );
      $('ul.tag-list-area').html('');
      $('button.searchbtn-area').html('地域を選ぶ');
      
    }
    return false;
  });
});

// 業種
$(function() {
  $('input[name="industry"]').on('change', function() {   
    var tagItem = [];
    var searchItem = [];
    $('input[name="industry"]:checked').each(function() {
      tagItem.push('<li class="tag-item">' + $(this).val() + '<span class="close"></span></li>');            
      searchItem.push($(this).val() + '<span class="dot">, </span>');            
    });
    
    $('ul.tag-list-industry').html(tagItem);
    $('button.searchbtn-industry').html(searchItem);
  });
  
  $('.btn-clear').on('click', function() {
    if($("input:checkbox[name='industry']").prop( 'checked', false )){
      
      $("input:checkbox[name='industry']").prop( 'checked', false );
      $('ul.tag-list-industry').html('');
      $('button.searchbtn-industry').html('業種を選ぶ');
      
    }
    return false;
  });

  $('.modal-close').on('click', function() {
    if($("input:checkbox[name='industry']").prop( 'checked', false )){
      
      $("input:checkbox[name='industry']").prop( 'checked', false );
      $('ul.tag-list-industry').html('');
      $('button.searchbtn-industry').html('業種を選ぶ');
      
    }
    return false;
  });

  $('.modal-bg').on('click', function() {
    if($("input:checkbox[name='industry']").prop( 'checked', false )){
      
      $("input:checkbox[name='industry']").prop( 'checked', false );
      $('ul.tag-list-industry').html('');
      $('button.searchbtn-industry').html('業種を選ぶ');
      
    }
    return false;
  });
});

// タグ検索
$(function() {
  $('input[name="tag"]').on('change', function() {   
    var tagItem = [];
    var searchItem = [];
    $('input[name="tag"]:checked').each(function() {
      tagItem.push('<li class="tag-item">' + $(this).val() + '<span class="close"></span></li>');            
      searchItem.push($(this).val() + '<span class="dot">, </span>');            
    });
    
    $('ul.tag-list-tag').html(tagItem);
    $('button.searchbtn-tag').html(searchItem);
  });
  
  $('.btn-clear').on('click', function() {
    if($("input:checkbox[name='tag']").prop( 'checked', false )){
      
      $("input:checkbox[name='tag']").prop( 'checked', false );
      $('ul.tag-list-tag').html('');
      $('button.searchbtn-tag').html('<span class="gray">指定なし</span>');

      
    }
    return false;
  });

  $('.modal-close').on('click', function() {
    if($("input:checkbox[name='tag']").prop( 'checked', false )){
      
      $("input:checkbox[name='tag']").prop( 'checked', false );
      $('ul.tag-list-tag').html('');
      $('button.searchbtn-tag').html('<span class="gray">指定なし</span>');
      
    }
    return false;
  });

  $('.modal-bg').on('click', function() {
    if($("input:checkbox[name='tag']").prop( 'checked', false )){
      
      $("input:checkbox[name='tag']").prop( 'checked', false );
      $('ul.tag-list-tag').html('');
      $('button.searchbtn-tag').html('<span class="gray">指定なし</span>');
      
    }
    return false;
  });
});

// ニュースレターのタグ検索
$(function() {
  $('input[name="newsletter"]').on('change', function() {   
    var newsletterItem = [];
    var searchItem = [];
    $('input[name="newsletter"]:checked').each(function() {
      newsletterItem.push('<li class="newsletter-item">' + $(this).val() + '<span class="close"></span></li>');            
      searchItem.push($(this).val() + '<span class="dot">, </span>');            
    });
    
    $('ul.newsletter-list').html(newsletterItem);
    $('button.searchbtn-newsletter').html(searchItem);
  });
  
  $('.btn-clear').on('click', function() {
    if($("input:checkbox[name='newsletter']").prop( 'checked', false )){
      
      $("input:checkbox[name='newsletter']").prop( 'checked', false );
      $('ul.newsletter-list').html('');
      $('button.searchbtn-newsletter').html('<span class="gray">指定なし</span>');

      
    }
    return false;
  });

  $('.modal-close').on('click', function() {
    if($("input:checkbox[name='newsletter']").prop( 'checked', false )){
      
      $("input:checkbox[name='newsletter']").prop( 'checked', false );
      $('ul.newsletter-list').html('');
      $('button.searchbtn-newsletter').html('<span class="gray">指定なし</span>');
      
    }
    return false;
  });

  $('.modal-bg').on('click', function() {
    if($("input:checkbox[name='newsletter']").prop( 'checked', false )){
      
      $("input:checkbox[name='newsletter']").prop( 'checked', false );
      $('ul.newsletter-list').html('');
      $('button.searchbtn-newsletter').html('<span class="gray">指定なし</span>');
      
    }
    return false;
  });
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
   breakpoint: 1000, // ブレイクポイントを指定
    settings: {
     slidesToShow: 2,
    },
   breakpoint: 767, // ブレイクポイントを指定
    settings: {
     slidesToShow: 1,
    },
   }
 ]
});