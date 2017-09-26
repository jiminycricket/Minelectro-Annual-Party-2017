import { questionsArray } from '../const/questions';
const $ = window.$;

const init = () => {
  $('#voteModal').on('show.bs.modal', (e) => {
    questionsArray.forEach((question) => {
      optionEvent(question);
    });
    submit();
  });
}

const optionEvent = (question) => {
  const $options = $(`.option[data-vote-question=${question}]`);
  $options.on('click', function () {
    $options.removeClass("active");
    $(this).addClass("active");
  });
};

const submit = () => {
  $('.js-send-votes').on('click', () => {
    const voteOptions = questionsArray.map((question) => {
      return $(`.option[data-vote-question=${question}].active`).attr('data-option-id');
    }).filter((option) => {
      return !!option;
    });

    if (voteOptions.length === questionsArray.length) {
      alert("sned");
    };
  })
}

export default {
  init,
};
