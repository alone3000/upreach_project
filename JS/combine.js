

let path = window.location.pathname;
let route = path.split('/');
route = route[route.length - 1];
    // console.log(path.split('/'),typeof(path.split('/')));

async function add_section(comp) {
    // let section = document.createElement('div');
    // console.log(comp, typeof comp);
    // section.innerHTML += await comp;
    document.querySelector('#root').innerHTML += await comp;
}


// dynamic loading of html files in pages
let pages = [
                {
                    'layout.html':
                        [
                            'section1_header.html',
                            's2_hero.html',
                
                            'section12_footer.html'
                        ]
                },
                {
                    'about.html':
                    [
                        'section1_header.html',
                        's11_brand.html',
                        's3_para.html',
                        'section12_footer.html'
                    ]
                }
            ];


async function render_page(component){
    try{
        let fetchPromise = await fetch("../HTML/".concat(component));
        let data = await fetchPromise.text();
        // console.log("Fetched data:", data);
        add_section(data);
    } catch (error) {
        console.log("Error:", error);
    }
}


for (let i = 0; i < pages.length; i++) {
    let key = Object.keys(pages[i]);
    if (key[0] === route) {
        for (let j = 0; j < pages[i][key[0]].length; j++) {
            // console.table(pages[i][key[0]].length, typeof pages[i][key[0]], route, typeof route);
            render_page(pages[i][key[0]][j]);
            // console.log(pages[i][key[0]][j]);
        }
    }
}



import { togglemenu } from '../JS/s1_header.js';
// scope issue when direct call in HTML because of `module type`
togglemenu();


import {preloadScript} from './preloading.js';

// // console.log(preloadScript)
preloadScript();



// .js 
// .cjs 
// .mjs 
// .jsx 
// .ts 
// .tsx


