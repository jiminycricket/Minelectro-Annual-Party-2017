import './scss/style.scss';
import votes from '../../database/votes.json';
import chart from './js/service/chart';
import voteEvent from './js/event/vote.js';
const $ = window.$;

window.votes = window.votes ? JSON.parse(window.votes) : votes;

$(document).ready(() => {
  chart.getOptions(".chart[data-question='question_1']")
  chart.getOptions(".chart[data-question='question_2']")
  chart.getOptions(".chart[data-question='question_3']")
  chart.getOptions(".chart[data-question='question_4']")
  chart.getOptions(".chart[data-question='question_5']")
  chart.getOptions(".chart[data-question='question_6']")
  voteEvent.init();
})
