var levels = [
    {
        "title":"The rescue of an friend",
        "description":"Your friend has been taken by the goblins and it is you task to rescue him.\n do you have what it takes?",
        "background":"url('pictures/Main-Menu.jpg')",
        "buttons":1,
        "buttonInfo":[
            {
                "text":"Start Game",
                "toLevel":2,
                "function":function(){
                    item("rock", "reset");
                    levels[currentLevel].buttonInfo[0].disabled = false;
                    document.getElementById("rock").innerHTML = "You have no"
                }
            }
        ]
    },
    {
        "title":"You have died",
        "description":"",
        "background":"url('pictures/Death-Screen.jpg')",
        "buttons":1,
        "buttonInfo":[
            {
                "text":"Goto main menu",
                "toLevel":0,
                "function": function(){
                    levels[1].description = ""
                }
            }
        ]
    },
    {
        "title":"The entrance of the dungeon",
        "description":"When at the entrance of the dungeon you see a note. the note reads:\n'Beware this is a very dangerous cave. you will need to make the right choices to get out alive again. proceed with caution'",
        "background":"url('pictures/Entrance.jpg')",
        "buttons":2,
        "buttonInfo":[
            {
                "text":"Enter the dungeon",
                "toLevel":3
            },
            {
                "text":"Decide to go to the menu again",
                "toLevel":0
            }
        ]
    },
    {
        "title":"The first split",
        "description":"After walking in a damp tunnel for around a minute it seems to split off.\nOn your left you see a dark tunnel and on your Right you hear a faint scream \n Which tunnel will you take",
        "background":"url('pictures/Dungeon.jpg')",
        "buttons":2,
        "buttonInfo":[
            {
                "text":"Take the left tunnel",
                "toLevel":4
            },
            {
                "text":"Take the right tunnel",
                "toLevel":5
            }
        ]
    },
    {
        "title":"A dead end",
        "description":"This is a dead end.\nWhat will you do?",
        "background":"url('pictures/Dungeon.jpg')",
        "buttons":2,
        "buttonInfo":[
            {
                "text":"Go back",
                "toLevel":3
            },
            {
                //death from waiting
                "text":"Wait",
                "toLevel":1,
                "deathMessage":"You died from waiting too long"
            }
        ]
    },
    {
        "title":"A rock?",
        "description":"After around 5 minutes of walking you see an odd looking rock.\nWhat will you do?",
        "background":"url('pictures/Dungeon.jpg')",
        "buttons":2,
        "buttonInfo":[
            {
                "text":"Take the rock",
                "toLevel":5,
                "function":function(){
                    item("rock", "add");
                    levels[currentLevel].buttonInfo[0].disabled = true;
                    levels[7].buttonInfo[0].disabled = false;
                    document.getElementById("inventory").style.display = "inline"
                    document.getElementById("rock").innerHTML = 1
                    levelRefresh();
                }
            },
            {
                "text":"Move on",
                "toLevel":6
            }
        ]
    },
    {
        "title":"Three way split",
        "description":"After you up the pace from hearing a scream the tunnel splits into three tunnels.",
        "background":"url('pictures/Dungeon.jpg')",
        "buttons":3,
        "buttonInfo":[
            {
                //death by hole
                "text":"Take the left tunnel",
                "toLevel":1,
                "deathMessage":"You ran into the tunnel and fell in a hole."
            },
            {
                //death by enemies
                "text":"Take the middle tunnel",
                "toLevel":1,
                "deathMessage":"You ran straight into an enemy camp and died."
            },
            {
                "text":"Take the right tunnel",
                "toLevel":7
            }
        ]
    },
    {
        "title":"The cell",
        "description":"you arrive at the holding cells where you friend is held.\nyou see you need something to open the lock with.\nmaybe a rock can help?",
        "background":"url('pictures/Dungeon.jpg')",
        "buttons":2,
        "buttonInfo":[
            {
                "text":"Open door (requires rock)",
                "toLevel":8,
                "disabled":true
            },
            {
                "text":"Go back",
                "toLevel":1,
                "deathMessage":"After you walk back to the rock you walk straight into some enemies"
            }
        ]
    },
    {
        "title":"Heading back",
        "description":"After you've opened the lock you give you friend the rock and you and your friend head back to the entrance.\n you run into some enemies on the way there",
        "background":"url('pictures/Dungeon.jpg')",
        "buttons":3,
        "buttonInfo":[
            {
                "text":"Try to run for the exit",
                "toLevel":1,
                "deathMessage":"You and your friend try to run from the enemies but they catch you and your friend. after a bit of struggle you die"
            },
            {
                "text":"Wait",
                "toLevel":9,
                "function":function(){
                    levels[9].description = "You and your friend wait to see where they are going. The enemy walk straight past you and you are able to continue"
                }
            },
            {
                "text":"Fight them",
                "toLevel":9,
                "function":function(){
                    levels[9].description = "You and your friend run straight towards them and fight them.\nyou are barely able to win.\ntime to keep walking";
                }
            }
        ]
    },
    {
        "title":"Heading back",
        "description":"",
        "background":"url('pictures/Dungeon.jpg')",
        "buttons":1,
        "buttonInfo":[
            {
                "text":"Move on",
                "toLevel":10
            }
        ]
    },
    {
        "title":"The end",
        "description":"You and your friend reach the exit.\nYou've succesfully saved your friend.\nGreat job!!!",
        "background":"url('pictures/Ending.jpg')",
        "buttons":1,
        "buttonInfo":[
            {
                "text":"To main menu",
                "toLevel":0
            }
        ]
    }
]