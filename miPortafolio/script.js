var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora frontend junior!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Apasionada de crear cosas nuevas y poder compartirlas contigo:)')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();