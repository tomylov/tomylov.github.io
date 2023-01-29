/* https://cvcrea.es/wp-content/uploads/2022/07/ejemplo-curriculum-vitae-online-gratis.jpg */
/* https://fontawesome.com/v4/icons/ */


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


document.getElementById('more').addEventListener('click', function () {
  let conditional = document.getElementById('more').innerText;
  console.log(conditional);
  if (conditional === '[Leer mas...]') {
      document.getElementById('tittle-curse').innerHTML = 'Cursos:';
      document.getElementById('curse-add').innerHTML = '2021-  Argentina Programa: #SéProgramar';
      document.getElementById('more').innerHTML = '[Leer menos...]';
      document.getElementById('curse-add').style.listStyle ='circle'; 
  }else{
      document.getElementById('tittle-curse').innerHTML = '';
      document.getElementById('curse-add').innerHTML = '';
      document.getElementById('more').innerHTML = '[Leer mas...]';
      document.getElementById('curse-add').style.listStyle ='none';
  }
})
