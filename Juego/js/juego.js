const canvas = document.querySelector("canvas");
const puntuacionJugador = document.querySelector("#puntuacion");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 768;

class Jugador {
  constructor() {
    this.velocidad = {
      x: 0,
      y: 0,
    };

    this.posicion = {
      x: 0,
      y: 0,
    };

    this.rotacion = 0;
    this.opacidad = 1;

    const image = new Image();
    image.src = "./img/nave.png";
    image.onload = () => {
      const escala = 0.15;
      this.image = image;
      this.width = this.image.width * escala;
      this.height = this.image.height * escala;
      this.posicion = {
        x: canvas.width / 2 - this.width / 2,
        y: canvas.height - this.height - 20,
      };
    };

    this.particulas = [];
    this.frames = 0;
  }

  draw() {
    c.save();
    c.globalAlpha = this.opacidad;
    c.translate(
      this.posicion.x + this.width / 2,
      this.posicion.y + this.height / 2
    );
    c.rotate(this.rotacion);

    c.translate(
      -this.posicion.x - this.width / 2,
      -this.posicion.y - this.height / 2
    );

    c.drawImage(
      this.image,
      this.posicion.x,
      this.posicion.y,
      this.width,
      this.height
    );

    c.restore();
  }

  actualizar() {
    if (!this.image) return;
    this.draw();
    this.posicion.x += this.velocidad.x;

    if (this.opacidad !== 1) return;
    this.frames++;
  }
}

class Alien {
  constructor({ posicion }) {
    this.velocidad = {
      x: 2,
      y: 0,
    };
    this.posicion = {
      x: 0,
      y: 0,
    };

    this.image = new Image();
    this.image.src = "./img/alien.png";
    this.image.onload = () => {
      const escala = 0.05;
      this.width = this.image.width * escala;
      this.height = this.image.height * escala;
      this.posicion = {
        x: posicion.x,
        y: posicion.y,
      };
    };
  }

  draw() {
    c.drawImage(
      this.image,
      this.posicion.x,
      this.posicion.y,
      this.width,
      this.height
    );
  }

  actualizar() {
    if (this.image) {
      this.draw();
      this.posicion.x += this.velocidad.x;
      this.posicion.y += this.velocidad.y;
    }
  }

  disparar(alienProyectiles) {
    alienProyectiles.push(
      new AlienProyectil({
        posicion: {
          x: this.posicion.x + this.width / 2,
          y: this.posicion.y + this.height / 2,
        },
        velocidad: {
          x: 0,
          y: 5,
        },
      })
    );
  }
}

class Proyectil {
  constructor({ posicion, velocidad }) {
    this.posicion = posicion;
    this.velocidad = velocidad;
    this.radio = 4;
  }

  draw() {
    c.beginPath();
    c.arc(this.posicion.x, this.posicion.y, this.radio, 0, Math.PI * 2);

    c.fillStyle = "red";
    c.fill();
    c.closePath();
  }

  actualizar() {
    this.draw();
    this.posicion.x += this.velocidad.x;
    this.posicion.y += this.velocidad.y;
  }
}

class AlienProyectil {
  constructor({ posicion, velocidad }) {
    this.posicion = posicion;
    this.velocidad = velocidad;

    this.width = 3;
    this.height = 10;
  }

  draw() {
    c.fillStyle = "white";
    c.fillRect(this.posicion.x, this.posicion.y, this.width, this.height);
  }

  actualizar() {
    this.draw();
    this.posicion.x += this.velocidad.x;
    this.posicion.y += this.velocidad.y;
  }
}

class Particula {
  constructor({ posicion, velocidad, radio, color, difuminacion }) {
    this.posicion = posicion;
    this.velocidad = velocidad;

    this.radio = radio;
    this.color = color;
    this.opacidad = 1;
    this.difuminacion = difuminacion;
  }

  draw() {
    c.save();
    c.globalAlpha = this.opacidad;
    c.beginPath();
    c.arc(this.posicion.x, this.posicion.y, this.radio, 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
    c.restore();
  }

  actualizar() {
    this.draw();
    this.posicion.x += this.velocidad.x;
    this.posicion.y += this.velocidad.y;

    if (this.difuminacion) this.opacidad -= 0.01;
  }
}

class Cuadricula {
  constructor() {
    this.posicion = {
      x: canvas.width / 2,
      y: 0,
    };
    this.velocidad = {
      x: 5,
      y: 0,
    };

    this.aliens = [];

    const columnas = Math.floor(Math.random() * (10 - 3) + 5);
    const lineas = Math.floor(Math.random() * (10 - 5) + 2);

    this.width = columnas * 30;

    for (let i = 0; i < columnas; i++) {
      for (let j = 0; j < lineas; j++) {
        this.aliens.push(
          new Alien({
            posicion: {
              x: this.posicion.x + i * 30 - this.width / 2,
              y: j * 30,
            },
          })
        );
      }
    }
  }

