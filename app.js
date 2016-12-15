function init() {
    let body = document.querySelector('body');
}

function getNewQuestion() {
    let question = new XMLHttpRequest();
    question.open('GET', 'http://jservice.io/api/random');
    question.addEventListener('load', function() {

    });
    question.send();

}

window.addEventListener('load', getNewQuestion);