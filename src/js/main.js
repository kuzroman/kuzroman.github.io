console.log('boom 1!');

document.addEventListener('DOMContentLoaded', function(){

    let openPopup = document.getElementById('openPopup');
    let bigPopup = document.getElementById('bigPopup');
    let closePopup = document.getElementById('closePopup');
    let search = document.getElementById('search');

    openPopup.addEventListener('click', function () {
        bigPopup.classList.add('show');
        search.classList.add('hide');
    });
    closePopup.addEventListener('click', function () {
        bigPopup.classList.remove('show');
        search.classList.remove('hide');
    });

});

