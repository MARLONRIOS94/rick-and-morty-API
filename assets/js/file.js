console.log ('rick and morty API')

document.addEventListener('DOMContentLoaded', () => {
    const random = getRandomInt(1, 320)
    fetchData(random)
})

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}


const fetchData = async (id) => {
    try {
        const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await resp.json()

        console.log(data)

        const rickmorty = {
            img:data.image,
            nombre:data.name,
            especie:data.species,
            estado:data.status,
            ultimaubicacion:data.location.name,
            vistoprimeravez:data.origin.name,
        }

        pintarcard(rickmorty)
    } catch (error) {
        console.log(error)
    }
}

const pintarcard = (rickmorty) => {
    // console.log(rickmorty)

    const flex = document.querySelector('.flex')
    const template = document.querySelector('#template-card').content
    const clone = template.cloneNode(true)
    const fragment = document.createDocumentFragment()


    clone.querySelector('.card-img').setAttribute('src', rickmorty.img)   
    clone.querySelector('.name-character').textContent = rickmorty.nombre
    clone.querySelector('.state-species').textContent = rickmorty.especie + ' - ' + rickmorty.estado
    clone.querySelector('.last-location').textContent = rickmorty.ultimaubicacion
    clone.querySelector('.first-seen').textContent = rickmorty.vistoprimeravez



    fragment.appendChild(clone)
    flex.appendChild(fragment)
}