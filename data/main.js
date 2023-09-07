const hambur=document.querySelector('.menu');
const hammenu=document.querySelector('.mobile-menu');
const hammenu2=document.querySelector('.mobile-menu2');

hambur.addEventListener('click', toogelDesktopMenu2);

function toogelDesktopMenu2(){
    hammenu.classList.toggle('inactive');
}
const historial=document.querySelector('.hist_torneos');
const actual=document.querySelector('.torneo_actual');
const crear=document.querySelector('.crear_tor');


historial.addEventListener('click', selector);
actual.addEventListener('click', selector2);
crear.addEventListener('click', selector3);

const historial2=document.querySelector('.hist_torneos2');
const actual2=document.querySelector('.torneo_actual2');
const crear2=document.querySelector('.crear_tor2');

const tabla=document.querySelector('.tabla_botones')
const tabla_hist=document.querySelector('.historial_tabla');
const resultado=document.querySelector('.result_link');
const cerrarresul=document.querySelector('.cerrar-resultado');


const crear_torneo= document.querySelector('.crear-button');
const formulario=document.querySelector('.container');
const volver=document.querySelector('.volver-button');
const formulario2=document.querySelector('.container2');

crear_torneo.addEventListener('click', exito);
volver.addEventListener('click', selector2);

function exito(){
    formulario2.classList.remove('inactive');
    formulario.classList.add('inactive');
}

historial2.addEventListener('click', selector);
actual2.addEventListener('click', selector2);
crear2.addEventListener('click', selector3);
cerrarresul.addEventListener('click', cerrar);
resultado.addEventListener('click', abrir);

function cerrar(){
    hammenu2.classList.add('inactive');
}
function abrir(){
    hammenu2.classList.remove('inactive');
}
function selector(){
    historial.classList.add('actual');
    actual.classList.remove('actual');
    crear.classList.remove('actual');
    formulario.classList.add('inactive');
    formulario2.classList.add('inactive');
    historial2.classList.add('actual');
    actual2.classList.remove('actual');
    crear2.classList.remove('actual');
    tabla.classList.add('inactive');
    tabla_hist.classList.remove('inactive');
    hammenu2.classList.add('inactive');
}
function selector2(){
    historial.classList.remove('actual');
    actual.classList.add('actual');
    crear.classList.remove('actual');
    formulario.classList.add('inactive');
    formulario2.classList.add('inactive');
    hammenu2.classList.add('inactive');
    historial2.classList.remove('actual');
    actual2.classList.add('actual');
    crear2.classList.remove('actual');
    tabla.classList.remove('inactive');
    tabla_hist.classList.add('inactive');
}
function selector3(){
    historial.classList.remove('actual');
    actual.classList.remove('actual');
    crear.classList.add('actual');
    formulario.classList.remove('inactive');
    formulario2.classList.add('inactive');
    hammenu2.classList.add('inactive');
    historial2.classList.remove('actual');
    actual2.classList.remove('actual');
    crear2.classList.add('actual');
    tabla.classList.add('inactive');
    tabla_hist.classList.add('inactive');
}

const rows = document.querySelectorAll('.participant-table tbody tr');

rows.forEach((row) => {
  const editLink = row.querySelector('.edit-link');
  
  editLink.addEventListener('click', function (event) {
    event.preventDefault(); 
    const cells = row.querySelectorAll('td');
    const currentValues = Array.from(cells).map((cell) => cell.textContent);

    const form = document.createElement('form');
    cells.forEach((cell, index) => {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = currentValues[index];
      form.appendChild(input);
    });

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Guardar';
    form.appendChild(saveButton);
    row.innerHTML = '';
    row.appendChild(form);
    saveButton.addEventListener('click', function () {
    
      const newValues = Array.from(form.querySelectorAll('input')).map((input) => input.value);
      cells.forEach((cell, index) => {
        cell.textContent = newValues[index];
      });

      const editLink = document.createElement('a');
      editLink.href = '#';
      editLink.textContent = 'Editar';
      editLink.classList.add('edit-link');
      row.querySelector('td:last-child').appendChild(editLink);
      row.removeChild(form);
    });
  });
});



