
let path = window.location.pathname;
let route = path.split('/');
route = route[route.length - 1];
    // console.log(path.split('/'),typeof(path.split('/')));

function add_section(comp,page,...args) {
    let section = document.createElement('div');
    // console.log(args, typeof args);
    section.innerHTML += comp;
    document.querySelector('#root').append(section);
}


// dynamic loading of html files in pages
let pages = [
                {
                    'layout.html':
                        [
                            'section1_header.html',
                            's2_hero.html',
                            's11.html',
                            'section12_footer.html'
                        ]
                },
                {
                    'about.html':
                    [
                        'section1_header.html',
                        
                        'section12_footer.html'
                    ]
                }
            ];


// let i,j,k;
// for(i=0;i<pages.length;i++){
// for(j=0;j<pages[i].length;j++){
// for(k=0;k<pages[0]['layout.html'].length;k++){

//     console.log(route);
// if(route == pages[i][0]){
function render_page(component){
fetch("../HTML/".concat(component))
// fetch("../HTML/".concat(pages['layout.html'][k]))
.then(x => x.text())
.then(data => {
    //   document.getElementById("section").innerHTML = data;
      add_section(data);
    })
    .catch(error => console.log("Error:", error));
}
// }
// }
// }
// }




pages.forEach((page)=>{
    let key = Object.keys(page);
    if(key[0] == route){
        for(let i=0;i<page[key[0]].length;i++){
            console.table(page[key[0]].length,typeof page[key[0]],route,typeof route);
            render_page(page[key[0]][i]);
            console.log(page[key[0]][i]);
        }
    }
})



import { togglemenu } from '../JS/s1_header.js';
// scope issue when direct call in HTML because of `module type`
togglemenu();


// .js 
// .cjs 
// .mjs 
// .jsx 
// .ts 
// .tsx
