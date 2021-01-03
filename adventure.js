var currentLevel = 0;
const TITLE = document.getElementById("levelTitle");
const DESCRIPTION = document.getElementById("levelDescription");
const GAMEDIV = document.getElementById("gameContainer");
const BUTTONSDIV = document.getElementById("buttons");

function levelRefresh(){
    TITLE.innerHTML = levels[currentLevel].title;
    DESCRIPTION.innerHTML = levels[currentLevel].description;
    GAMEDIV.style.backgroundImage = levels[currentLevel].background;
    while(BUTTONSDIV.lastChild){
        BUTTONSDIV.lastChild.remove();
    }
    for (i=0;i<levels[currentLevel].buttons;i++){
        var button = document.createElement('button');
        button.innerHTML = levels[currentLevel].buttonInfo[i].text;
        button.setAttribute('number', i);
        button.onclick = levels[currentLevel].buttonInfo[i].function;
        button.disabled = levels[currentLevel].buttonInfo[i].disabled;
        button.addEventListener('click', function(e){
            if (levels[currentLevel].buttonInfo[e.target.getAttribute('number')].deathMessage != undefined) {
                levels[1].description = levels[currentLevel].buttonInfo[e.target.getAttribute('number')].deathMessage
            }
            currentLevel = levels[currentLevel].buttonInfo[e.target.getAttribute('number')].toLevel;
            levelRefresh();
        })
        BUTTONSDIV.appendChild(button);
    }
}

levelRefresh();