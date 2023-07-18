let lists = document.querySelectorAll('.tablink');
let contents = document.querySelectorAll('.content');
let tablinks = document.querySelectorAll('.tablink_in');
let mains = document.querySelectorAll('.main');

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

tablinks.forEach(tablink => {
    tablink.addEventListener('click', function(){
        let tab = tablink.getAttribute('data-tab');
        let main = document.getElementById(tab);

        tablinks.forEach(tablink => {
            tablink.classList.remove('current');
        });
        mains.forEach(main => {
            main.classList.remove('current');
        });

        tablink.classList.add('current');
        main.classList.add('current');
    });
});