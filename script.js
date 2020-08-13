// Interfaz de responsive en escritorio
let about = document.getElementById("about");
let getAbout = document.getElementById("getAbout");
let resume = document.getElementById("resume");
let getResume = document.getElementById("getResume");
// Variables for section Works 
let works = document.getElementById("works");
let worksContent = document.getElementById("works-content");
let worksCategories = document.getElementById("worksCategories")
let getWorks = document.getElementById("getWorks");
let modal = document.getElementById("myModal"); // var?
let modalImg = document.getElementById("modalImg");
let modalTitle = document.getElementById("modalTitle");
let modalAnchor = document.getElementById("modalAnchor");
let span = document.getElementsByClassName("close")[0]; // var?
// --end section Works--
let contact = document.getElementById("contact");
let getContact = document.getElementById("getContact");

function remove() {
    about.classList.remove('view');
    getAbout.classList.remove('selected');
    resume.classList.remove('view');
    getResume.classList.remove('selected');
    works.classList.remove('view');
    getWorks.classList.remove('selected');
    contact.classList.remove('view');
    getContact.classList.remove('selected');
}

getAbout.addEventListener('click', function(e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove('about');
        about.classList.add('view');
        getAbout.classList.add('selected');
    }

});
getResume.addEventListener('click', function(e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        resume.classList.add('view');
        getResume.classList.add('selected');
    }
})
getWorks.addEventListener('click', function(e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        works.classList.add('view');
        getWorks.classList.add('selected');
    }
})
getContact.addEventListener('click', function(e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        contact.classList.add('view');
        getContact.classList.add('selected');
    }

})

// Menu de work

// worksCategories.addEventListener('click', function(e){

//     let worksContainers = document.getElementsByClassName('workTech');
    
//     for(let i = 0; i < worksContainers.length; i++) { 
      
  
//       if(worksCategories.children[i].innerHTML.toLowerCase() == e.target.innerHTML.toLowerCase())
//         worksCategories.children[i].classList.add('selected');
//       else 
//         worksCategories.children[i].classList.remove('selected');
      
      
//       if(e.target.innerHTML.toLowerCase()==='all')
//         worksContainers[i].classList.remove('hidden');
//       else
  
//         if(!worksContainers[i].classList.contains(e.target.innerHTML.toLowerCase()))
//           worksContainers[i].classList.add('hidden');
//          else
//           worksContainers[i].classList.remove('hidden');
//     }
   
//   })
  


// Modal

worksContent.addEventListener('click', function(event){
  var parent = getClosestParent(event.target, '.workTech');
  if(parent)
  {
    modalImg.src = parent.getElementsByTagName('img')[0].src;
    modalTitle.innerHTML = parent.getElementsByTagName('h4')[0].innerText
    modalAnchor.href =  parent.getAttribute('href');
    modal.style.top = works.scrollTop+'px';
    modal.style.display = "block";

  }
});

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function getClosestParent(elem, selector) {
  for ( ; elem && elem !== document; elem = elem.parentNode ) {
    if ( elem.matches( selector ) ) 
      return elem;
  }
  return null;
};


// Calcular edad para la bio
let hoy = new Date();
let fechaNacimiento = new Date(1994,3,23);
let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
if (
  diferenciaMeses < 0 ||
  (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
) {
  edad--
};
document.getElementById("age").innerHTML = edad;

