const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

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

  crear() {
    c.save();
    c.globalAlpha = this.opacidad;
    c.translate(
      jugador.posicion.x + jugador.width / 2,
      jugador.posicion.y + jugador.height / 2
    );
    c.rotate(this.rotacion);

    c.translate(
      -jugador.posicion.x - jugador.width / 2,
      -jugador.posicion.y - jugador.height / 2
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
    this.crear();
    this.posicion.x += this.velocidad.x;

    if (this.opacidad !== 1) return;
    this.frames++;
  }
}

class Alien {
  constructor({ posicion }) {
    this.velocidad = {
      x: 1.2,
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

  crear() {
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
      this.crear();
      this.posicion.x += this.velocidad.x;
      this.posicion.y += this.velocidad.y;
    }
  }
}

class Proyectil {
  constructor({ posicion, velocidad }) {
    this.posicion = posicion;
    this.velocidad = velocidad;
    this.radio = 3;
  }

  crear() {
    c.beginPath();
    c.arc(this.posicion.x, this.posicion.y, this.radio, 0, Math.PI * 2);

    c.fillStyle = "red";
    c.fill();
    c.closePath();
  }

  actualizar() {
    this.crear();
    this.posicion.x += this.velocidad.x;
    this.posicion.y += this.velocidad.y;
  }
}

class Cuadricula {
  constructor() {
    this.posicion = {
      x: 0,
      y: 0,
    };
    this.velocidad = {
      x: 3.5,
      y: 0,
    };

    this.aliens = [];

    const columnas = Math.floor(Math.random() * 20 + 5);
    const lineas = Math.floor(Math.random() * 8 + 2);

    this.width = columnas * 30;

    for (let i = 0; i < columnas; i++) {
      for (let j = 0; j < lineas; j++) {
        this.aliens.push(
          new Alien({
            posicion: {
              x: i * 30,
              y: j * 30,
            },
          })
        );
      }
    }
    console.log(this.aliens);
  }

  actualizar() {
    if (this.posicion.x + this.width >= canvas.width || this.posicion.x <= 0) {
      this.velocidad.x = -this.velocidad.x;
      this.posicion.y += 15;
    }

    this.posicion.x += this.velocidad.x;
    this.posicion.y += this.velocidad.y;

    this.velocidad.y = 0;

    this.aliens.forEach((alien) => {
      if (
        alien.posicion.x + alien.width >= canvas.width ||
        alien.posicion.x <= 0
      ) {
        alien.velocidad.x = -alien.velocidad.x;
        alien.posicion.y += 50;
      }

      alien.actualizar();
    });
  }
}

const jugador = new Jugador();
const cuadriculas = [new Cuadricula()];
const proyectiles = [];

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

function animar() {
  requestAnimationFrame(animar);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  jugador.actualizar();

  proyectiles.forEach((proyectil, indice) => {
    if (proyectil.posicion.y + proyectil.radio <= 0) {
      setTimeout(() => {
        proyectiles.splice(indice, 1);
      }, 0);
    } else {
      proyectil.actualizar();
    }
  });

  cuadriculas.forEach((cuadricula) => {
    cuadricula.actualizar();
    cuadricula.aliens.forEach((alien) => {
      alien.actualizar({ velocidad: cuadricula.velocidad });
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
}

animar();

addEventListener("keydown", ({ key }) => {
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
    case "ArrowUp":
      teclas.ArrowUp.presionada = false;
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
