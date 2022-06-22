const element = document.querySelector('select');

const choices = new Choices(element, {
    searchEnabled : false,
    itemSelectText: "",
})

let myButtons = document.querySelectorAll('.play_btn');
myButtons.forEach(function(btn) {

    btn.addEventListener('click', () => {
        btn.classList.toggle('play_btn--toggle')
    });

});

let actionButtons = document.querySelectorAll('.section-podcast__card-play-button');
actionButtons.forEach(function(btn) {

    btn.addEventListener('click', () => {
        btn.classList.toggle('play_btn--toggle')
    });

});

document.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById('search-form-send').addEventListener('click', (e) => {
        document.getElementById('search-form-input').classList.toggle('search-form__input-show')
    })

    document.getElementById('search-form').addEventListener('submit', (e) => {
        e.preventDefault()
    })

    document.querySelector('.accordion-head').addEventListener('click', () => {
        document.querySelector('.accordion-head').classList.toggle('accordion-open')
    })
    
});
