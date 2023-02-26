const loaders = async(searchText) =>{
const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
const res = await fetch(url);
const data = await res.json();
displayPhone(data.data)
}


const displayPhone = (phones) =>{
    console.log(phones)
    const container = document.getElementById('container');
    container.innerText = " ";
    const notFoundDiv = document.getElementById('not_found_message');
    if(phones.length === 0){
        notFoundDiv.classList.remove("d-none");
        // console.log(notFoundDiv);
        setTimeout((ture) => {
            notFoundDiv.classList.add("d-none");
            loaders('watch');
        }, 10000);
    }
    else{
        notFoundDiv.classList.add("d-none");
    }
    phones = phones.slice(0, 6);
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

const searchType = document.getElementById('inputField');
document.getElementById('search_btn').addEventListener("click", function () {
    const search = searchType.value;
    searchType.value = " ";
    loaders(search);
});


loaders('watch')




