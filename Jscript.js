let player = 0
        let comp = 0
        function computerPlay(){
            let randomNumber = Math.floor(Math.random()*100)
            if (randomNumber <= 33){
                return "ROCK";
            } else if (randomNumber <= 66 ){
                return "PAPER";
            } else (randomNumber <= 99)
                return "SCISSORS";
        }
        
        function play(playerSelection, computerSelection){
            playerChoice = playerSelection;
            compChoice = computerSelection;
            if (playerSelection == computerSelection){
                return round = "It's a tie!";
            }else if (playerSelection !== computerSelection){
                if (computerSelection == "SCISSORS"){
                    if (playerSelection == "PAPER"){
                        return comp++, round = "You lose scissors beats paper.";
                    }else if (playerSelection == "ROCK"){
                        return player++, round = "You win rock beats scissors";
                    }
                }else if(computerSelection == "PAPER"){
                    if (playerSelection == "ROCK"){
                        return comp++, round = "You lose paper beats rock.";
                    }else if (playerSelection == "SCISSORS"){
                        return player++, round = "You win scissors beats paper.";
                    }
                }else if (computerSelection == "ROCK"){
                    if (playerSelection == "PAPER"){
                        return player++, round = "You win paper beats rock.";
                    }else if (playerSelection == "SCISSORS"){
                        return comp++, round = "You lost rock beats scissors.";
                    }
                }else if (computerSelection == "SCISSORS"){
                    if (playerSelection == "ROCK"){
                        return player++, round = "You win rock beats scissors.";
                    }
                }else if (computerSelection == "ROCK"){
                    if (playerSelection == "SCISSORS"){
                        return comp++, round = "You lost rock beats scissors."
                    }
                }

            }else{
                return console.log("error")
            }
        }
        

const btn1 = document.querySelector('#btn1');

let score = 0

btn1.addEventListener('click', () => {
play("ROCK", computerPlay());
choicePlayer.textContent =`You chose ${playerChoice}`
choiceComp.textContent =`Computer chose ${compChoice}`
results.textContent = `Player:${player} Computer: ${comp}`
outcome.textContent = `${round}`
score += 1;
console.log(score)
if (score == 5){
            game()
}else if (score >= 5){
score -= 5;
container.removeChild(end);
}
});

const btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', () => {
play("PAPER", computerPlay());

results.textContent = `Player: ${player} Computer: ${comp}`
outcome.textContent = `${round}`
choicePlayer.textContent =`You chose ${playerChoice}`
choiceComp.textContent =`Computer chose ${compChoice}`
score += 1;
console.log(score)
if (score == 5){
    game()
}else if (score >= 5){
    score -= 5;
    container.removeChild(end);
}
});

const btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', () => {
play("SCISSORS", computerPlay());
results.textContent = `Player: ${player} Computer: ${comp}`
outcome.textContent = `${round}`
choicePlayer.textContent =`You chose ${playerChoice}`
choiceComp.textContent =`Computer chose ${compChoice}`
score += 1;
console.log(score)
if (score == 5){
    game()
}else if (score >= 5){
    score -= 5;
    container.removeChild(end);
}
});
    





const container = document.querySelector("#container");

const choicePlayer = document.createElement("div")

const choiceComp = document.createElement("div")

const results = document.createElement("div"); 

const outcome = document.createElement("div")

const choiceContainer = document.querySelector("#choiceContainer")

container.appendChild(results);
container.appendChild(outcome);
choiceContainer.appendChild(choicePlayer)
choiceContainer.appendChild(choiceComp)



const end = document.createElement("h1");





container.appendChild(end);


function game(){
    container.appendChild(end);
    if (comp > player){
        final = "YOU LOSE..."
        player = 0
        comp = 0

    }else if (comp < player){
        final = "YOU WON!"
        player = 0
        comp = 0

    }else if(comp == player){
        final = "YOU TIED."
        console.log("TIE")
        player = 0
        comp = 0

    }
    end.textContent = `${final}`
    
}
