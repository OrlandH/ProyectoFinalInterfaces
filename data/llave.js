var part1Div = document.querySelector('.par1 .participant');
var part2Div = document.querySelector('.par2 .participant');
function copiarContenido() {
    var part1Spans = document.querySelectorAll('.par1 .participant span');
    var part1_1Spans = document.querySelectorAll('.par1-1 .participant span');
  
    for (var i = 0; i < part1Spans.length; i++) {
        part1_1Spans[i].textContent = part1Spans[i].textContent;
    }
            part1Div.classList.add('winner');
            part2Div.classList.remove('winner');
}
var par1Link = document.querySelector('.par1');
par1Link.addEventListener('click', function (event) {
    event.preventDefault();
    copiarContenido();
});


function copiarContenido2() {
    var part2Spans = document.querySelectorAll('.par2 .participant span');
    var part1_1Spans = document.querySelectorAll('.par1-1 .participant span');

    for (var i = 0; i < part2Spans.length; i++) {
        part1_1Spans[i].textContent = part2Spans[i].textContent;
    }
            part2Div.classList.add('winner');
            part1Div.classList.remove('winner');
}
var par2Link = document.querySelector('.par2');
par2Link.addEventListener('click', function (event) {
    event.preventDefault();
    copiarContenido2();
});

//
var part3Div = document.querySelector('.par3 .participant');
var part4Div = document.querySelector('.par4 .participant');
function copiarContenido3() {
    var part3Spans = document.querySelectorAll('.par3 .participant span');
    var part1_2Spans = document.querySelectorAll('.par1-2 .participant span');

    for (var i = 0; i < part3Spans.length; i++) {
        part1_2Spans[i].textContent = part3Spans[i].textContent;
    }
            part3Div.classList.add('winner');
            part4Div.classList.remove('winner');
}
var par3Link = document.querySelector('.par3');
par3Link.addEventListener('click', function (event) {
    event.preventDefault();
    copiarContenido3();
});


function copiarContenido4() {
    var part4Spans = document.querySelectorAll('.par4 .participant span');
    var part1_2Spans = document.querySelectorAll('.par1-2 .participant span');

    for (var i = 0; i < part4Spans.length; i++) {
        part1_2Spans[i].textContent = part4Spans[i].textContent;
    }
            part4Div.classList.add('winner');
            part3Div.classList.remove('winner');
}
var par4Link = document.querySelector('.par4');
par4Link.addEventListener('click', function (event) {
    event.preventDefault();
    copiarContenido4();
});

//

var part5Div = document.querySelector('.par5 .participant');
var part6Div = document.querySelector('.par6 .participant');
function copiarContenido5() {
    var part5Spans = document.querySelectorAll('.par5 .participant span');
    var part1_3Spans = document.querySelectorAll('.par1-3 .participant span');

    for (var i = 0; i < part5Spans.length; i++) {
        part1_3Spans[i].textContent = part5Spans[i].textContent;
    }
            part5Div.classList.add('winner');
            part6Div.classList.remove('winner');
}
var par5Link = document.querySelector('.par5');
par5Link.addEventListener('click', function (event) {
    event.preventDefault();
    copiarContenido5();
});


function copiarContenido6() {
    var part6Spans = document.querySelectorAll('.par6 .participant span');
    var part1_3Spans = document.querySelectorAll('.par1-3 .participant span');

    for (var i = 0; i < part6Spans.length; i++) {
        part1_3Spans[i].textContent = part6Spans[i].textContent;
    }
            part6Div.classList.add('winner');
            part5Div.classList.remove('winner');
}
var par6Link = document.querySelector('.par6');
par6Link.addEventListener('click', function (event) {
    event.preventDefault();
    copiarContenido6();
});

//
var part7Div = document.querySelector('.par7 .participant');
var part8Div = document.querySelector('.par8 .participant');
function copiarContenido7() {
    var part7Spans = document.querySelectorAll('.par7 .participant span');
    var part1_4Spans = document.querySelectorAll('.par1-4 .participant span');

    for (var i = 0; i < part7Spans.length; i++) {
        part1_4Spans[i].textContent = part7Spans[i].textContent;
    }
            part7Div.classList.add('winner');
            part8Div.classList.remove('winner');
}
var par7Link = document.querySelector('.par7');
par7Link.addEventListener('click', function (event) {
    event.preventDefault();
    copiarContenido7();
});


