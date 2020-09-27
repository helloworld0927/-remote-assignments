var btn = document.querySelector('.button')
btn.addEventListener('click', () => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            if (!isNaN(JSON.parse(xhr.responseText).sum)) {
                document.querySelector('.ajax').innerHTML = `<h3>The answer is &colon; ${JSON.parse(xhr.responseText).sum}</h3>`;
            } else {
                document.querySelector('.ajax').innerHTML = `<h3>${JSON.parse(xhr.responseText).sum}</h3>`;
            }
        }
    };
    var number = document.querySelector('input').value;
    xhr.open('GET', `/getData?number=${number}`);
    xhr.send();
});
