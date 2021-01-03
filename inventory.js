function item(item, doFunction){
    switch(doFunction){
        case 'add':
            inventory[item].amount += 1
        break;
        case 'remove':
            inventory[item].amount -= 1
        break;
        case 'reset':
            inventory[item].amount = 0
        break;
    }
}

var inventory = {
    "rock":{
        "amount":0
    }
}