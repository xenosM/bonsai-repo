//click on  faq__element-header
//show faq__element-description

document.addEventListener('DOMContentLoaded',()=>{
    
    for(let i = 1; i<=4;i++){
        let headerItem= document.getElementById("header-"+i);
        let descriptionItem= document.getElementById(`description-${i}`);
        headerItem.onclick=()=>{
             descriptionItem.classList.toggle('show')
        }
    }

    //
})