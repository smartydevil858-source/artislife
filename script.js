console.log("Artis Lifesciences script loaded successfully!");

// --- Hamburger Menu ---
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navLinks = document.getElementById('navLinks');
hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
});

// --- Navbar Scroll Shadow ---
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50){
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

const gynoImages = [
  'img/gyna.jpg',
  'img/gyno.jpg',
  'img/gynogenralortho.jpg',
  'img/gynoc.jpeg',
  'img/gynogenralorth.jpg'
];

let gynoSlideIndex = 0;

function openGynoGallery() {
  document.getElementById('gynoModal').style.display = 'block';
  showGynoSlide(gynoSlideIndex);
}

function closeGynoGallery() {
  document.getElementById('gynoModal').style.display = 'none';
}

function changeGynoSlide(n) {
  gynoSlideIndex += n;
  if (gynoSlideIndex >= gynoImages.length) gynoSlideIndex = 0;
  if (gynoSlideIndex < 0) gynoSlideIndex = gynoImages.length - 1;
  showGynoSlide(gynoSlideIndex);
}

function showGynoSlide(index) {
  document.getElementById('gynoMainImg').src = gynoImages[index];
}

document.addEventListener('keydown', function(e) {
  if (document.getElementById('gynoModal').style.display == 'block') {
    if (e.key === 'ArrowLeft') changeGynoSlide(-1);
    if (e.key === 'ArrowRight') changeGynoSlide(1);
    if (e.key === 'Escape') closeGynoGallery();
  }
});

window.onclick = function(event) {
  if (event.target == document.getElementById('gynoModal')) closeGynoGallery();
}
const orthoImages = [
  'img/gynogenralortho.jpg',
  'img/gynogenralorth.jpg',
  /*'ortho3.jpg',
  'ortho4.jpg',
  'ortho5.jpg'*/
];

let orthoSlideIndex = 0;

function openOrthoGallery() {
  document.getElementById('orthoModal').style.display = 'block';
  showOrthoSlide(orthoSlideIndex);
}

function closeOrthoGallery() {
  document.getElementById('orthoModal').style.display = 'none';
}

function changeOrthoSlide(n) {
  orthoSlideIndex += n;
  if (orthoSlideIndex >= orthoImages.length) orthoSlideIndex = 0;
  if (orthoSlideIndex < 0) orthoSlideIndex = orthoImages.length - 1;
  showOrthoSlide(orthoSlideIndex);
}

function showOrthoSlide(index) {
  document.getElementById('orthoMainImg').src = orthoImages[index];
}

document.addEventListener('keydown', function(e) {
  if (document.getElementById('orthoModal').style.display == 'block') {
    if (e.key === 'ArrowLeft') changeOrthoSlide(-1);
    if (e.key === 'ArrowRight') changeOrthoSlide(1);
    if (e.key === 'Escape') closeOrthoGallery();
  }
});

window.onclick = function(event) {
  if (event.target == document.getElementById('orthoModal')) closeOrthoGallery();
}
/*const patientImages = [
  'patient1.jpg',
  'patient2.jpg',
  'patient3.jpg',
  'patient4.jpg',
  'patient5.jpg'
];

let patientSlideIndex = 0;

function openPatientGallery() {
  document.getElementById('patientModal').style.display = 'block';
  showPatientSlide(patientSlideIndex);
}

function closePatientGallery() {
  document.getElementById('patientModal').style.display = 'none';
}

function changePatientSlide(n) {
  patientSlideIndex += n;
  if (patientSlideIndex >= patientImages.length) patientSlideIndex = 0;
  if (patientSlideIndex < 0) patientSlideIndex = patientImages.length - 1;
  showPatientSlide(patientSlideIndex);
}

function showPatientSlide(index) {
  document.getElementById('patientMainImg').src = patientImages[index];
}

document.addEventListener('keydown', function(e) {
  if (document.getElementById('patientModal').style.display == 'block') {
    if (e.key === 'ArrowLeft') changePatientSlide(-1);
    if (e.key === 'ArrowRight') changePatientSlide(1);
    if (e.key === 'Escape') closePatientGallery();
  }
});

window.onclick = function(event) {
  if (event.target == document.getElementById('patientModal')) closePatientGallery();
}
*/
const generalImages = [
 'img/general.jpg',
 'img/general-1.jpg',
 'img/gynogenrall.jpeg',
 'img/gynogenralorth.jpg',
 'img/gynogenralortho.jpg'
];

let generalSlideIndex = 0;

function openGeneralGallery() {
  document.getElementById("generalModal").style.display = "block";
  showGeneralSlide(generalSlideIndex);
}

function closeGeneralGallery() {
  document.getElementById("generalModal").style.display = "none";
}

function changeGeneralSlide(n) {
  generalSlideIndex += n;

  if (generalSlideIndex >= generalImages.length) {
    generalSlideIndex = 0;
  }

  if (generalSlideIndex < 0) {
    generalSlideIndex = generalImages.length - 1;
  }

  showGeneralSlide(generalSlideIndex);
}

function showGeneralSlide(index) {
  document.getElementById("generalMainImg").src = generalImages[index];
}

document.addEventListener("keydown", function(e) {

  if (document.getElementById("generalModal").style.display == "block") {

    if (e.key === "ArrowLeft") changeGeneralSlide(-1);
    if (e.key === "ArrowRight") changeGeneralSlide(1);
    if (e.key === "Escape") closeGeneralGallery();

  }

});
