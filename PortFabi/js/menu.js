const header = document.querySelector("header");
const links = document.querySelectorAll(".menu-nav ul li a");
const sections = document.querySelectorAll("main > section");

atualizarMenu();

window.addEventListener("scroll", () => {
  diminuirMenu();

  var scrollPosition =
    (document.documentElement.scrollTop || document.body.scrollTop) + 50;
  let sectionAtual = sections[0];

  for (const section of sections) {
    if (section.offsetTop >= scrollPosition) {
      break;
    }
    sectionAtual = section;
  }

  links.forEach((link) => {
    link.classList.remove("active");
  });

  const itemMenu = document.querySelector(
    '.menu-nav ul li a[href*="#' + sectionAtual.id + '"]'
  );
  itemMenu.classList.add("active");
});

function diminuirMenu() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add("reduzido");
  } else {
    header.classList.remove("reduzido");
  }
}

function atualizarMenu() {
  links.forEach((link) => {
    if (link.hash === window.location.hash) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

window.addEventListener("hashchange", (event) => {
  atualizarMenu();
});
