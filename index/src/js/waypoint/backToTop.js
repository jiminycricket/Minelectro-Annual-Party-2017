const $ = window.$;
const init = () => {
  var waypoints = $('.logo').waypoint({
    handler: function (direction) {
      $(".js-back-to-top").toggleClass("active", direction === 'down');
    },
    offset: '150%'
  })
}

export default {
  init,
};
