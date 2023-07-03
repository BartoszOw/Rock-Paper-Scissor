    /* Getting Data */
    const compBoard = document.querySelector("#compBoard");
    const newBoard = document.querySelector("#board");
    const playerStats = document.querySelector(".player-stats");
    const computerStats = document.querySelector(".comp-stats");
    const resultStats = document.querySelector("#checkwinner");
    const btn = document.querySelector("#btn");
    const hand = document.querySelector(".hand");



    let playerPoints = 0;
    let computerPoints = 0;
    let compPick;
    let compPickName;
    let playPick;
    let compPickInfo;
    let playPickInfo;

   /* Create Rock Paper Scissor */
    const rock = document.createElement("img");
    rock.src = "Photo/piesc.png";
    rock.classList.add("hand");
    newBoard.appendChild(rock);
    

    const paper = document.createElement("img");
    paper.src = "Photo/peace.png";
    paper.classList.add("hand");
    newBoard.appendChild(paper);
    

    const scissors = document.createElement("img");
    scissors.src = "Photo/openhand.png";
    scissors.classList.add("hand");
    newBoard.appendChild(scissors);
    
    /* Game start */
    function setPoints(){
        playerStats.innerText = playerPoints;
        computerStats.innerText = computerPoints;
        resultStats.innerHTML = "What would u choose?"
    }

    /* Player choice */
    function playerChoose(x,y,z){
            x.addEventListener("click", () => {
                y.style.display = 'none';
                z.style.display = 'none';
                x.style.transform = 'translateX(-220px)';
                playPick = x;
                computerChoose();
                playPickInfo = "ROCK";
                checkStats();
            }, {once: true});
            y.addEventListener("click", () => {
                x.style.display = 'none';
                z.style.display = 'none';
                y.style.transform = 'translateX(-220px)';
                playPick = y;
                computerChoose();
                playPickInfo = "PAPER";
                checkStats();
            }, {once: true});
            z.addEventListener("click", () => {
                x.style.display = 'none';
                y.style.display = 'none';
                z.style.transform = 'translateX(-220px)';
                playPick = z;
                computerChoose();
                playPickInfo = "SCISSOR";
                checkStats();
            }, {once: true});

            return playPickInfo, playPick;
    }
    /* Compter Choice */
    const computerPick = [rock, paper, scissors];

    function rockAdd(){
            let compChoice = document.createElement("img");
            compChoice.classList.add("hand");
            compChoice.src = "Photo/piesc.png";
            compChoice.style.transform = 'translateX(-0.2px)';
            compBoard.appendChild(compChoice);
            compPickInfo = "ROCK";
    }
    function paperAdd(){
            let compChoice2 = document.createElement("img");
            compChoice2.classList.add("hand");
            compChoice2.src = "Photo/peace.png";
            compChoice2.style.transform = 'translateX(-0.2px)';
            compBoard.appendChild(compChoice2);
            compPickInfo = "PAPER";
    }
    function scissAdd(){
            let compChoice3 = document.createElement("img");
            compChoice3.classList.add("hand");
            compChoice3.src = "Photo/openhand.png";
            compChoice3.style.transform = 'translateX(-0.2px)';
            compBoard.appendChild(compChoice3);
            compPickInfo = "SCISSOR";
    }


    function computerChoose(){
        const randomPick = Math.floor(Math.random() * computerPick.length);
        switch(randomPick){
            case 0:
                compPick = rockAdd();
                break;
            case 1:
                compPick = paperAdd();
                break;
            case 2:
                compPick = scissAdd();
                break;
                default:
        
        }

        return compPick, compPickInfo, playAgain(btn);
    }
    /* Stats config */
    function checkStats(){
        if((playPickInfo === "ROCK" && compPickInfo === "SCISSOR") || 
        (playPickInfo === "PAPER" && compPickInfo === "ROCK") ||
        (playPickInfo === "SCISSOR" && compPickInfo === "PAPER")){
            resultStats.innerHTML = "You Lose";
            computerPoints++;
            computerStats.innerHTML = computerPoints;
        }  else if (playPickInfo === compPickInfo){
            resultStats.innerHTML = "It's Draw";
        } else {
            resultStats.innerHTML = "You Win, Congratulations!";
            playerPoints++;
            playerStats.innerHTML = playerPoints;
        }

    }
    /* Play again button */
    function goBack(){
            compPickName = compBoard.lastChild;
            newBoard.removeChild(playPick);
            compBoard.removeChild(compPickName);
    }
    function playAgain(x){
        x.addEventListener("click", () => {
            playerStats.innerHTML = playerPoints;
            computerStats.innerHTML = computerPoints;

            const rock = document.createElement("img");
            rock.src = "Photo/piesc.png";
            rock.classList.add("hand");
            newBoard.appendChild(rock);
            
        
            const paper = document.createElement("img");
            paper.src = "Photo/peace.png";
            paper.classList.add("hand");
            newBoard.appendChild(paper);
            
        
            const scissors = document.createElement("img");
            scissors.src = "Photo/openhand.png";
            scissors.classList.add("hand");
            newBoard.appendChild(scissors);
            playerChoose(rock, paper,scissors);
            goBack();
        }, {once: true});
    }

window.onload=function(){ 
    setPoints();
    playerChoose(rock,paper,scissors)
    
}



/* Bartosz Owczarek */
