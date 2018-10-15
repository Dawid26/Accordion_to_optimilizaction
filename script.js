
    
/*
    {
    const clasesAccordion = document.querySelectorAll('.gs-faq__question');
    for(let = i; i<clasesAccordion.length; i++){
document.querySelectorAll("[id^="tab"]").addEventListener("click", function(event) {
}

    clasesAccordion.forEach((item) => item.addEventListener
             ("click", event))
        if(clasesAccordion[i].style.display == 'block'){
            continue;
        }else{
document.clasesAccordion[i].style.display = 'none';
        }


}           
event.preventDefault();
}, false);
    }
*/
    

   




    let accordionEl   = document.querySelectorAll('[id*="tab"]');
for(let i=0; i<accordionEl.length;i++){
accordionEl[i].addEventListener("click", function(event) {


        for(let i =0; i<accordionEl.lengt; i++){
                if(document.getElementsByClassName('gs-faq__answer')[i].style.display == 'block'){
                    continue;
                }else{
        document.getElementsByClassName('gs-faq__answer')[i].style.display = 'none';
                }
    
        }
}     
  





