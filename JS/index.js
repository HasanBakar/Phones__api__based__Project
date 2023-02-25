const loaders = async(searchText) =>{
const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
const res = await fetch(url);
const data = await res.json();
displayPhone(data.data)
}


const displayPhone = (phones) =>{
    const container = document.getElementById('container');
    container.innerText = " ";
    phones.forEach(phone => {
        
    const div = document.createElement("div");
    // console.log(phone)
    div.classList.add('col');
    div.innerHTML = `
                    <div class="card p-2">
                        <img src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h1 class="card-title">${phone.phone_name}</h1>
                            <h4 class="card-text">${phone.brand}</h4>
                            <p class="card-text">${phone.slug}</p>
                        </div>
                    </div>
    `;
    container.appendChild(div);
    });
       
}

document.getElementById('search_btn').addEventListener("click", function () {
    const searchType = document.getElementById('inputField');
    const search = searchType.value;
    loaders(search)
    console.log(search)
});


loaders('watch')




