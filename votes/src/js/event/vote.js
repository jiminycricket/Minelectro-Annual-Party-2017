import { questionsArray } from '../const/questions';
import { postVotes } from '../service/api';
import { toggleSuccessModal } from './success'
const $ = window.$;
const singleSelect = ["question_1", "question_2", "question_4", "question_5", "question_6"];
const fourSlectTwo = ["question_3"];
const init = () => {
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
  const ValidateOptions = [{
    question: 1,
    length: 1,
    text: '主舞台風格',
  },{
    question: 2,
    length: 1,
    text: '環境風格',
  },{
    question: 3,
    length: 2,
    text: '周邊設施',
  },{
    question: 4,
    length: 1,
    text: '酒水價格',
  },{
    question: 5,
    length: 1,
    text: '現場票價',
  },{
    question: 6,
    length: 1,
    text: '加碼方案',
  }];
  ValidateOptions.forEach((ValidateOption) => {
    if ($(`.option[data-vote-question=question_${ValidateOption.question}].active`).length < ValidateOption.length) {
      toastr.info(`${ValidateOption.text} 還沒選完喔`);
      $.scrollTo(`#question-${ValidateOption.question}`, 500);
      return;
    }
  })
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
