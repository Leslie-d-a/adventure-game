var levels = [
    {
        "title":"Main Menu",
        "description":"Begin van het spel",
        "buttons":1,
        "buttonInfo":[
            {
                "text":"To first level",
                "toLevel":1
            }
        ]
    },
    {
        "title":"Level 1",
        "description":"Level 1 van game",
        "buttons":2,
        "buttonInfo":[
            {
                "text":"to second level",
                "toLevel":2
            },
            {
                "text":"death 1",
                "toLevel":0
            }
        ]
    },
    {
        "title":"Level 2",
        "description":"Level 2 van game",
        "buttons":3,
        "buttonInfo":[
            {
                "text":"to second level",
                "toLevel":1
            },
            {
                "text":"death 2",
                "toLevel":0
            },
            {
                "text":"pick up item",
                "toLevel":2,
                "function":function(){
                    grabItem("item1");
                }
            }
        ]
    }
]