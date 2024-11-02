const clock=document.getElementById('clock')
setTimeout(function(){
    let date=new Date();
    clock.innerText=date.toLocaleTimeString();
},1000)