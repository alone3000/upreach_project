function add_section(...args) {
    let section = document.createElement('div');
    console.log(args, typeof args);
    for(i=0;i<args.length;i++){
    // args.forEach(arg => {
        section.innerHTML += args[i];
        console.log(args[i]);
    }
    document.querySelector('#root').append(section);
}
// dynamic loading of html files in pages
pages = [['p1',['section1_header.html','hello.html']]];

for(i=0;i<pages[0][1].length;i++){
fetch("../HTML/".concat(pages[0][1][i]))
    .then(response => response.text())
    .then(data => {
    //   document.getElementById("section").innerHTML = data;
      add_section(data);
    })
    .catch(error => console.log("Error:", error));
}

// import hide from './s1_header.js';

// hide();