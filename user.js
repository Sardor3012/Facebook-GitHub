let url = "http://localhost:5685/users"
let splited  = window.location.href.split('=')
splited = splited.at(-1)

axios.get(url)
  .then((res) => {
    if (res.status == 200 || res.status == 201) {
            let finded = res.data.filter(item => item.id === +splited)
            reload(finded)
        }
  })
  .catch((error) => {
    console.log(error);
  });

let users_box = document.querySelector('.users_box')

function reload(arr) {
    users_box.innerHTML = ""
    arr.forEach(item => {
        users_box.innerHTML += `
        <div class="box">
        { <br>
            "id": ${item.id}, <br>
            "name": ${item.name},<br>
            "username": ${item.username},<br>
            "email": ${item.email},<br>
            "address": { <br>
              "street": ${item.street},<br>
              "suite": ${item.suite},<br>
              "city": ${item.city},<br>
              "zipcode": ${item.zipcode},<br>
              "geo": {
                "lat": ${item.lat},<br>
            "phone": ${item.phone},<br>
            "website": ${item.website},<br>
            "company": {<br>
              "name": ${item.company.name},<br>
              "catchPhrase": ${item.company.catchPhrase},<br>
              "bs": "${item.bs}"<br>
            }
        </div>       
        `
    });
}

