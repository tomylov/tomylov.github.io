/* funcion para calcular la edad que aparece en el cv */
window.onload = function () {
  var fecha = document.getElementById("naci").innerText;
  console.log(fecha);
  const fechaActual = new Date();
  const anoActual = parseInt(fechaActual.getFullYear());
  const mesActual = parseInt(fechaActual.getMonth()) + 1;
  const diaActual = parseInt(fechaActual.getDate());

  const diaNac = parseInt(String(fecha).substring(0, 2));
  const mesoNac = parseInt(String(fecha).substring(3, 5));
  const anoNac = parseInt(String(fecha).substring(6, 10));

  let edad = anoActual - anoNac;
  if (mesActual < mesoNac) {
    edad--;

  } else {
    if (mesActual === mesoNac) {
      if (diaActual < diaNac) {
        edad--;
      }
    }
  }
  document.getElementById('edad').innerHTML = edad + " años";
};

/* funcion que muestra los curso clickeando el span */

document.getElementById('more').addEventListener('click', function () {
  let conditional = document.getElementById('more').innerText;
  let text = '2021-  Argentina Programa: #SéProgramar'
  if (conditional === '[ver mas...]') {
      document.getElementById('tittle-course').innerHTML = 'Cursos:';
      document.getElementById('course').innerHTML = text;
      document.getElementById('more').innerHTML = '[ver menos...]';
      document.getElementById('course-add').style.listStyle ='circle'; 
  }else{
      document.getElementById('tittle-course').innerHTML = '';
      document.getElementById('course').innerHTML = '';
      document.getElementById('more').innerHTML = '[ver mas...]';
      document.getElementById('course-add').style.listStyle ='none';
  }
})
