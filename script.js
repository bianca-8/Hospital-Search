function filter() {
    var input, filter, items, value;

    input = document.getElementById('search');
    filter = input.value.toLowerCase();
    items = document.getElementsByClassName('item');

    for (i = 0; i < items.length; i++) {
        value = items[i].textContent || items[i].innerText;
        
        if (value.toLowerCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } 
        else {
            items[i].style.display = "none";
        }
    }
}

function filterTitle() {
    var input, filter, items, titles, value;

    input = document.getElementById('search');
    filter = input.value.toLowerCase().trim();
    items = document.getElementsByClassName('item');
    titles = document.getElementsByClassName('title');

    for (var i = 0; i < titles.length; i++) {
        value = titles[i].textContent || titles[i].innerText;
        value = value.toLowerCase().trim();
        
        if (filter === "" || value.startsWith(filter)) {
            items[i].style.display = "";
        } 
        else {
            items[i].style.display = "none";
        }
    }
}

var checkbox = false;
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('filterTitle').addEventListener("change", () => {
        if ( checkbox.checked ) {
            checkbox = false;
        } else {
            checkbox = true;
        }
    });
});

function newFilter() {
    if (!checkbox) {
        filter()
    }
    else {
        filterTitle()
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
