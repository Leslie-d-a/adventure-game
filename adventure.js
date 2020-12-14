var currentLevel = 0;
const TITLE = document.getElementById("levelTitle");
const DESCRIPTION = document.getElementById("levelDescription");
const BUTTONSDIV = document.getElementById("buttons");

function levelRefresh(){
    TITLE.innerHTML = levels[currentLevel].title;
    DESCRIPTION.innerHTML = levels[currentLevel].description;
    while(BUTTONSDIV.lastChild){
        BUTTONSDIV.lastChild.remove();
    }
    for (i=0;i<levels[currentLevel].buttons;i++){
        var button = document.createElement('button');
        button.innerHTML = levels[currentLevel].buttonInfo[i].text;
        button.setAttribute('number', i);
        button.addEventListener('click', function(e){
            currentLevel = levels[currentLevel].buttonInfo[e.target.getAttribute('number')].toLevel;
            levelRefresh();
        })
        button.onclick = levels[currentLevel].buttonInfo[i].function;
        BUTTONSDIV.appendChild(button);
    }
}

levelRefresh();