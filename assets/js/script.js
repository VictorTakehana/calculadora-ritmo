const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const distancia = parseFloat(document.getElementById('distancia').value);
    const hora = parseInt(document.getElementById('hora').value);
    const minuto = parseInt(document.getElementById('minuto').value);
    const segundo = parseInt(document.getElementById('segundo').value);
    
    //calcular pace
    var horaConvertido = hora * 60
    var minConvertido = horaConvertido + minuto + (segundo/60)
    var paceParcial = minConvertido/distancia
    var parteDecimal = paceParcial % 1 //extrai a parte decimal do pace parcial
    var resultadoSegundos = parteDecimal * 60 //transforma a parte decimal em segundos

    var paceInteiro = Math.floor(paceParcial) //variavel para receber apenas a parte inteira (os 2 primeiros numeros antes da virgula)
    var paceFinal = paceInteiro + ':' + (resultadoSegundos < 10 ? '0' : '') + resultadoSegundos.toFixed(0); //junta os minutos com os segundos

    //calcular velocidade media
    var minConvertidoEmHora = minConvertido/60
    var velocidadeMedia = distancia/minConvertidoEmHora
    var velocidadeMediaFormatada = velocidadeMedia.toFixed(2).replace('.', ',')

    let description = `Pace: ${paceFinal}/km<br>Velocidade média: ${velocidadeMediaFormatada} km/h`;


    document.getElementById('infos').classList.remove('hidden');

    
    document.getElementById('description').innerHTML = description
})