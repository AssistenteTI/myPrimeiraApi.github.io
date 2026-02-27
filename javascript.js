const input = document.querySelector("#nomeLocalizacao")
const btnBuscar = document.querySelector("#btnBuscar")
const resultado = document.querySelector("#resultado")

btnBuscar.addEventListener("click", () => buscarCep("Endereco"))

function buscarNome(cep) {
    fetch(`https://cep.awesomeapi.com.br/search/${cep}`)
        .then(resposta => resposta.json())
        .then(dados => {
            const base = dados.results[0]
            const endereco = base.address
            const estado = base.state
            const cidade = base.city
            const ddd = base.ddd
            const distrito = base.district

            exibir(`<strong>Informações:</strong><br>

            <strong>Endereco:</strong>${endereco}<br>
            <strong>Estado:</strong>${estado}<br>
            <strong>Cidade:</strong>${cidade}<br>
            <strong>Distrito:</strong>${distrito}<br>
            <strong>DDD :</strong>${ddd}<br>`)
        })
}

function buscarCep(evento) {
    cep = input.value.trim()

    if (evento == "Endereco") {
        buscarNome(cep)
    }

}

function exibir(busca) {
    resultado.innerHTML = `<p>${busca}</p>`;

}