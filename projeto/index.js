/*
Deverá ser possível buscar livros pela categoria;
Listar livros que já foram lidos e que são recomendados; 
Listar livros que ainda não foram lidos;  
*/

console.log('-------------------------------------------------------')
console.log('                Projeto Guiado I                       ')
console.log('              Profa: Tassila Bomfim                    ')
console.log('                Aluna: Analia Silva                    ')
console.log('-------------------------------------------------------')
console.log("\n")

//Instanciando o banco de dados
const books = require('./database')

//Importando o readline-sync para entrada de usuário
const userInput = require('readline-sync')

//Interação com o usuário através de perguntas e respostas
const bookGenre = userInput.question('Deseja escolher a categoria? (S/N) ')

if (bookGenre === 'S') {
    console.log("\n")
    console.log('Temos Romance, Ficcao, Fantasia, Biografia e Computacao.')
    console.log("\n")
    const userPreference = userInput.question('Qual categoria voce deseja? ')
    
    function categoria(books) {
        return books.categoria === userPreference
    }
    //Filtrando a função
    const booksAvailable = books.filter(categoria)
    console.log('Estes sao os livros disponiveis:')
    console.table(booksAvailable)
    //console.table(): exibe dados como uma tabela.
}

else {
    console.log("\n")
    console.log('Estes são todos os nossos livros:')

    //Ordenando por número de páginas, de forma crescente
    books.sort((a, b) => a.paginas - b.paginas)
    console.table(books);
}

const suggesting = userInput.question('Deseja alguma sugestao? (S/N) ').toLocaleUpperCase()

    if (suggesting === 'S'){
        console.log("\n")
        console.log('Recomendações:')
        //Listando os livros lidos e recomendados    
        function recomendo(books) {
            return books.recomendo == true
        }
        const bookRecommendation = books.filter(recomendo)
        console.table(bookRecommendation)
    }
    else{
        console.log("\n")
        console.log('Lista de desejos:')
        //Listando os livros não lidos
        function leu(books) {
            return books.leu === false
        }
        const unreadBooks = books.filter(leu)
        console.table(unreadBooks)
    }

    console.log('-------------------------------------------------------')
    console.log('                   VOLTE SEMPRE                        ')
    console.log('-------------------------------------------------------')



