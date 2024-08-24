const searchCep = async () => {
    const response = await fetch(`https://viacep.com.br/ws/${getCep()}/json/`)
    const json = await response.json()
    return(json)
}

const getCep = () => {
    const inputCep = document.querySelector('#cep')
    return inputCep.value
}

const insertResults = async () => {
    const info = await searchCep()

    debugger;
    if (info.erro == true){
        const erroCep = document.querySelector('#erroCep')
        erroCep.innerText = "p"
    }
    else {
        const inputRua = document.querySelector('#rua')
        inputRua.value = info.logradouro

        const inputBairro = document.querySelector('#bairro')
        inputBairro.value = info.bairro

        const inputCidade = document.querySelector('#cidade')
        inputCidade.value = info.localidade

        const inputEstado = document.querySelector('#estado')
        inputEstado.value = info.uf
    }


}   