//Crear class madre e hijas
class Personajes {
  nombre;
  familia;
  edad;
  estado;
  serie = "Juego de Tronos";
  constructor(suNombre, suFamilia, suEdad, suEstado) {
    this.nombre = suNombre;
    this.familia = suFamilia;
    this.edad = suEdad;
    this.estado = suEstado;
  }
  morir() {
    this.estado = "muerto";
  }

}
class Rey extends Personajes {
  añosReinado;
  constructor(suNombre, suFamilia, suEdad, suEstado, tiempoReinado) {
    super(suNombre, suFamilia, suEdad, suEstado);
    this.añosReinado = tiempoReinado;
  }
  comunicarse() {
    return "Vais a morir todos";
  }
};
class Luchador extends Personajes {
  arma;
  destreza;
  constructor(suNombre, suFamilia, suEdad, suEstado, suArma, suDestreza) {
    super(suNombre, suFamilia, suEdad, suEstado);
    this.arma = suArma;
    this.destreza = suDestreza;
  }
  comunicarse() {
    return "Primero pego y luego pregunto";
  }

  set destreza(suDestreza) {
    if (suDestreza > 0 && suDestreza <= 10) {
      this.destreza = suDestreza;
    } else if (suDestreza > 10) {
      this.destreza = 10;
    }
  }
}
class Asesor extends Personajes {
  personajeAsesorado;
  constructor(suNombre, suFamilia, suEdad, suEstado, asesorado) {
    super(suNombre, suFamilia, suEdad, suEstado);
    this.personajeAsesoro = asesorado;
  }
  comunicarse() {
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}
class Escudero extends Personajes {
  personajeQueSirve;
  gradoPelotismo;
  constructor(suNombre, suFamilia, suEdad, suEstado, pelota) {
    super(suNombre, suFamilia, suEdad, suEstado);
    this.gradoPelotismo = pelota;
  }

  set personajeQuesirve(personaje) {
    if (personaje === Luchador) {
      this.personajeQuesirve = personaje;
    }
  }

  set gradoPelotismo(pelota) {
    if (pelota > 0 && pelota <= 10) {
      this.gradoPelotismo = pelota;
    } else if (pelota > 10) {
      this.gradoPelotismo = 10;
    }
  }
  comunicarse() {
    return "Soy un loser";
  }
}

//Crear personajes específicos
const joeffreyBaratheon =
  new Rey("Joeffrey", "Baratheon", 20, "vivo", 1);

const jamieLannister =
  new Luchador("Jamie", "Lannister", 40, "vivo", "espada", 7);

const daenerysTargaryen =
  new Luchador("Daenerys", "Targaryen", 30, "vivo", "dragón", 10);

const tyrionLannister =
  new Asesor("Tyrion", "Lannister", 40, "vivo", "Daenerys");

const bronn =
  new Escudero("Bronn", "na", 45, "vivo", 7);

//Crear array con todos los personajes
const totalPersonajes = [joeffreyBaratheon, jamieLannister,
  daenerysTargaryen, tyrionLannister, bronn];

//Devolver mensaje Luchadores
function mensajePersonajes(nPersonajes) {
  const totalMensajes = nPersonajes
    .filter(personaje => personaje.arma)
    .map(personaje => personaje.comunicarse());
  return totalMensajes;
}

console.log(mensajePersonajes(totalPersonajes));

//Imprimir la serie

const serie = totalPersonajes
  .map(personaje => personaje.serie)
  .filter((personaje, i, personajes) => personajes.indexOf(personaje) === i)
  .toString();

console.log(serie);


//Imprimir todos los mensajes
const mensajes = totalPersonajes.map((personaje) => personaje.comunicarse());

console.log(mensajes);

//Matar a Jamie y a Tyrion



