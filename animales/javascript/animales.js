

const pintarObjetos = function (pArray) {

    let article = `<section class="flex">`
    for (animal of pArray) {
        article += pintarUnAnimal(animal)
    }
    article += `</section>`
    document.write(article)
}

function obtenerPeligrosidad(pNum) {

    let peligrosidad = '';
    switch (pNum) {

        case 5:
            return peligrosidad = 'peligroso'
        case 4:
            return peligrosidad = 'peligrosito'

        case 3:
            return peligrosidad = 'cuidadin'

        case 2:
            return peligrosidad = 'manso'

        case 1:
            return peligrosidad = 'supermansito'

    }
}
const pintarUnAnimal = function (pObjeto) {

    return `<article class="${obtenerPeligrosidad(pObjeto.peligrosidad)}">
            <h3>${pObjeto.raza}</h3>
            <figure>
                <img src="${pObjeto.foto}"alt="${pObjeto.raza}">
            </figure>
            <p>Peso: ${pObjeto.peso}kg</p>
        </article>`
}
// pintarObjetos(animales)
const porPeligro = function (pLista, pPeligrosidad) {
    const nivel = new Array()
    let i = 0
    for (let lista of pLista) {
        if (lista.peligrosidad === pPeligrosidad) {
            nivel[i] = lista
            i++
        }
    }
    return pintarObjetos(nivel)

}

porPeligro(animales, 2)



