const hambur=document.querySelector('.menu');
const hammenu=document.querySelector('.mobile-menu');


hambur.addEventListener('click', toogelDesktopMenu);

function toogelDesktopMenu(){
    hammenu.classList.toggle('inactive');
}
const historial=document.querySelector('.hist_torneos');
const historial2=document.querySelector('.hist_torneos2');
const actual=document.querySelector('.torneo_actual');
const actual2=document.querySelector('.torneo_actual2');
const crear=document.querySelector('.crear_tor');
const crear2=document.querySelector('.crear_tor2');

historial.addEventListener('click', selector);
historial2.addEventListener('click', selector);
const tabla_hist=document.querySelector('.historial_tabla');
function selector(){
    historial.classList.add('actual');
    historial2.classList.add('actual');
    actual.classList.remove('actual');
    actual2.classList.remove('actual');
    crear.classList.remove('actual');
    crear2.classList.remove('actual');
    tabla_hist.classList.remove('inactive');
    tabla.classList.add('inactive');
    formulario.classList.add('inactive'); 
    hammenu2.classList.add('inactive');
}
actual.addEventListener('click', selector2);
actual2.addEventListener('click', selector2);
const tabla=document.querySelector('.tabla_botones')
function selector2(){
    actual.classList.add('actual');
    actual2.classList.add('actual');
    historial.classList.remove('actual');
    historial2.classList.remove('actual');
    crear.classList.remove('actual');
    crear2.classList.remove('actual');
    tabla.classList.remove('inactive');
    tabla_hist.classList.add('inactive');
    formulario.classList.add('inactive');
    hammenu2.classList.add('inactive');
    
    
}

crear.addEventListener('click', selector3);
crear2.addEventListener('click', selector3);
const formulario=document.querySelector('.container');
function selector3(){
    crear.classList.add('actual');
    crear2.classList.add('actual');
    historial.classList.remove('actual');
    historial2.classList.remove('actual');
    actual.classList.remove('actual');
    actual2.classList.remove('actual');
    formulario.classList.remove('inactive');
    tabla.classList.add('inactive');
    tabla_hist.classList.add('inactive');
    hammenu2.classList.add('inactive');    
}
const hammenu2=document.querySelector('.mobile-menu2');
const resultado=document.querySelector('.result_link');
const cerrarresul=document.querySelector('.cerrar-resultado');

cerrarresul.addEventListener('click', cerrar);
resultado.addEventListener('click', abrir);

function cerrar(){
    hammenu2.classList.add('inactive');
}
function abrir(){
    hammenu2.classList.remove('inactive');
}







