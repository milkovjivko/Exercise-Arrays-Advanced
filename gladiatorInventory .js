function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {
        let commands = arr[i].split(' ');


        switch (commands[0]) {
            case "Buy":
                if (!inventory.includes(commands[1])) {
                    inventory.push(commands[1]);
                }
                break;
            case "Trash":
                if (inventory.includes(commands[1])) {
                    let index = inventory.indexOf(commands[1]);
                    inventory.splice(index, 1)
                }
                break;
            case "Repair":
                if (inventory.includes(commands[1])) {
                    let index = inventory.indexOf(commands[1]);
                    inventory.splice(index, 1);
                    inventory.push(commands[1]);
                }
                break;
            case "Upgrade":
                let upgradeElement = commands[1].split('-');
                if (inventory.includes(upgradeElement[0])) {
                    let index = inventory.indexOf(upgradeElement[0]);
                    inventory.splice(index + 1, 0, `${upgradeElement[0]}:${upgradeElement[1]}`);
                }
        }
    }
    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'])

