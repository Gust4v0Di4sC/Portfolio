const btnMenu = document.querySelector('.toggle');
const menu = document.getElementById("menu");
var boxlist= document.getElementById("boxes");
let itensBox = boxlist.querySelectorAll("img");
const list = document.getElementById('list');
var itens = list.querySelectorAll("li");
var title = document.querySelector(".title1");
var title2 = document.querySelector(".projects>h1");
let title3 = document.querySelector(".title-3");
let subbox2 = document.querySelector(".sub-box2");
let titleproject = document.querySelector(".title-project")




itens.forEach(function(item){
    item.addEventListener('click',()=>{
        window.addEventListener('scroll', function() {
          if (window.scrollY > window.innerHeight) {
            title.classList.add('animate__animated','animate__backInLeft')
            subbox2.classList.add('animate__animated', 'animate__backInUp')
          } else {
            title.classList.remove('animate__animated','animate__backInLeft')
            subbox2.classList.remove('animate__animated', 'animate__backInUp')
          }
        });
    })
    item.addEventListener('click',()=>{
      window.addEventListener('scroll', function() {
        if (window.scrollY > window.innerHeight) {
          title2.classList.add('animate__animated','animate__backInLeft')
        } else {
          title2.classList.remove('animate__animated','animate__backInLeft')
        }
      });     
    })
    item.addEventListener('click',()=>{
      window.addEventListener('scroll', function() {
        if (window.scrollY > window.innerHeight) {
          title3.classList.add('animate__animated','animate__backInLeft')
        } else {
          title3.classList.remove('animate__animated','animate__backInLeft')
        }
      });    
    })
})

itensBox.forEach((item)=>{
  item.addEventListener('mouseover', function(){
    item.classList.add('animate__animated','animate__pulse')
  })     
  item.addEventListener('mouseout', function(){
    item.classList.remove('animate__animated','animate__pulse')
  }) 
})

// Função para rolar suavemente até o topo da página
function scrollToTop() {
    // Verifica se o navegador suporta a função de rolagem suave
    if ('scrollBehavior' in document.documentElement.style) {
      // Se suportado, rola suavemente até o topo
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Se não suportado, rola até o topo instantaneamente
      window.scrollTo(0, 0);
    }
  }
  
  // Adiciona um evento de rolagem para mostrar ou ocultar o botão "back to top"
  window.addEventListener('scroll', function() {
    var btnBackToTop = document.getElementById('btnBackToTop');
    // Mostra o botão quando a página foi rolada para baixo da altura da janela
    if (window.scrollY > window.innerHeight) {
      btnBackToTop.style.display = 'block';
    } else {
      btnBackToTop.style.display = 'none';
    }
  });

  