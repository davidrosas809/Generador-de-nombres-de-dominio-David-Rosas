let pronombre = ["el", "nuestro"];
let adjetivo = ["grandioso", "diminuto", "asombroso", "hermoso"];
let sustantivo = ["perro", "gato", "delfin"];
let extencion = [".com", ".net", ".es", ".col"];

let combinaciones = [];

for (let i = 0; i < pronombre.length; i++) {
  for (let j = 0; j < adjetivo.length; j++) {
    for (let k = 0; k < sustantivo.length; k++) {
      for (let m = 0; m < extencion.length; m++) {
        let combinacion = `${pronombre[i]}${adjetivo[j]}${sustantivo[k]}${extencion[m]}`;
        combinaciones.push(combinacion);
      }
    }
  }
}
// eslint-disable-next-line no-console
console.log(combinaciones);
