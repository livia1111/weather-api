


function atualizaTempo(dados) {

    document.querySelector('.retorno-cidade').innerHTML = "Tempo em " + dados.name
    document.querySelector('.temperatura').innerHTML = dados.main.temp + "°C "
    document.querySelector('.icone').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector('.condicoes').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = "Umidade em " + dados.main.humidity + "%"






}
async function buscarCidade(cidade) {
    let chave = "a6e6763420792461e20c9884835067b1";
    let dados = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade + '&appid=' + chave +
        "&lang=pt_br" + "&units=metric")
        .then(resposta => resposta.json())
    atualizaTempo(dados)


}

function cliqueiNoBotao() {
    let cidade = document.querySelector('.cidade').value
    buscarCidade(cidade)
}

