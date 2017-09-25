import $ from 'jquery';

export default {
  getOptions: (element) => {
    var options = $(element).find(".option-counter");
    var total = 0
    options.each((i) => {
      const optionId = $(options[i]).attr('data-option-id');
      if (window.votes[optionId]) {
        total = total += window.votes[optionId];
      }
    })
    options.each((i) => {
      const optionId = $(options[i]).attr('data-option-id');
      $(options[i]).css({
        width: `${window.votes[optionId] * 100 / total}%`
      });
    })
    console.log(total);
  }
};
