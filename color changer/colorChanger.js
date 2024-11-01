const button = document.querySelectorAll('.button');
const body =document.body;
button.forEach(function(button){
    button.addEventListener('click',function(e){
    const color =e.target.id;
    switch(color){
        case 'grey':
            body.style.backgroundColor = color;
            break;
        case 'white':
            body.style.backgroundColor = color;
            break;
        case 'blue':
           body.style.backgroundColor = color;
           break;
        case 'yellow':
           body.style.backgroundColor = color;
           break;
    }
})
})