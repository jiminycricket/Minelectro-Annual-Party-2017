import { questionsArray } from '../const/questions';
import { postVotes } from '../service/api';

const $ = window.$;

const init = () => {
  $('#successModal').on('shown.bs.modal', (e) => {
    gtag('event', '投票成功');
  });
};

export const toggleSuccessModal = () => {
  $('#successModal').modal('toggle');
};

export default {
  init,
  toggleSuccessModal,
};
