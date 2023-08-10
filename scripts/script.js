document.addEventListener('DOMContentLoaded', function(){
    var symbolPlay = 'O';
    var numJogadas = 0;
    var board = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
    const casas = document.getElementsByClassName('casa');
    const casasArray = Array.from(casas);

    casasArray.forEach(element => {
        element.addEventListener('click', function(){
            if(checkValidade(element.id)){
                element.innerHTML = DefineSymbol();
                numJogadas += 1;
                if(checkWinner()){
                    alert("O jogo acabou, o vencedor foi: " + symbolPlay);
                    restartGame()
                }else if(!checkWinner() && numJogadas == 9){
                    alert("O jogo acabou, deu velha!");
                    restartGame()
                }
            }


        });
    });

    function restartGame(){
        casasArray.forEach(element=>{
            element.innerHTML = '';
        })
        board = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
        symbolPlay='O';
        numJogadas = 0;
    }
    
    function DefineSymbol(){
        if(symbolPlay == 'X'){
            symbolPlay = 'O';
        }else{
            symbolPlay = 'X';
        }
        return symbolPlay
    }

    function checkWinner() {
        if (
            // Linhas
            (board[0] === board[1] && board[1] === board[2] && board[0] !== '-') ||
            (board[3] === board[4] && board[4] === board[5] && board[3] !== '-') ||
            (board[6] === board[7] && board[7] === board[8] && board[6] !== '-') ||
            // Colunas
            (board[0] === board[3] && board[3] === board[6] && board[0] !== '-') ||
            (board[1] === board[4] && board[4] === board[7] && board[1] !== '-') ||
            (board[2] === board[5] && board[5] === board[8] && board[2] !== '-') ||
            // Diagonais
            (board[0] === board[4] && board[4] === board[8] && board[0] !== '-') ||
            (board[2] === board[4] && board[4] === board[6] && board[2] !== '-')
        ) {
            return true;
        }
        return false;
    }

    function checkValidade(casa){
        const casaNumber = parseInt(casa.replace('casa', ''));
        if(board[casaNumber] == '-'){
            board[casaNumber] = symbolPlay;
            return true;
        }else{
            alert("Movimento inválido, escolha outra casa!")
        }
    }


})
