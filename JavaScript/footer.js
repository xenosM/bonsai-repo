document.addEventListener('DOMContentLoaded',()=>{
    for(let i=1;i<=7;i++){
        let arrowItem= document.getElementById(`arrow-${i}`);
        let contentItem=document.getElementById(`content-${i}`);
        arrowItem.onclick = ()=>{
            contentItem.classList.toggle('show')
        }
    }
    
})