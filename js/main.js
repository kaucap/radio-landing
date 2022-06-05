const element = document.querySelector('.js-choice');

const choices = new Choices(element, {
    searchEnabled : false,
    itemSelectText: ""
})

// document.querySelector('.play_btn').addEventListener('click', function(e) {
//     e.target.closest('.play_btn').classList.toggle('play_btn--toggle');
//   })


let myButtons = document.querySelectorAll('.play_btn');
myButtons.forEach(function(btn) {

    btn.addEventListener('click', () => {
      myButtons.forEach(btn.classList.toggle('play_btn--toggle'))
    });

});

let actionButtons = document.querySelectorAll('.section-podcast__card-play-button');
actionButtons.forEach(function(btn) {

    btn.addEventListener('click', () => {
        actionButtons.forEach(btn.classList.toggle('play_btn--toggle'))
    });

});