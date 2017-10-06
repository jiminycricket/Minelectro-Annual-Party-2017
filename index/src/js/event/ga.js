import { questionsArray } from '../const/questions';
import { postVotes } from '../service/api';

const $ = window.$;

const init = () => {
  $('.js-ga-call').on('click', (e) => {
    gtag('event', '點擊募資頁');
  });
};

export default {
  init,
};
