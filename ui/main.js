console.log('Loaded!');
var element=document.getElementById('main_text');
element.innerHTML='let us go';

//move the image
var img=document.getElementById('madi');
img.onClick=function(){
    img.style.marginLeft='100px';
};