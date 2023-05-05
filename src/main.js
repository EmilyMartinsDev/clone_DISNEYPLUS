document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]')
    const hero = document.querySelector('.hero');
    const heightHero = hero.clientHeight; // para capturar altura do elemento

    window.addEventListener('scroll', ()=>{
        const position = window.scrollY ;
        if(position < heightHero){
            hiddenElementHeader();
        }else{
            showElementHeader();
        }
       
    });

    for(let i = 0 ; i < buttons.length; i++){

        buttons[i].addEventListener('click', function(button){

                const abaAlvo = button.target.dataset.tabButton;
                const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
                escondeAbas();
                aba.classList.add('shows__list--is-active');

                escondeButton();
                    button.target.classList.add('shows__tabs__button--is-active');
                
        }); 

    }
    for(let i = 0 ; i < questions.length; i++){
        questions[i].addEventListener('click', openAndclose)
    }


    function escondeButton(){

            for(let i = 0; i< buttons.length; i++){
                buttons[i].classList.remove("shows__tabs__button--is-active");
            }
        }

});

function escondeAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0 ; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}

function  openAndclose(element){
    const classe ='faq__questions__items--is-open';
    const fatherElement =  element.target.parentNode;
    fatherElement.classList.toggle(classe)
}

function hiddenElementHeader(){
    const header = document.querySelector('.header');
    header.classList.add("header--is-hidden");
}
function showElementHeader(){
    const header = document.querySelector('.header');
    header.classList.remove("header--is-hidden");
}