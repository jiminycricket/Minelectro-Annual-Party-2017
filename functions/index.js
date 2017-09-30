const functions = require('firebase-functions');
const express = require('express');
const firebase = require('firebase-admin');
const engines = require('consolidate');
// const cors = require('cors')({origin: true});

const firebaseApp = firebase.initializeApp(
  functions.config().firebase
);

function getQuestions() {
  const ref = firebaseApp.database().ref('questions');
  return ref.once('value').then(snap => snap.val());
}
function getVotes() {
  const ref = firebaseApp.database().ref('votes');
  return ref.once('value').then(snap => snap.val());
}

function writeVoteData(voteId) {
  return firebase.database().ref(`votes/${voteId}`).transaction((current_value) => {
    return (current_value || 0) + 1;
  });
}

const app = express();
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');
app.use('/static', express.static('views/static'));

app.get('/', (request, response) => {
  getVotes().then(votes => {
    response.render('index', {
      votes: JSON.stringify(votes)
    });
  });
});

app.get('/votes', (request, response) => {
  getVotes().then(votes => {
    response.render('votes', {
      votes: JSON.stringify(votes)
    });
  });
});

app.get('/api/questions', (request, response) => {
  getQuestions().then(questions => {
    response.json(questions);
  });
});

app.get('/api/votes', (request, response) => {
  getVotes().then(votes => {
    response.json(votes);
  });
});

app.post('/api/vote', (request, response) => {
  var votes = request.body.votes;
  if (votes.length !== 0) {
    Promise.all(votes.map((voteId) => {
      return writeVoteData(voteId);
    })).then((res) => {
        response.json({ status: 'okay', res });
      });
    } else {
      response.json({ status: 'fail' });
  }
});

exports.app = functions.https.onRequest(app);
