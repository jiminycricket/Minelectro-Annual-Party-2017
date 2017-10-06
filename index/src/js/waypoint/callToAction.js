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
      $(".background").removeClass("active");
      if(direction === 'down') {
        setTimeout(function() {
          $(".background").addClass("active");
        }, 100);
      }
    },
    offset: '50%'
  });

  $('.intro').waypoint({
    handler: function (direction) {
      $(".scene").toggleClass("hiding", direction === 'down');
    },
    offset: '50%'
  });
}

export default {
  init,
};
