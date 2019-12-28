var menu = document.getElementById('menu');
        var nav = document.getElementById('nav');
        var exit = document.getElementById('exit');
        var terms = document.getElementById('terms');

        terms.addEventListener('click',function(e){
            alert('Hamare apne terms chalte hain idhar. Policy gayi tel lene.');
        });
        menu.addEventListener('click',function(e){
            nav.classList.toggle('hide-mobile');
            e.preventDefault();
        });
        exit.addEventListener('click',function(e){
            nav.classList.add('hide-mobile');
            e.preventDefault();
        });
