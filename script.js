fetch ("https://thronesapi.com/api/v2/Characters")
.then(response => response.json())
.then(data => {
    // console.log(data)
    data.forEach(e => {
        console.log(e)
        const linha = `
            <tr>
                <td>${e.}</td>
                <td>${e.}</td>
                <td>${e.}</td>
                <td>${e.}</td>
            </tr>
        `
        document.querySelector('tbody').insertAdjacentHTML('beforeend', linha)
    });
})
.catch(err => console.error('error:' + err))