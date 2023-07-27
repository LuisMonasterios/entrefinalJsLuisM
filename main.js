// const preguntaNombre = prompt("Hola Bienvenido al IPCH, ¿Cómo es tu Nombre?");
// document.getElementById("nombre").innerHTML =
//   "Hola Alumno(a): " + preguntaNombre;

document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const n2 = parseFloat(document.getElementById("n2").value);
    const n3 = parseFloat(document.getElementById("n3").value);
    const n4 = parseFloat(document.getElementById("n4").value);
    const n5 = parseFloat(document.getElementById("n5").value);
    const n6 = parseFloat(document.getElementById("n6").value);

    const promediar = (n2 + n3 + n4 + n5) / 4;
    if (n6 >= 6) {
      promediar = (n2 + n3 + n4 + 0) / 4;
    }


    document.getElementById("result").innerHTML =
      "<b>Tu Nota Final es:</b> " + promediar.toFixed(2);

      const promFinal = localStorage.getItem("Promedio");
  if (promFinal > 14) {
    alert("Has sido exonerado de la Matrícula para el siguiente Ciclo");
  } else {
    alert("Genial, el próximo Ciclo lo puedes hacer mejor");
  }

  });

  function guardarPromedio () {
    localStorage.setItem("Promedio", promediar);
    };

const fecha = moment().format('LT');
document.getElementById("fecha").innerHTML = `Son las: ${fecha}`;

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const mostrarAlerta = true;
    if (mostrarAlerta) {
     resolve ("Prom. mayores a 15pts serán Exonerados");
    } else {
     reject("Notas menores a 15 no son exonerados");
    }
  }, 5000)
}
)
promesa.then((mensaje) => {
  document.getElementById("beneficio").innerHTML = mensaje;
});

const djson = `
{
  "datos": {
      "Razón Social": "Instituto Peruano Chino",
      "RUC": "2050460054",
      "Dirección": "Av José Galvez 230"
  }
}
`;

const datosjs = JSON.parse(djson);

console.log(datosjs);