const $ = window.$;
const init = () => {
  $('.statge-wrapper').waypoint({
    handler: function (direction) {
      $(".js-call-to-action").toggleClass("active", direction === 'down');
    },
    offset: '10%'
  });
  $('.tickets').waypoint({
    handler: function (direction) {
      $(".js-call-to-action").toggleClass("active", direction === 'up');
    },
    offset: '50%'
  });
}

export default {
  init,
};
