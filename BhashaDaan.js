var button = document.querySelector('.nav-pills li a:nth-child(1)');
console.log(button);

var heading = document.querySelector('.tabsec_left_content h4');
var para = document.querySelector('.tabsec_left_content p');
console.log(heading ,para);

function changeContent (title){
    heading.innerHTML = `<h4>${title}</h4>`
}