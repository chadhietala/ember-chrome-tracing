import Ember from 'ember';

export function initialize(instance) {
  instance.lookup("router:main").on("didTransition", function () {
    performance.mark('__did_transition__');
    requestAnimationFrame(function () {
      performance.mark('__layout_flushed__');
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            window.location.href = "about:blank";
          });
        });
      });
    })
  });
}

export default {
  name: 'perf-marks',
  initialize
};
