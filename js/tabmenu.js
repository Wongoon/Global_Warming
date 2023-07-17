let lists = document.querySelectorAll('.tablink');
let contents = document.querySelectorAll('.content');

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