const today = new Date();
const experience = today.getFullYear() - 2020;

var dataNascimento = new Date(2001, 4, 17);
var diferencaMilissegundos = today  - dataNascimento;
var idade = Math.floor(diferencaMilissegundos / (365.25 * 24 * 60 * 60 * 1000));

const text = `Meu nome é Rafael André Kulka, tenho ${idade} anos e sou um entusiasta da tecnologia. Desde que comecei a estudar na faculdade em 2019, meu interesse pela programação só aumentou. Desde então, tenho me dedicado a aprimorar minhas habilidades e a me tornar um programador cada vez melhor.`;
//document.querySelector(".text").innerHTML = text;
document.getElementById("apresentacao").innerText = text;



const animation = document.querySelector("#toggle-particles");
animation.addEventListener("click", (event) => {
    if(animation.textContent == "Desativar animação"){
        animation.textContent = 'Ativar animação';
        var element = document.getElementsByClassName("container")[0];
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }else{
        location.reload(true);
    }
});

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      
      this.navList.style.display = "flex";
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list a",
  );
  mobileNavbar.init();
  