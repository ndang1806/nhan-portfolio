const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

 //Button click active class
function PageTransitions(){
        for (let i =0; i < sectBtn.length; i++){
            sectBtn[i].addEventListener('click', function(){
                let currentBtn = document.querySelectorAll('.active-btn');
                currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
                this.className += ' active-btn';
            })
        }
        //Section Active 
        allSections.addEventListener('click', (e) =>{
            const id = e.target.dataset.id;
            if(id){
                //REMOVE SELECTED FROM THE OTHER btns
                sectBtns.forEach((btn) =>{
                    btn.classList.remove('active');
                })

                e.target.classList.add('active');
                //hide other sections
                sections.forEach((section)=>{
                    section.classList.remove('active');
                })

                const element = document.getElementById(id);
                element.classList.add('active');
            }
        })  
        //TOGGLE THEME
        const themeBtn = document.querySelector('.theme-btn');
        themeBtn.addEventListener('click',()=>{
            let element = document.body;
            element.classList.toggle('light-mode');
        })
}

// function sendEmail(e){
//     e.preventDefault();
// const form = document.querySelector('.contact-form');
// const name = document.querySelector('.name');
// const email = document.querySelector('.email');
// const msg = document.querySelector('.input-control');
       
   
//  }

PageTransitions();