 function togglemenu(){
// fix `module type` scope issue by adding event listener here
   document.addEventListener('click', function (e) {
    // console.log(e.target.parentElement.classList);
    if (e.target.parentElement.classList.contains('menu')) {
        let link = document.querySelector('.navLinks');
        link.classList.toggle('navLinks_active');
        e.target.classList.toggle('fa-bars');
        e.target.classList.toggle('fa-xmark');
    }
});

  }

// let data = prompt("enter data");
export  {togglemenu};

