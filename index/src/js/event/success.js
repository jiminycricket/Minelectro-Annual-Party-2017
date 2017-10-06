import { questionsArray } from '../const/questions';
import { postVotes } from '../service/api';

const $ = window.$;

const init = () => {
  // $('#successModal').on('show.bs.modal', (e) => {
  //   console.log('!!!!!!');
  // });
};

export const toggleSuccessModal = () => {
  $('#successModal').modal('toggle');
};

export default {
  init,
  toggleSuccessModal,
};
