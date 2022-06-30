const element = document.querySelector('select');

const choices = new Choices(element, {
    searchEnabled : false,
    itemSelectText: "",
})

$( function() {
    $( "#accordion" ).accordion({
      active: true,
      collapsible: true,
      heightStyle: 'content'
    });
});

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

// section-guests__info

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.accordion-body__item-button').forEach(function(accBtn) {
      accBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path
        document.querySelectorAll('.section-guests__main-right-info').forEach(function(guestInfo) {
            guestInfo.classList.remove('guest-info-active')
        })
        if (path) {
            document.querySelector('.section-guests__main-right-info').classList.add('guest-info-active')
        } else {
            document.querySelector('.section-guests__main-right-img').src = 'img/anonymous.png'
        }
        
        
        let necessaryGuestInfo = document.querySelector(`[data-div="${path}"]`)
        let currentGuestName = document.querySelector('.section-guests__main-right-name')
        let currentGuestInfo = document.querySelector('.section-guests__main-right-text')
        let currentGuestImg = document.querySelector('.section-guests__main-right-img')
        
        currentGuestName.textContent = necessaryGuestInfo.querySelector('h3').textContent
        currentGuestInfo.textContent = necessaryGuestInfo.querySelector('p').textContent
        currentGuestImg.src = necessaryGuestInfo.querySelector('img').src
      })
    })
  })

  $(document).ready(function() {
    $('.accordion-body__item-button').on('click', acc_func);
  });
  function acc_func(){
    $('.accordion-body__item-button').removeClass('accordion-body__item-button-active')
    $(this).addClass('accordion-body__item-button-active')
  }

$(".section-playlist__card-link").focus(function(){
    $(this).parent().css('background-color', '#AA9DFA')
}
);

$(".section-playlist__card-link").focusout(function(){
    $(this).parent().css('background-color', 'transparent')
}
);

$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
    });
});
