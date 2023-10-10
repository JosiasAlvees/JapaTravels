

// <!-- MENU -->
const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

NavMenu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    menu.classList.remove('ativo');
    NavMenu.classList.remove('ativo');
  }
});


// TEMA
/*const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');
});*/

//ICON TEMA
function mudarIcon() {
  var icon = document.querySelector("i");
  if(icon.classList.contains("bx-sun")) {
    icon.classList.remove("bx-sun");
    icon.classList.add("bx-moon");
  } else {
    icon.classList.remove("bx-moon");
    icon.classList.add("bx-sun");
  }
}

// Quem somos
function openModal(carregarModal) {
  let modal = document.getElementById(carregarModal);

  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closedModal(fecharModal) {
  let modal = document.getElementById(fecharModal);

  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

//ENVIAR MENSAGEM WHATSSAP
function finalizarPedido() {
  let mensagem;
  mensagem =
    "Olá gostaria de saber mais sobre milhas? ";
  window.open("https://www.instagram.com/japatravels_/?igshid=MzRlODBiNWFlZA%3D%3D" + mensagem);
}

//Home 
ScrollReveal().reveal('.text-h1', { delay: 600, duration: 1000, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('.text-b', { delay: 600, duration: 1000, origin: 'bottom', distance: '50px' });

//about
//lazy loading
document.addEventListener("scroll", function() {
  var alturaTela = window.innerHeight;
  var posicao = document.querySelector(".about_img").getBoundingClientRect().top;
  if (posicao - alturaTela <= 0) {
    document.querySelector(".about").classList.add("mostrando");
  }
});

ScrollReveal().reveal('.about_img', { delay: 600, duration: 1000, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('.text-1-1', { delay: 600, duration: 1000, origin: 'bottom', distance: '50px' });


//incluso
//lazy loading
document.addEventListener("scroll", function() {
  var alturaTela = window.innerHeight;
  var posicao = document.querySelector(".incluso").getBoundingClientRect().top;
  if (posicao - alturaTela <= 0) {
    document.querySelector(".incluso").classList.add("mostrando");
  }
});

// Inicialize o ScrollReveal
ScrollReveal().reveal('.text-h', { delay: 200, duration: 1000, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('.oi1', { delay: 400, duration: 1000, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('.oi2', { delay: 600, duration: 1000, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('.oi3', { delay: 800, duration: 1000, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('.containerHospedagem', {duration: 1000,  origin: 'bottom', distance: '50px',
delay: 800 });
ScrollReveal().reveal('.faq-container', { delay: 800, duration: 1000, origin: 'bottom', distance: '50px' });

//banner
//lazy loading
document.addEventListener("scroll", function() {
  var alturaTela = window.innerHeight;
  var posicao = document.querySelector(".banner").getBoundingClientRect().top;
  if (posicao - alturaTela <= 0) {
    document.querySelector(".banner").classList.add("mostrando");
  }
});

//Section depoimentos
document.addEventListener('scroll', function () {
  var alturaTela = window.innerHeight;
  var posicao = document.querySelector(".containerHospedagem").getBoundingClientRect().top;
  if (posicao - alturaTela <= 0) {
    document.querySelector(".containerHospedagem").classList.add("mostrando");
  }
});

//Section FAQ
document.addEventListener('scroll', function () {
  var alturaTela = window.innerHeight;
  var posicao = document.querySelector(".faq-container").getBoundingClientRect().top;
  if (posicao - alturaTela <= 0) {
    document.querySelector(".faq-container").classList.add("mostrando");
  }
});

//PERGUNTAS
const pergunta = document.querySelectorAll('.pergunta')
const resposta = document.querySelectorAll('.resposta')

for(let i = 0; i < pergunta.length; i++){
    pergunta[i].addEventListener('click', () => {
        if(pergunta[i].classList.contains('fechar')){
            pergunta[i].classList.toggle('fechar')
            resposta[i].classList.toggle('ativar')
        }else{
            pergunta[i].classList.add('fechar')
            resposta[i].classList.add('ativar')
        }
    })
}
  
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

