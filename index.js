let slider = tns({
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
  nav: false,
  navAsThumbnails: false,
});

// for some reasons after windows dimensions change, slider stop working
// we need to destroy it and build from scratch
window.onresize = function () {
  slider.destroy();
  slider = slider.rebuild();
};
