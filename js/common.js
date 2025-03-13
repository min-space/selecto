var mb = new Swiper(".mb", {
  pagination: {
    el: ".mb .swiper-pagination",
    clickable : true, // 버튼 클릭시 페이지 이동 가능
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
});

var sns_list = new Swiper(".sns-list", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: 5, //스와이퍼 갯수
  spaceBetween: 30, // 사이 간격
});