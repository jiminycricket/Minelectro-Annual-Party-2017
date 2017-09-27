import { questionsArray } from '../const/questions';
import { postVotes } from '../service/api';
import { toggleSuccessModal } from './success'
const $ = window.$;
const singleSelect = ["question_1", "question_2", "question_4", "question_5", "question_6"];
const fourSlectTwo = ["question_3"];
const init = () => {
  // $('#voteModal').on('show.bs.modal', (e) => {
    singleSelect.forEach((question) => {
      optionSingleEvent(question);
    });
    fourSlectTwo.forEach((question) => {
      optionfourSlectTwoEvent(question);
    });
    submit();
  // });
}

const optionfourSlectTwoEvent = (question) => {
  const $options = $(`.option[data-vote-question=${question}]`);
  $options.on('click', function (e) {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      return;
    }
    if ($(`.option[data-vote-question=${question}].active`).length >= 2) {
      return;
    } else {
      $(this).addClass("active");
    }
  });
}

const optionSingleEvent = (question) => {
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
    questionsArray
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