function copiarContenido8() {
    var part8Spans = document.querySelectorAll('.par8 .participant span');
    var part1_4Spans = document.querySelectorAll('.par1-4 .participant span');

    for (var i = 0; i < part8Spans.length; i++) {
        part1_4Spans[i].textContent = part8Spans[i].textContent;
    }
            part8Div.classList.add('winner');
            part7Div.classList.remove('winner');
}
var par8Link = document.querySelector('.par8');
par8Link.addEventListener('click', function (event) {
    event.preventDefault();
    copiarContenido8();
});

//
var part1_1Div = document.querySelector('.par1-1 .participant');
var part1_2Div = document.querySelector('.par1-2 .participant');
function copiarContenido9() {
    var part1_1Spans = document.querySelectorAll('.par1-1 .participant span');
    var part2_1Spans = document.querySelectorAll('.par2-1 .participant span');

    for (var i = 0; i < part1_1Spans.length; i++) {
        part2_1Spans[i].textContent = part1_1Spans[i].textContent;
    }
            part1_1Div.classList.add('winner');
            part1_2Div.classList.remove('winner');
}
var par1_1Link = document.querySelector('.par1-1');
par1_1Link.addEventListener('click', function (event) {
    event.preventDefault();
    copiarContenido9();
});

function copiarContenido10() {
    var part1_2Spans = document.querySelectorAll('.par1-2 .participant span');
    var part2_1Spans = document.querySelectorAll('.par2-1 .participant span');

    for (var i = 0; i < part1_2Spans.length; i++) {
        part2_1Spans[i].textContent = part1_2Spans[i].textContent;
    }
            part1_2Div.classList.add('winner');
            part1_1Div.classList.remove('winner');
}
var par1_2Link = document.querySelector('.par1-2');
par1_2Link.addEventListener('click', function (event) {
    event.preventDefault();
    copiarContenido10();
});

//
var part1_3Div = document.querySelector('.par1-3 .participant');
var part1_4Div = document.querySelector('.par1-4 .participant');
function copiarContenido11() {
    var part1_3Spans = document.querySelectorAll('.par1-3 .participant span');
    var part2_2Spans = document.querySelectorAll('.par2-2 .participant span');

    for (var i = 0; i < part1_3Spans.length; i++) {
        part2_2Spans[i].textContent = part1_3Spans[i].textContent;
    }
            part1_3Div.classList.add('winner');
            part1_4Div.classList.remove('winner');
}
var par1_3Link = document.querySelector('.par1-3');
par1_3Link.addEventListener('click', function (event) {
    event.preventDefault();
    copiarContenido11();
});


function copiarContenido12() {
    var part1_4Spans = document.querySelectorAll('.par1-4 .participant span');
    var part2_2Spans = document.querySelectorAll('.par2-2 .participant span');

    for (var i = 0; i < part1_4Spans.length; i++) {
        part2_2Spans[i].textContent = part1_4Spans[i].textContent;
    }
            part1_4Div.classList.add('winner');
            part1_3Div.classList.remove('winner');
}
var par1_4Link = document.querySelector('.par1-4');
par1_4Link.addEventListener('click', function (event) {
    event.preventDefault();
    copiarContenido12();
});

//

var part2_1Div = document.querySelector('.par2-1 .participant');
var part2_2Div = document.querySelector('.par2-2 .participant');
function copiarContenido13() {
    var par2_1Span = document.querySelector('.par2-1 .participant span');
    var ganconSpan = document.querySelector('.gancon span');
    ganconSpan.textContent = par2_1Span.textContent;
    part2_1Div.classList.add('winner');
    part2_2Div.classList.remove('winner');
}

var par2_1Link = document.querySelector('.par2-1');
par2_1Link.addEventListener('click', function (event) {
    event.preventDefault();
    copiarContenido13();
});

function copiarContenido14() {
    var par2_2Span = document.querySelector('.par2-2 .participant span');
    var ganconSpan = document.querySelector('.gancon span');
    ganconSpan.textContent = par2_2Span.textContent;
    part2_2Div.classList.add('winner');
    part2_1Div.classList.remove('winner');
}

var par2_2Link = document.querySelector('.par2-2');
par2_2Link.addEventListener('click', function (event) {
    event.preventDefault();
    copiarContenido14();
});