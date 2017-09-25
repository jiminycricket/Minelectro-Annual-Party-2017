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

const app = express();
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');
app.use('/assets', express.static('assets'));

app.get('/', (request, response) => {
    getQuestions().then(questions => {
        response.render('index');
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

exports.app = functions.https.onRequest(app);
