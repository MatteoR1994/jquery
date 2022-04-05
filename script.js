$(document).ready(() => {
    //console.log('ciao');

    // $('#ciao').html('pluto'); // $('#ciao') = document.getElementById('ciao'). Si usa #, come per leggere gli id nel css.

    // $('p').html('pluto'); // Chiamata per tag, in questo caso il tag p.

    // $('.container p').html('pluto'); // Prendo i tag p dentro al tag con classe container.

    // $('p').on('click', function() {
    //     $('p').hide();
    // });

    $.getJSON("./assets/array.json", function (data) {
        $.each(data, function (key, val) {
            $("<p>", {
                "class": val,
                html: val
            }).appendTo(".container");

            $("." + val).on("mouseover", function () {
                $("." + val).css("color", "red");
            });
    
            $("." + val).on("mouseout", function () {
                $("." + val).css("color", "black");
            });

            $("." + val).on("click", function () {
                $("." + val).hide();
            });

        });
    });

});


// window.addEventListener('load', () => {
//     //console.log('ciao in javascript');

//     //document.getElementById('ciao').innerHTML = 'pippo';

//     //console.log('vanilla', document.getElementsByTagName('p'));

//     //[...document.getElementsByTagName('p')].forEach(e => e.innerHTML = 'paperino');

//     document.getElementById('ciao').className = 'ciao';

//     document.getElementById('ciao').classList.add('mondo');

// });