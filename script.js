//CRUD:(Create, Read, Update, Delete)
//Crear, Leer, Actualizar, Borrar

// alert("Hola Mundo <3");

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

//Usar el punto es para llamar a una propiedad o a una acción del objeto
//las acciones se distinguen por el paréntesis

typewriter
  .pauseFor(2500)
  .typeString('Arely López')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora Front-end Jr.')
  .pauseFor(1000)
  .start();

  let frase = document.getElementById('frase');
let typewriterFrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});
// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()
typewriterFrase
  .pauseFor(3000)
  .typeString('“Hacer una única cosa de manera diferente es a menudo lo mismo que hacer todo de manera diferente.”')
  .pauseFor(300)
  .deleteAll()
  .typeString('Matt Haig')
  .pauseFor(300)
  .start();