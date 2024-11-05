document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.id)
    if(e.target.tagName=='IMG'){
        let removeIt=e.target.parentNode
        removeIt.remove()
    }
},false)