fetch('/pg')
    .then(resp => resp.json())
    .then(data => {

        document.querySelector('#data').innerHTML = JSON.stringify(data);
    });