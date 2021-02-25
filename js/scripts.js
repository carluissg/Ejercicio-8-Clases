class JuegoTronos {

}

class Personajes extends JuegoTronos {
  nombre;
  familia;
  edad;
  estado;

  comunicarse() {

  }

  morir() {

  }
}

class Rey extends Personajes {
  nombre;
  familia;
  edad;
  estado;
  reinadoanual;

  constructor() {

  }

  static comunicarse() {
    console.log("Vais a morir todos");
  }
}

class Luchador extends Personajes {
  nombre;
  familia;
  edad;
  estado;
  arma;
  destreza;

  constructor() {

  }

  static comunicarse() {
    console.log("Primero pego luego pregunto");
  }
}

class Asesor extends Personajes {
  nombre;
  familia;
  edad;
  estado;
  personajeasesorado;

  constructor() {

  }

  static comunicarse() {
    console.log("No sé por qué, pero creo que voy a morir pronto");
  }
}

class Escudero extends Personajes {
  nombre;
  familia;
  edad;
  estado;
  personajealservicio = Luchador;
  gradopelotismo

  constructor() {

  }

  static comunicarse() {
    console.log("Soy un loser");
  }
}
