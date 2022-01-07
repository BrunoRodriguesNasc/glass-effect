const home = document.querySelector('.home');
const newB = document.querySelector('.new');
const about = document.querySelector('.about');
const old = document.querySelector('.old');

const globalClass = ['home', 'new', 'about', 'old'];

const verifyActive = (event) => {
   remove(event.target.className);
}

const remove = (name) => {
    globalClass.forEach(className => {
        if(className !== name){
            document.querySelector(`.${className}`).classList.remove('active');
        }else{
            document.querySelector(`.${name}`).classList.add('active');
        }
    })
  

};

home.addEventListener('click', verifyActive);
newB.addEventListener('click', verifyActive);
about.addEventListener('click', verifyActive);
old.addEventListener('click', verifyActive);