var baricon = document.querySelector('i');
var spantag = document.querySelector('span');
var body = document.querySelector('body');
var h1 = document.querySelector('h1');

spantag.style.visibility = 'hidden';

baricon.addEventListener('click', function(){
    if (baricon.className != 'fas fa-bars'){
        baricon.className = 'fas fa-bars';
        spantag.style.visibility = 'hidden';
        body.style.background = 'rgb(229, 253, 184)';
        h1.style.visibility = 'visible';
    } else if (baricon.className != 'fas fa-times'){
        baricon.className = 'fas fa-times';
        spantag.style.visibility = 'visible';
        body.style.backgroundColor = 'lightgrey';
        h1.style.visibility = 'hidden';
 }
});



baricon.addEventListener('mouseover', function(){
baricon.style.color = 'red';
});

baricon.addEventListener('mouseout', function(){
    baricon.style.color = 'blue';
});

