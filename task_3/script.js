//manipulasi Text
function addElement() {
    document.getElementById('Text-baru').innerHTML = "ini adalah text yang berasal dari implementasi dom";
}
//manipulasi element
function appendElement() {
    const tag = document.createElement('p');
    const textNode = document.createTextNode("ini adalah text dari element baru yang ditambahkan");
    tag.appendChild(textNode)
    document.getElementById('elemen-baru').appendChild(tag);
}
//fungtion event handler
function theme() {
    const main = document.getElementById('main-container');
    const container1 = document.getElementById('container-1')
    const container2 = document.getElementById('container-2')
    const container3 = document.getElementById('container-3')
    const btnContainer1 = document.getElementById('btn-container-1')
    const btnContainer2 = document.getElementById('btn-container-2')
    
    main.classList.toggle("black-theme");
    btnContainer1.classList.toggle("btn-black");
    btnContainer2.classList.toggle("btn-black");
    container1.classList.toggle("black-container");
    container2.classList.toggle("black-container");
    container3.classList.toggle("black-container");
}