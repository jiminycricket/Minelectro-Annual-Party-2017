import { questionsArray } from '../const/questions';
import { postVotes } from '../service/api';
import { toggleSuccessModal } from './success'
const $ = window.$;
const singleSelect = ["question_1", "question_2", "question_4", "question_5", "question_6"];
const fourSlectTwo = ["question_3"];
const init = () => {
  // toggleSuccessModal();

  singleSelect.forEach((question) => {
    optionSingleEvent(question);
  });
  fourSlectTwo.forEach((question) => {
    optionfourSlectTwoEvent(question);
  });
  submit();
}

const validation = () => {
  // 序號
  if (!$('.input').val()) {
    toastr.info('未填入或錯誤： flyingV 金流單號');
    return false
  }

  if ($(`.option[data-vote-question=question_1].active`).length < 1) {
    toastr.info(`主舞台風格 還沒選完喔`);
    $.scrollTo(`#question-1`, 500);
    return false;
  }
  if ($(`.option[data-vote-question=question_2].active`).length < 1) {
    toastr.info(`環境風格 還沒選完喔`);
    $.scrollTo(`#question-2`, 500);
    return false;
  }
  if ($(`.option[data-vote-question=question_3].active`).length < 2) {
    toastr.info(`周邊設施 還沒選完喔`);
    $.scrollTo(`#question-3`, 500);
    return false;
  }
  if ($(`.option[data-vote-question=question_4].active`).length < 1) {
    toastr.info(`酒水價格 還沒選完喔`);
    $.scrollTo(`#question-4`, 500);
    return false;
  }
  if ($(`.option[data-vote-question=question_5].active`).length < 1) {
    toastr.info(`現場票價 還沒選完喔`);
    $.scrollTo(`#question-5`, 500);
    return false;
  }
  if ($(`.option[data-vote-question=question_6].active`).length < 1) {
    toastr.info(`加碼方案 還沒選完喔`);
    $.scrollTo(`#question-6`, 500);
    return false;
  }
  return true;

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

const submit = () => {
  $('.js-send-votes').on('click', () => {
    if (validation()) {
      const voteOptions = questionsArray.map((question) => {
        return $(`.option[data-vote-question=${question}].active`).attr('data-option-id');
      }).filter((option) => {
        return !!option;
      });

      var inputValue = $('.input').val();

      postVotes(inputValue, voteOptions).then((res) => {
        toggleSuccessModal();
      });
    }
  })
}

export default {
  init,
};
