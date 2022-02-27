// Problem 1
function seerToMon(seer) {
    if (typeof seer != 'number') {
    return 'Please, give a valid number';
    } else if (seer < 0) {
    return 'Please, give a positive number and greater than 0';
    }
    const mon = seer / 40;
    return mon;
    }
    const resultOfMon = seerToMon(240);
    console.log(resultOfMon);
    // Problem 2
    function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    if (typeof shirtQuantity != 'number' || typeof pantQuantity != 'number' || typeof shoeQuantity != 'number') {
    return 'Please, give a valid number';
    }
    const priceOfSingleShirt = 100;
    const priceOfSinglePant = 200;
    const priceOfSingleShoe = 500;
    const totalSalesOfShirt = shirtQuantity * priceOfSingleShirt;
    const totalSalesOfPant = pantQuantity * priceOfSinglePant;
    const totalSalesOfShoe = shoeQuantity * priceOfSingleShoe;
    const totalSalesOfAmount = totalSalesOfShirt + totalSalesOfPant + totalSalesOfShoe;
    return totalSalesOfAmount;
    }
    const myTotalSales = totalSales(5, 4, 10);
    console.log(myTotalSales);
    // Problem 3
    function deliveryCost(shirtQuantity) {
    if (typeof shirtQuantity != 'number') {
    return 'Please, give a valid number';
    } else if (shirtQuantity < 0) {
    return 'Please, give a positive number';
    }
    const firstDeliveryCost = 100;
    const secondDeliveryCost = 80;
    const thirdDeliveryCost = 50;
    if (shirtQuantity <= 100) {
    const totalDeliveryCost = shirtQuantity * firstDeliveryCost;
    return totalDeliveryCost;
    } else if (shirtQuantity <= 200) {
    const lessOneHundredCost = 100 * firstDeliveryCost;
    const restShirtQuantity = shirtQuantity - 100;
    const restShirtDeliveryCost = restShirtQuantity * secondDeliveryCost;
    const totalDeliveryCost = lessOneHundredCost + restShirtDeliveryCost;
    return totalDeliveryCost;
    } else {
    const lessOneHundredCost = 100 * firstDeliveryCost;
    const lessTwoHundredCost = 100 * secondDeliveryCost;
    const restShirtQuantity = shirtQuantity - 200;
    const restShirtDeliveryCost = restShirtQuantity * thirdDeliveryCost;
    const totalDeliveryCost = lessOneHundredCost + lessTwoHundredCost + restShirtDeliveryCost;
    return totalDeliveryCost;
    }
    }
    const finalDeliveryCost = deliveryCost(40);
    console.log(finalDeliveryCost);
    //Problem 4
    function perfectFriend(friends) {
    let selectedFriend = '';
    if (typeof friends == 'number') {
    return 'Please, give more the name of your friends, not number.';
    }
    for (const friend of friends) {
    if (friend.length == 5) {
    selectedFriend = friend;
    break;
    }
    }
    return selectedFriend;
    }
    const allFriends = ['Rafi', 'Nafa', 'Rahi', 'Maha', 'Likhon', 'Nahid', 'Parbin', 'Kajol'];
    const myPerfectFriend = perfectFriend(allFriends);
    console.log(myPerfectFriend);