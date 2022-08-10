let url = "http://localhost:5685"

axios.get(url + '/users')
.then(res => {
    if (res.status == 200 || res.status == 201) {
        reload(res.data)
    }
})

let users_box = document.querySelector('.users-box')

function reload(arr) {
    users_box.innerHTML = ""
    for (let item of arr) {
        users_box.innerHTML += `
        <div class="box">
            <p>${item.name}</p>
            <p>${item.company.name}</p>
            <a href="./user.html?id=${item.id}">
                <button class="more_btn">Подробнее</button>
            </a>
        </div>       
        `
        
    }
}



