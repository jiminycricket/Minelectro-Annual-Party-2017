import { questionsArray } from '../const/questions';
import { postVotes } from '../service/api';
import { toggleSuccessModal } from './success'
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

const offSubmit = () => {
  $('.js-send-votes').off('click');
}

const toggleVoteModal = () => {
  $('#voteModal').modal('toggle');
}

const submit = () => {
  $('.js-send-votes').on('click', () => {
    offSubmit();
    const voteOptions = questionsArray.map((question) => {
      return $(`.option[data-vote-question=${question}].active`).attr('data-option-id');
    }).filter((option) => {
      return !!option;
    });

    if (voteOptions.length === questionsArray.length) {
      toggleVoteModal();
      toggleSuccessModal();
      postVotes(voteOptions).then(() => {
      });
    };
  })
}

export default {
  init,
};
