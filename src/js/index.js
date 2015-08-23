/**
 * Created by jiayao3 on 2015/8/14.
 */
$.fn.smartFloat = function() {
    var position = function(element) {
        var top = element.position().top; //当前元素对象element距离浏览器上边缘的距离
        var pos = element.css("position"); //当前元素距离页面document顶部的距离
        $(window).scroll(function() { //侦听滚动时
            var scrolls = $(this).scrollTop();
            if (scrolls > top) { //如果滚动到页面超出了当前元素element的相对页面顶部的高度
                if (window.XMLHttpRequest) { //如果不是ie6
//                    alert(element.find('.search').html());
                    element.find('.search').removeClass('none');
                    element.find('.article-place-right').removeClass('right').addClass('left');
                    element.css({ //设置css
                        position: "fixed", //固定定位,即不再跟随滚动
//                        background:'#ccc',
                        top: 0 //距离页面顶部为0
                    }).addClass("shadow"); //加上阴影样式.shadow

                } else { //如果是ie6
                    element.css({
                        top: scrolls  //与页面顶部距离
                    });
                }
            }else {
                element.css({ //如果当前元素element未滚动到浏览器上边缘，则使用默认样式
                    position: pos,
                    top: top
                }).removeClass("shadow");//移除阴影样式.shadow
                element.find('.search').addClass('none');
                element.find('.article-place-right').removeClass('left').addClass('right');
            }
        });
    };
    return $(this).each(function() {
        position($(this));
    });
};

function position(ele){
    var top = $('.article-place').position().top;
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        if(scroll>top){
            $('.article-place').css({
                position:'fixed',
                top:0
            })
        }
    });
}

function scrollBar(time){
    var imgs = [];
    var height = $('.banner-imgs').find('img').eq(0).height();
    var length = $('#js_banner').find('img').size();
    var index = 1;
    var nubersHtml = '';
    for(i=0;i<length;i++){
        nubersHtml+='<li data-index="'+i+'" class="page-index js-page-index">'+(i+1)+'</li>';
        imgs.push( $('#js_banner').find('img').eq(i));
    };
    $('.js-img-indexs').html(nubersHtml);
    $('.js-img-indexs').find('.js-page-index').eq(0).addClass('active');
    $('.js-img-indexs').on('click','.js-page-index',function(){
        index = parseInt($(this).attr('data-index'));
        $('.banner-imgs').animate({top:height*index+'px'});
        $(".js-img-indexs").find('.active').removeClass('active');
        $('.js-img-indexs').find('.js-page-index').eq(index-1).addClass('active');
    });
  setInterval(function(){
      if(index<length){
          top_h=-(height*index);
          index ++;
      }else{
          top_h=0;
          index =1;
      }
      $('.banner-imgs').animate({top:top_h+'px'});
      $(".js-img-indexs").find('.active').removeClass('active');
      $('.js-img-indexs').find('.js-page-index').eq(index-1).addClass('active');

  },time);
}

function showProducts(){
    var html ='';
    for(var i=0;i<100;i++){
    html+='<a class="store left clearfix js-store">'+
        '     <div class="store-left left">'+
        '         <img class="store-left-icon" src="img/product.jpeg">'+
        '         <span>26 分钟</span>'+
        '         <img class="store-logo-passicon" src="img/passIcon.png">'+
        '         </div>'+
        '     <div class="store-content">'+
        '         <div class="store-title">潘大师炸鸡腿.饭</div>'+
        '         <div class="store-starrating icon-stars">'+
        '             <span class="starrating-icon icon-stars" style="width:90%;"></span>'+
        '         </div>'+
        '         <span class="store-monthsales">月销2009份</span>'+
        '         <div class=store-cost">10元起送 / 免费配送</div>'+
        '         <div class="store-activity">'+
        '             <i class="activity" style="background:#CC22E2;">减</i>'+
        '             <i class="activity" style="background:#fff;color:#FF4E00;border:1px solid;padding:0;">付</i>'+
        '             <i class="activity" style="background:#fff;color:#9071CB;border:1px solid;padding:0;">票</i>'+
        '             <i class="activity" style="background:#fff;color:#3190E8;border:1px solid;padding:0;">赔</i>'+
        '         </div>'+
        '     </div>';
        html+=
        '     <div class="store-bubble bubble none js-bubble">'+
        '         <div class="bubblue-head">'+
        '             <div class="store-title">潘大师炸鸡腿.饭</div>'+
        '             <div class="font999">西式,汉堡</div>'+
        '         </div>'+
        '         <div class="bubble-center">'+
        '             <div class="bubble-activity">'+
        '                 <li><i class="activity" style="background:#CC22E2;">减</i><span>优惠信息</span></li>'+
        '                 <li><i class="activity" style="background:#fff;color:#FF4E00;border:1px solid;padding:0;">付</i><span>优惠信息</span></li>'+
        '                 <li><i class="activity" style="background:#fff;color:#9071CB;border:1px solid;padding:0;">票</i><span>优惠信息</span></li>'+
        '                 <li><i class="activity" style="background:#fff;color:#3190E8;border:1px solid;padding:0;">赔</i><span>优惠信息</span></li>'+
        '             </div>'+
        '             <div class="bubble-tab"><span>0元起送</span><span>配送费9元</span><span class="clearBorder">平均36分钟送达</span></div>'+
        '             <div class="bubble-remark">本餐厅不使用饿了么配送，由肯德基宅急送官方品牌配送，会员用户无法享受免配送费服务</div>'+
        '         </div>'+
        '     </div>'+
        ' </a>';
    }
    $('.js-stores').html(html);
}
function setBubbleDirection(){
    var list = [];
    var width = $('.js-stores').width();
    console.log(width);
    var store_w=$('.js-store').width();
    $('.js-store').each(function(i){
        var store = $(this).position().left;
//        console.log(store.left);
        if((width-store)<(store_w+1)){
            $(this).find('.js-bubble').removeClass('bubble').removeClass('store-bubble')
                                        .addClass('bubble-left').addClass('store-bubble-left');
        }else{
            console.log($(this).find('.bubble-left'));
            if($(this).find('.bubble-left').length>0){
                $(this).find('.js-bubble').removeClass('bubble-left').removeClass('store-bubble-left')
                    .addClass('bubble').addClass('store-bubble');
            }
        }
    })
}

$(function(){
    $('#js-top').smartFloat();
    showProducts();
    setBubbleDirection();
});
window.onload = function(){
    scrollBar(1000);
};
$(window).resize(function(){
    setBubbleDirection();
});