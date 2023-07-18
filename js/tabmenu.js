let lists = document.querySelectorAll('.tablink');
let contents = document.querySelectorAll('.content');
let earth_links = document.querySelectorAll('.earth_link');
let earth_mains = document.querySelectorAll('.earth_main');
let temp_links = document.querySelectorAll('.temperature_link');
let temp_mains = document.querySelectorAll('.temperature_main');
let greenhouse_links = document.querySelectorAll('.greenhousegas_link');
let greenhouse_mains = document.querySelectorAll('.greenhousegas_main');

lists.forEach(list => {
    list.addEventListener('click', function(){
        let tab = list.getAttribute('data-tab');
        let content = document.getElementById(tab);

        lists.forEach(list => {
            list.classList.remove('current');
        });
        contents.forEach(content => {
            content.classList.remove('current');
        });

        list.classList.add('current');
        content.classList.add('current');
    });
});

earth_links.forEach(link => {
    link.addEventListener('click', function(){
        let tab = link.getAttribute('data-tab');
        let main = document.getElementById(tab);

        earth_links.forEach(link => {
            link.classList.remove('current');
        });
        earth_mains.forEach(main => {
            main.classList.remove('current');
        });

        link.classList.add('current');
        main.classList.add('current');
    });
});

greenhouse_links.forEach(link => {
    link.addEventListener('click', function(){
        let tab = link.getAttribute('data-tab');
        let main = document.getElementById(tab);

        greenhouse_links.forEach(link => {
            link.classList.remove('current');
        });
        greenhouse_mains.forEach(main => {
            main.classList.remove('current');
        });

        link.classList.add('current');
        main.classList.add('current');
    });
});

temp_links.forEach(link => {
    link.addEventListener('click', function(){
        let tab = link.getAttribute('data-tab');
        let main = document.getElementById(tab);

        temp_links.forEach(link => {
            link.classList.remove('current');
        });
        temp_mains.forEach(main => {
            main.classList.remove('current');
        });

        link.classList.add('current');
        main.classList.add('current');
    });
});