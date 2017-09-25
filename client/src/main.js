import './scss/style.scss';
import $ from 'jquery';
import votes from '../../database/votes.json';
import chart from './service/chart';

window.votes = window.votes ? JSON.parse(window.votes) : votes;

$(document).ready(() => {
  console.log(window.votes);
  chart.getOptions(".chart[data-question='question_1']")
  chart.getOptions(".chart[data-question='question_2']")
  chart.getOptions(".chart[data-question='question_3']")
  chart.getOptions(".chart[data-question='question_4']")
  chart.getOptions(".chart[data-question='question_5']")
  chart.getOptions(".chart[data-question='question_6']")
})
