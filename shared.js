console.log('Start');
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNobutton = document.querySelector('.modal__action--negative');
var selectallbuttons = document.querySelectorAll('.plan button');
var togglebutton = document.querySelector('.toggle-button');
var mobilenav = document.querySelector('.mobile-nav');



for(var i=0; i < selectallbuttons.length;i++) {
    selectallbuttons[i].addEventListener('click',function() {
     //modal.style.display ='block';
     //backdrop.style.display ='block';
     modal.classList.add("open");
     backdrop.classList.add("open");
    })
}

backdrop.addEventListener("click", function() {
    mobilenav.style.display = 'none';
    closeModal();
});

modalNobutton.addEventListener("click", closeModal);

function closeModal() {
    backdrop.style.display = "none";
    modal.style.display = "none";
}

/*console.dir(selectallbuttons);*/

/*console.dir(backdrop)*/

/*backdrop.style.display = 'block'*/

togglebutton.addEventListener('click', function() {
    mobilenav.style.display ='block';
    backdrop.style.display = 'block';
});
