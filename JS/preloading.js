export let preloadScript =  () => {
   
const preloader = document.querySelector(".preloader");
console.log("Before:", preloader.className);
 document.addEventListener("DOMContentLoaded",
    // window.addEventListener('load',
         function () {
             preloader.classList.add('hide');
         

 
});
};