  actualizar() {
    this.aliens.forEach((alien) => {
      if (
        alien.posicion.x + alien.width >= canvas.width ||
        alien.posicion.x <= 0
      ) {
        alien.velocidad.x = -alien.velocidad.x;
        alien.posicion.y += 20;
      }
      alien.actualizar();
    });
  }
}

const jugador = new Jugador();
const cuadriculas = [new Cuadricula()];
const proyectiles = [];
const alienProyectiles = [];
const particulas = [];

const teclas = {
  a: {
    presionada: false,
  },
  d: {
    presionada: false,
  },
  ArrowUp: {
    presionada: false,
  },
};

let frames = 0;
let framesRandom = Math.floor(Math.random() * 500) + 500;
let game = {
  over: false,
  active: true,
};
let puntuacion = 0;

// Fondo de estrellas
for (let i = 0; i < 100; i++) {
  particulas.push(
    new Particula({
      posicion: {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
      },
      velocidad: {
        x: 0,
        y: 0.3,
      },
      radio: Math.random() * 2,
      color: "cyan",
    })
  );
}

function crearParticulas({ objeto, color, difuminacion }) {
  for (let i = 0; i < 15; i++) {
    particulas.push(
      new Particula({
        posicion: {
          x: objeto.posicion.x + objeto.width / 2,
          y: objeto.posicion.y + objeto.height / 2,
        },
        velocidad: {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
        },
        radio: Math.random() * 3,
        color: color || "yellow",
        difuminacion: true,
      })
    );
  }
}

function animar() {
  if (!game.active) {
    finDelJuego();
    return;
  }

  requestAnimationFrame(animar);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  jugador.actualizar();

  particulas.forEach((particula, i) => {
    if (particula.posicion.y - particula.radio >= canvas.height) {
      particula.posicion.x = Math.random() * canvas.width;
      particula.posicion.y = -particula.radio;
    }

    if (particula.opacidad <= 0) {
      setTimeout(() => {
        particulas.splice(i, 1);
      }, 0);
    } else {
      particula.actualizar();
    }
  });

  alienProyectiles.forEach((alienProyectil, i) => {
    if (alienProyectil.posicion.y + alienProyectil.height >= canvas.height) {
      setTimeout(() => {
        alienProyectiles.splice(i, 1);
      }, 0);
    }
    alienProyectil.actualizar();

    if (
      alienProyectil.posicion.y + alienProyectil.height >= jugador.posicion.y &&
      alienProyectil.posicion.x + alienProyectil.width >= jugador.posicion.x &&
      alienProyectil.posicion.x <= jugador.posicion.x + jugador.width
    ) {
      jugador.opacidad = 0;
      game.over = true;
      crearParticulas({
        objeto: jugador,
        color: "white",
        difuminacion: true,
      });
      setTimeout(() => {
        game.active = false;
      }, 2000);
    }
  });

  proyectiles.forEach((proyectil, indice) => {
    if (proyectil.posicion.y - proyectil.radio <= 0) {
      setTimeout(() => {
        proyectiles.splice(indice, 1);
      }, 0);
    } else {
      proyectil.actualizar();
    }
  });

  cuadriculas.forEach((cuadricula, cuadriculaI) => {
    cuadricula.actualizar();

    // Disparo de Aliens
    if (frames % 100 === 0 && cuadricula.aliens.length > 0) {
      cuadricula.aliens[
        Math.floor(Math.random() * cuadricula.aliens.length)
      ].disparar(alienProyectiles);
    }
    cuadricula.aliens.forEach((alien, i) => {
      alien.actualizar({ velocidad: cuadricula.velocidad });

      proyectiles.forEach((proyectil, j) => {
        if (
          proyectil.posicion.y - proyectil.radio <=
            alien.posicion.y + alien.height &&
          proyectil.posicion.x + proyectil.radio >= alien.posicion.x &&
          proyectil.posicion.x - proyectil.radio <=
            alien.posicion.x + alien.width &&
          proyectil.posicion.y + proyectil.radio >= alien.posicion.y
        ) {
          setTimeout(() => {
            const indexAlien = cuadricula.aliens.findIndex(
              (alien2) => alien2 === alien
            );
            const indexProyectil = proyectiles.findIndex(
              (proyectil2) => proyectil2 === proyectil
            );

            if (indexAlien !== -1 && indexProyectil !== -1) {
              // Puntuacion por matar Aliens
              puntuacion += 100;
              puntuacionJugador.innerHTML = puntuacion;
              crearParticulas({
                objeto: alien,
                difuminacion: true,
              });
              cuadricula.aliens.splice(indexAlien, 1);
              proyectiles.splice(indexProyectil, 1);

              if (cuadricula.aliens.length > 0) {
                const primerAlien = cuadricula.aliens[0];
                const ultimoAlien =
                  cuadricula.aliens[cuadricula.aliens.length - 1];

                cuadricula.width =
                  ultimoAlien.posicion.x -
                  primerAlien.posicion.x +
                  ultimoAlien.width;
                cuadricula.posicion.x = primerAlien.posicion.x;
              } else {
                cuadriculas.splice(cuadriculaI, 1);
              }
            }
          }, 0);
        }
      });
    });
  });

  if (teclas.a.presionada && jugador.posicion.x >= 0) {
    jugador.velocidad.x = -7;
    jugador.rotacion = -0.15;
  } else if (
    teclas.d.presionada &&
    jugador.posicion.x + jugador.width <= canvas.width
  ) {
    jugador.velocidad.x = 7;
    jugador.rotacion = 0.15;
  } else {
    jugador.velocidad.x = 0;
    jugador.rotacion = 0;
  }

  // Generacion de aliens
  if (frames % framesRandom === 0) {
    cuadriculas.push(new Cuadricula());
    framesRandom = Math.floor(Math.random() * 500) + 500;
    frames = 0;
  }

  frames++;
}

animar();

addEventListener("keydown", ({ key }) => {
  if (game.over) return;

  switch (key) {
    case "a":
      teclas.a.presionada = true;
      break;
    case "d":
      teclas.d.presionada = true;
      break;
    case "ArrowUp":
      teclas.ArrowUp.presionada = true;
      proyectiles.push(
        new Proyectil({
          posicion: {
            x: jugador.posicion.x + jugador.width / 2,
            y: jugador.posicion.y,
          },
          velocidad: {
            x: 0,
            y: -10,
          },
        })
      );
      break;
    default:
      break;
  }
});

addEventListener("keyup", ({ key }) => {
  switch (key) {
    case "a":
      teclas.a.presionada = false;
      break;
    case "d":
      teclas.d.presionada = false;
      break;
    default:
      break;
  }
});

// Boton para Reiniciar el Juego

function reiniciar() {
  // Comprobar si el juego a acabado
  if (!game.over) return;

  // Restablecer variables de juego
  game.over = false;
  game.active = true;
  puntuacion = 0;
  puntuacionJugador.innerHTML = puntuacion;

  // Restablecer posición y estado del jugador
  jugador.posicion = {
    x: canvas.width / 2 - jugador.width / 2,
    y: canvas.height - jugador.height - 20,
  };
  jugador.velocidad = {
    x: 0,
    y: 0,
  };
  jugador.rotacion = 0;
  jugador.opacidad = 1;

  // Limpiar arrays de proyectiles, alienProyectiles y cuadriculas
  proyectiles.length = 0;
  alienProyectiles.length = 0;
  cuadriculas.length = 0;

  // Reiniciar frames y framesRandom
  frames = 0;
  framesRandom = Math.floor(Math.random() * 500) + 500;

  // Reiniciar estado de las teclas
  teclas.a.presionada = false;
  teclas.d.presionada = false;
  teclas.ArrowUp.presionada = false;

  // Reiniciar opacidad de las partículas
  particulas.forEach((particula) => {
    particula.opacidad = 1;
  });

  // Reiniciar la velocidad de los aliens y generar nuevas cuadrículas
  for (let i = 0; i < 2; i++) {
    cuadriculas.push(new Cuadricula());
  }

  // Quita el mensaje de fin del juego
  c.clearRect(0, 0, canvas.width, canvas.height);

  // Start the animation loop again
  animar();
}

function finDelJuego() {
  c.fillStyle = "white";
  c.font = "bold 40px Arial";
  c.fillText("FIN DEL JUEGO", canvas.width / 2 - 150, canvas.height / 2);
}
