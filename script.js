var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      keyboard: {
        enabled: true,
      },
  });

 