var rot = -111
var setarr = 0;
var slidarr= $(".header_cont_central_slder_item")
var swiper = new Swiper(".swiper-container1", {
  pagination: {
    el: ".swiper-pagination-main",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swipernext",
    prevEl: ".swiperprev",
  },
  loop: true,
});
var swiper = new Swiper(".swiper-container-creat", {
  pagination: {
    el: ".swiper-pagination-creat",
  },
  navigation: {
    nextEl: ".nextcreat",
  },
  autoHeight: true,
});
$(".swipernext").click(function(){
  if(rot<111){
    rot+=37;
    setarr+=1;
    $(slidarr).removeClass("activ")
    $(slidarr[setarr]).addClass("activ")
    $(".header_cont_central_slder").css("transform","rotate("+rot+"deg)")
  }
  if(rot==111){
    rot=-111;
    setarr=0;
    $(slidarr).removeClass("activ")
    $(slidarr[setarr]).addClass("activ")
    $(".header_cont_central_slder").css("transform","rotate("+rot+"deg)")
  }
})
$(".swiperprev").click(function(){
  if(rot>-112){
    rot-=37;
    setarr-=1;
    $(slidarr).removeClass("activ")
    $(slidarr[setarr]).addClass("activ")
    $(".header_cont_central_slder").css("transform","rotate("+rot+"deg)")
  }
  if(rot<-111){
    rot=74;
    setarr=5;
    $(slidarr).removeClass("activ")
    $(slidarr[setarr]).addClass("activ")
    $(".header_cont_central_slder").css("transform","rotate("+rot+"deg)")
  }
})
$(".creat_cont_flex_item").click(function(){
  $(".creat_cont_flex_item").removeClass("activ")
  $(this).addClass("activ")
})
$(".catalog_cont_filter a").click(function(){
  $(".catalog_cont_filter a").removeClass("activ")
  $(this).addClass("activ")
})
$(".price_val").click(function(){
  $(".price_select").slideUp(300);
  $(this).siblings(".price_select").slideDown(300);
  console.log($(".selectfirst").text())
})
$(".price_select_item").click(function(){
  $(".price_select").slideUp(300);

})
var b = 1;
$(".countminus").click(function(){
  if(b>1){
    b-=1
    $(this).siblings("span").text(b)
  }
})
$(".countplus").click(function(){
  b+=1;
  $(this).siblings("span").text(b)
})
var g = 0;
$(".openmenubtn").click(function(){
  if(g==0){
    $(".header_mobile").css("width","100%")
    g=1
  }
  else{
    $(".header_mobile").css("width","0")
    g=0
  }
})
$(".callbackabsalute, .openmodalss").click(function(){
  $(".callbackmodal").show()
})
$(".callnumber").click(function(){
  $(".number_modal").show()
})
$(".clousmodalbtn").click(function(){
  $(".number_modal").hide()
  $(".callbackmodal").hide()
})
var swiper = new Swiper(".otzivslider", {
  slidesPerView: 'auto',
  loop: true,
});
