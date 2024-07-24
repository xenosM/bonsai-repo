document.addEventListener('DOMContentLoaded',()=>{
    const workflow= document.querySelector('.header__dropdown-workflow');
    const rightSide= document.querySelector('.header__dropdown-right');
    // const leftSide= document.querySelector('.header__dropdown-left');
    const dropdownContent= document.querySelector('.header__dropdown-content');
    workflow.addEventListener('mouseover',()=>{
        rightSide.style.display = 'block';
        rightsdie
        rightSide.style.transition = 'all 1s';

    })
    dropdownContent.addEventListener('mouseleave',()=>{
        rightSide.style.display = 'none';
    })
 
    })