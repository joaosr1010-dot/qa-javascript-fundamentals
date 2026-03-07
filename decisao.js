//Atividade realizada: 
// Percorrer uma lista de países contendo: Jamaica, Brasil, Itália e Canadá verificando se o país
// Brasil está presente na lista e avisando se estiver. (Também avisando se não estiver)
// Mostrar os números de execução e printando os nomes dos países.

const paises = ['Jamaica', 'Brasil', 'Italia', 'Canadá']

paises.forEach( (pais, indice) => {
  console.log('Execução: ', indice + 1)
  console.log('País: ', pais)
   
   if (pais =='Brasil') {
    console.log('País localizado!')
  }else {
    console.log('País não localizado!')
  }
    console.log('------------------------------------')
})