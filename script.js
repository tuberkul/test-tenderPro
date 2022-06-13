function closeMenu () {
    document.querySelector('body').style.background = `#1A2749`;
    $('.container-header').animate({width: `100%`});
    $('header p').animate({opacity: 0}, 1000);
    document.querySelector('.container-header').style.width = `${100}%`;
    document.querySelector('.header-icons').style.alignItems = `center`;

    document.querySelectorAll('.header-icons p').forEach (e => {
        e.style.display = `none`;
    })
    document.querySelector('.logo p').style.display = `none`;

    document.querySelectorAll('.header-icons div').forEach (e => {
        e.style.width = `72px`;
        e.style.justifyContent = 'center';
        e.style.paddingLeft = '';
    })
    document.querySelector('.container-header').style.alignItems = `normal`;
    document.querySelector('.container-header').style.paddingLeft = `0`
    document.querySelector('.header-opener').style.display = 'flex'
    document.querySelector('.header-closer').style.display = 'none'
    document.querySelector('body').classList.remove('opened-header')
    $('header').css("z-index", "1")
}

function closeModal() {
    document.querySelector('body').classList.remove('opened-header');
    document.querySelector('.modal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.header-opener').addEventListener('click', e => {
        
        $('.container-header').animate({width:373});
        $('header p').animate({opacity: 1}, 1000);
        // document.querySelector('.container-header').style.width = `calc(100% + 305px)`;
        document.querySelector('.container-header').style.alignItems = `flex-start`;
        document.querySelector('.header-icons').style.alignItems = `normal`;
        $('header').css("z-index", "10");
        document.querySelectorAll('.header-icons p').forEach (e => { 
            e.style.display = `inline-block`;
        })
        document.querySelectorAll('.header-icons div').forEach (e => {
            e.style.width = `289px`;
            e.style.justifyContent = 'flex-start';
            e.style.paddingLeft = '10px';
        })
        document.querySelector('.logo p').style.display = `inline-block`;

        document.querySelector('.container-header').style.paddingLeft = `${20}px`;
        document.querySelector('.header-opener').style.display = 'none';
        document.querySelector('.header-closer').style.display = 'flex';
        document.querySelector('body').classList.add('opened-header');
    });
    document.querySelector('.header-closer').addEventListener('click', closeMenu);

    document.querySelector('.logIn').addEventListener('click', () => {
        closeMenu();
        document.querySelector('body').classList.add('opened-header');
        document.querySelector('.modal').style.display = 'flex';
    });

    document.querySelector('#cancel').addEventListener('click', closeModal);
    document.querySelector('#signIn').addEventListener('click', () => {
        closeModal();
        let userName = document.querySelector('.modal input').value;
        document.querySelector('.modal input').value = '';
        document.querySelector('.logIn p').innerHTML = `${userName}`;
    });

});

window.onload = function () {
    $.getJSON("https://www.cbr-xml-daily.ru/daily_json.js", function(data) { // Получаем курс валют
        let s1 = data.Valute.USD.Value; // Получаем Доллар
        let c = {'USD':s1, 'RUB':'1'}; // Устанавливаем курс валют
        $('.logo p').text(`${s1}$ = ${1}₽`);
    });

}


