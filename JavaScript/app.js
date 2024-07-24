document.addEventListener('DOMContentLoaded',()=>{
    const workflow= document.querySelector('.header__dropdown-workflow');
    const rightSide= document.querySelector('.header__dropdown-right');
    const dropdownContent= document.querySelector('.header__dropdown-content');
    const leftsideElement= document.querySelector('.leftside__element');
    //hover on workflow element to show right side
    workflow.addEventListener('mouseover',()=>{
        rightSide.style.width='auto'
        rightSide.style.visibility = 'visible';
        rightSide.style.opacity= 1;

    })

    //hover out to hide right side
    dropdownContent.addEventListener('mouseleave',()=>{
        rightSide.style.width= 0;
        rightSide.style.visibility=' hidden';
        rightSide.style.opacity= 0;
    })
    leftsideElement.addEventListener('mouseover',()=>{
        rightSide.style.width= 0;
        rightSide.style.visibility=' hidden';
        rightSide.style.opacity= 0;
    })
})