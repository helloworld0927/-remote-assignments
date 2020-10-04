function ajax(src, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var product = JSON.parse(xhr.responseText);
            callback(product);
        }
    };
    xhr.open("GET", src, true);
    xhr.send();
}

function render(data) {
    for (var i = 0; i < data.length; i++) {
        var ul = document.createElement('ul');
        document.body.appendChild(ul);
        for (var key in data[i]) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(data[i][key]));
            ul.appendChild(li);
        }
    }
}

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function (response) {
    render(response);
})