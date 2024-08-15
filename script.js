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
