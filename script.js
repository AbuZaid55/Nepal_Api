const container= document.querySelector('.container')
const request = new XMLHttpRequest()
request.open('get','https://restcountries.com/v2/name/nepal')
request.send()
request.addEventListener('load',function(){
    const [data] = JSON.parse(this.responseText);
    const htmlData = `<div class="card">
    <article class="card">
        <div class="card-body">
            <img src="${data.flag}" alt="" class="card-body-img">
            <h1 class="card-body-title">
                ${data.name}<span></span>
            </h1>
            <p class="card-body-text">capital:${data.capital}</p>
        </div>
        <div class="card-footer">
            <div class="card-footer-social">
                <h3>${data.nativeName}</h3>
                <p>Native Language</p>
            </div>
            <div class="card-footer-social">
                <h3>${data.population}</h3>
                <p>Population</p>
            </div>
            <div class="card-footer-social">
                <h3>${data.demonym}</h3>
                <p>Demonym</p>
            </div>
        </div>
    </article>
</div>`
container.insertAdjacentHTML("afterbegin",htmlData)
})











//