import './scss/style.scss';
import votes from '../../database/votes.json';
import chart from './js/service/chart';
import voteEvent from './js/event/vote.js';
import waypointBackToTop from './js/waypoint/backToTop';
import callToAction from './js/waypoint/callToAction';
import backToTop from './js/service/backToTop';
import ga from './js/event/ga';
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
  waypointBackToTop.init();
  backToTop.init();
  callToAction.init();
  ga.init();
  $(".top-cover").addClass("end");
  setTimeout(function() {
    $(".top-cover").remove();
  }, 2000);
})
