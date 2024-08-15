function filter() {
    var input, filter, items, value;

    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    items = document.getElementsByClassName('item');

    for (i = 0; i < items.length; i++) {
        value = items[i].textContent || items[i].innerText;
        
        if (value.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } 
        else {
            items[i].style.display = "none";
        }
    }
}

function mapAppear() {
    var map = document.querySelector('.map')
    var popup = document.createElement('div');
    var close = document.createElement('span');

    popup.className = 'popup';
    popup.innerHTML ='<div class="popup-content"><img src="map.png" width=650vw><img src="map2.png" width=650px></div>';
    close.className = 'close';
    close.innerHTML = '&times;';

    popup.appendChild(close);
    map.appendChild(popup);

    close.addEventListener('click', function() {
        popup.parentNode.removeChild(popup)
    });
}
