console.log('boom 1!');

document.addEventListener('DOMContentLoaded', function(){

    let openPopup = document.getElementById('openPopup');
    let bigPopup = document.getElementById('bigPopup');
    let closePopup = document.getElementById('closePopup');

    openPopup.addEventListener('click', function () {
        bigPopup.classList.add('show');
    });
    closePopup.addEventListener('click', function () {
        bigPopup.classList.remove('show');
    });

});

