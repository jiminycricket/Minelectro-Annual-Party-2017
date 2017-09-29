const $ = window.$;

const init = () => {
  $(".js-back-to-top").on("click", () => {
    $.scrollTo("header", 300)
  })
}

export default {
  init,
};
