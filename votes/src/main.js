import './scss/style.scss';
import votes from '../../database/votes.json';
import voteEvent from './js/event/vote.js';
const $ = window.$;

window.votes = window.votes ? JSON.parse(window.votes) : votes;

$(document).ready(() => {
  voteEvent.init();
})
