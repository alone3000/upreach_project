

function add_section(...args) {
    let section = document.createElement('div');
    // console.log(args, typeof args);
    for(i=0;i<args.length;i++){
    // args.forEach(arg => {
        section.innerHTML += args[i];
        console.log(args[i]);
    }
    document.querySelector('#root').append(section);
}


// dynamic loading of html files in pages
let pages = [
                [
                    'p1',
                        [
                            'section1_header.html',
                            's2_hero.html',
                            's3.html',
                            's4.html',
                            's5.html',
                            's6.html',
                            's7.html',
                            's8.html',
                            's9.html',
                            's10.html',
                            's11.html',
                            'section12_footer.html'
                        ]
                ],
                [
                    'p2',
                    [
                        'section1_header.html',
                        's2_hero.html',
                        's3.html',
                        's4.html',
                        's5.html',
                        's6.html',
                        's7.html',
                        's8.html',
                        's9.html',
                        's10.html',
                        's11.html',
                        'section12_footer.html'
                    ]
                ],
                [
                    'p3',
                    [
                        'section1_header.html',
                        's2_hero.html',
                        's3.html',
                        's4.html',
                        's5.html',
                        's6.html',
                        's7.html',
                        's8.html',
                        's9.html',
                        's10.html',
                        's11.html',
                        'section12_footer.html'
                    ]
                ],
                [
                    'p4',
                    [
                        'section1_header.html',
                        's2_hero.html',
                        's3.html',
                        's4.html',
                        's5.html',
                        's6.html',
                        's7.html',
                        's8.html',
                        's9.html',
                        's10.html',
                        's11.html',
                        'section12_footer.html'
                    ]
                ],
                [
                    'p5',
                    [
                        'section1_header.html',
                        's2_hero.html',
                        's3.html',
                        's4.html',
                        's5.html',
                        's6.html',
                        's7.html',
                        's8.html',
                        's9.html',
                        's10.html',
                        's11.html',
                        'section12_footer.html'
                    ]
                ],
                [
                    'p6',
                    [
                        'section1_header.html',
                        's2_hero.html',
                        's3.html',
                        's4.html',
                        's5.html',
                        's6.html',
                        's7.html',
                        's8.html',
                        's9.html',
                        's10.html',
                        's11.html',
                        'section12_footer.html'
                    ]
                ]
            ];


let i;
for(i=0;i<pages[0][1].length;i++){
fetch("../HTML/".concat(pages[0][1][i]))
.then(response => response.text())
.then(data => {
    //   document.getElementById("section").innerHTML = data;
      add_section(data);
    })
    .catch(error => console.log("Error:", error));
}



import { togglemenu } from '../JS/s1_header.js';
// scope issue when direct call in HTML because of `module type`
togglemenu();