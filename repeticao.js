//Atividade realizada:
//Percorrer uma lista de times contendo: Santos, Flamengo, Fluminense, Bahia e Grêmio.
//Mostrar o número de execução (começando com 1) e o respectivo nome do time.
//colocar separadores de uma linha de execução para outra.



const times = ['Santos', 'Flamengo', 'Fluminense', 'Bahia', 'Grêmio']

times.forEach((time, indice) => {
 console.log ('Execução: ' , indice +1)
 console.log ('Time: ', time)
 console.log ('----------------------')
})
 
