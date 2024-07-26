document.addEventListener('DOMContentLoaded',()=>{

    const elementItems=[
        {
            'title':'Featured Contract Templates',
            element1:'Free Contract Maker',
            element2:'Social Media  Template',
            element3:'Graphic Design Contract Template',
            element4:'Digital Marketing Contract Template'
        },
        {
            'title':'Featured Proposal Templates',        
            element1:'Graphic Design Proposal Template',
            element2:'Business Proposal Template',
            element3:'Brand Ambassador Template',
            element4:'Data Entry Proposal Template'
        },
        {
            'title':'Featured Invoice Templates',
            element1:'Social Media Invoice Templates',
            element2:'Contractor Invoice Template',
            element3:'Web Design Invoice Template',
            element4:'Influencer Invoice Template'
        },
        {
            'title':'Featured Agreement Templates',
            element1:'Influencer Agreement Template',
            element2:'Influencer Colaboration Agreement Template',
            element3:'Monthly Retainer Agreement Template',
            element4:'Writer Agreement Template'
        },
        {
            'title':'Featured Quote Templates',
            element1:'Web Design Quotation Template',
            element2:'Interior Design Quotation Template',
            element3:'Digital Marketing Quotation Template',
            element4:'Video Production Quotaion Template'
        },
        {
            'title':'Featured Scope of work Templates',
            element1:'Web Development Scope of Work Template',
            element2:'Digital Marketing Scope of Work Template',
            element3:'Consultant Scope of Work Template',
            element4:'Interior Designing Scope of work Template'
        },
        {
            'title':'Featured Brief Templates',
            element1:'Design Brief Template',
            element2:'Architechture Design ',
            element3:'Fashion Design ',
            element4:'Creative Brief Template'
        },
        
    ]
    const title= document.querySelector('.dropdown__rightside-title');

    //function to show the content
    function showContent(template){
        title.textContent= elementItems[template].title;
         
        for(let i=1;i<=4;i++){
            let elementId='element-'+i;
            let itemId='element'+i;
            document.getElementById(elementId).textContent= elementItems[template][itemId];
         }
    }

    //Default Display
    showContent(0);

    //Display on hover
    for (let i=1;i<=7;i++){
        let templateId = 'template-'+i;
        document.getElementById(templateId).onmouseover=()=>{
            showContent(i-1);
        }
    }
    //display off hover
    document.querySelector('#template-content').onmouseleave = ()=>{
        showContent(0);
    }

})
