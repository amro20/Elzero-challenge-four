// To Active Setting Box:-

let gerIcon = document.querySelector(".fa-cog");
let iconContainer = document.querySelector(".icon_container");
let box = document.querySelector(".setting_box");

iconContainer.addEventListener("click", () => {
  box.classList.toggle("active");
  gerIcon.classList.toggle("fa-spin");
});

// To set Setting Box Color:-
let liColor = document.querySelectorAll(".color_list li");
let mainColors = localStorage.getItem("option_box");

if (mainColors !== null) {
  document.documentElement.style.setProperty("--main-color", mainColors);

  document.querySelectorAll(".color_list li").forEach((element) => {
    element.classList.remove("active");
    if (element.dataset.color === mainColors) {
      element.classList.add("active");
    }
  });
}

liColor.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    localStorage.setItem("option_box", e.target.dataset.color);

    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    e.target.classList.add("active");
  });
});

//  To Change Background Auto:-

let landing = document.querySelector(".landing_page");

let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

function randomizeBackdround() {

  backgroundInterval = setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    landing.style.backgroundImage =
      'url("imgs/' + imgsArray[randomNumber] + '")';
  }, 7000);
}

randomizeBackdround();

//  To Stop Change Background Auto:-

let stopChAuto = document.querySelectorAll(".option_box span");

stopChAuto.forEach((span) => {
  span.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    e.target.classList.add("active");

    if (e.target.dataset.background === "Yes") {
      randomizeBackdround();

    } else {

      clearInterval(backgroundInterval);

    }
  });
});

//  To Custmize Responsive Header:-

let toggleMenu = document.querySelector(".toggle_menu");

let links = document.querySelector(".links");

toggleMenu.addEventListener("click", () => {

  toggleMenu.classList.toggle("active");

  links.classList.toggle("open");

});

//  To Anamete Skills Section:-

let skills = document.querySelector(".our_skills");

let scrollTop = document.querySelector(".to_top");

window.onscroll = function () {

  let skillsOffsetTop = skills.offsetTop;

  let skillsOuterHeight = skills.offsetHeight;

  let WindowHeight = this.innerHeight;

  let WindowScroll = this.pageYOffset;

  if (WindowScroll > (skillsOffsetTop + skillsOuterHeight - WindowHeight)) {

    let allSkills = document.querySelectorAll(".box .progress span");

    allSkills.forEach(span => {

      span.style.width = span.dataset.progress;

    })

  }

  // To Custmize Scroll Top Button:-

  if (window.scrollY >= 800) {

    scrollTop.classList.add("active");

  } else {

    scrollTop.classList.remove("active");

  }
}

//  To Make Images Clickable:-

let ourGallery = document.querySelectorAll(".gallery .container img");

ourGallery.forEach((img) => {

  img.addEventListener('click', (e) => {

    let overly = document.createElement('div');

    overly.className = 'popup_overly';

    document.body.appendChild(overly);

    let popupBox = document.createElement('div');

    popupBox.className = 'popup_box';

    document.body.appendChild(popupBox);

    let popupImg = document.createElement("img");

    popupImg.className = "poppup_img"

    popupImg.src = img.src;

    popupBox.appendChild(popupImg);

    let closeImg = document.createElement('span');

    closeImg.className = "close_imge";

    let closeImgText = document.createTextNode('X');

    closeImg.appendChild(closeImgText);

    popupBox.appendChild(closeImg);

    closeImg.addEventListener('click', () => {

      document.querySelector('.popup_overly').remove();

      document.querySelector('.popup_box').remove();

    })
  })
})
