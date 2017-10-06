import './scss/style.scss';
import votes from '../../database/votes.json';
import voteEvent from './js/event/vote.js';
import success from './js/event/success.js';
import ga from './js/event/ga';
const $ = window.$;

window.votes = window.votes ? JSON.parse(window.votes) : votes;

var shareInit = () => {
  $('.js-share').on("click", (e) => {
    e.preventDefault();
    window.open($('.js-share').attr('href'), 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
    return false;
  });
}

$(document).ready(() => {
  voteEvent.init();
  success.init();
  ga.init();
  shareInit();
})
