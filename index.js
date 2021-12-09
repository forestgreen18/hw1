let sliderInstagram = tns({
  mode: 'carousel',
  container: '.slider',
  // items: 5,
  autoplay: true,
  fixedWidth: 320,
  slideBy: 1,
  mouseDrag: true,
  swipeAngle: false,
  speed: 1000,
  controls: false,
  gutter: 35,
  navAsThumbnails: false,
}
);

let sliderLocations = tns({
  "container": ".location-slider",
  "loop": false,
  "items": 1,
  responsive: {
      
      667: {
        items: 2
      },
      900: {
        items: 3
      }
    },
  "swipeAngle": false,
  "speed": 400,
  controlsContainer: "#customize-controls",
}
);



// const slides = document.querySelectorAll('.slider-1 .slider-line .suggestion-block');
// const sliderLine = document.querySelector('.slider-line');
// let count = 0;
// let width;

// function init() {
//   console.log('resize')
//   width = document.querySelector('.suggestion-block').offsetWidth;
//   sliderLine.style.width = (width + 30)*slides.length + 'px'
//   slides.forEach(item => {
//     // item.style.width = width + 'px'
//     // item.style.height = '100%'
//   })
//   if(count) {
//     rollSlider()
//   }
// }

// window.addEventListener('resize', init);
// init()

// document.querySelector('.slider-prev').addEventListener('click', function() {
//   count--;
//   if (count < 0) {
//     count = slides.length - 1;
//   }
//   rollSlider()
// })

// document.querySelector('.slider-next').addEventListener('click', function() {
//   count++;
//   if (count >= slides.length) {
//     count = slides.length - 1
//   }
//   rollSlider()

  
// })

// function rollSlider() {
//   console.log(width)
//   sliderLine.style.transform = `translate(-${count*width+30}px)`
// }

// for some reasons after windows dimensions change, slider stop working
// we need to destroy it and build from scratch
window.onresize = function () {
  slider.destroy();
  slider = slider.rebuild();
};
