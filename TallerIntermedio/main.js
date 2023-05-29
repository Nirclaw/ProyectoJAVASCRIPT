class Personaje {
  nombre;
  fuerza;
  constructor({nombre='Dame un nombre', fuerza=0}) {
    this.fuerza = fuerza;
    this.nombre = nombre;
  }
  get fuerza() {
    return this.fuerza;
  }
  set nuevaFuerza(nuevafuerza) {
    this.fuerza = nuevafuerza;
  }
  get nombre() {
    return this.nombre;
  }
  set nuevoNombre(NuevoNombre) {
    this.nombre = NuevoNombre;
  }

  presentarse(nombre, fuerza) {
    return `Hola mi nombre es ${nombre}, y mi nivel de fuerza es de ${fuerza}. :D`;
  }
}

class Jedi extends Personaje {
  constructor(fuerza) {
    super(fuerza);
  }
  usarFuerza() {
    return `El jedi esta usando la fuerza`;
  }
  entrenar(fuerza) {
    return `Su fuerza ha pasado de ${fuerza} a ${fuerza + 10}`;
  }
}

class Sith extends Personaje {
  constructor(fuerza) {
    super(fuerza);
  }
  usarFuerza() {
    return `el Sith ha usado la fuerza`;
  }

  corromper(fuerza) {
    return `su poder ha pasado de ${fuerza} a ${fuerza - 5}`;
  }
}

class MaestroJedi extends Jedi {
  constructor(fuerza) {
    super(fuerza);
  }
  ensenar(fuerza) {
    return `Su nivel de fuerza ha incrementado de ${fuerza} a ${fuerza + 20}`;
  }
}

let yoda = new Personaje({nombre:"Nath",fuerza:10})

document.getElementById("motrar").innerText="Hola soy nicolas"

console.log(yoda.presentarse(yoda.nombre,yoda.fuerza));

console.log();

