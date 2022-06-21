function getInterest(priciple, rate, time) {
    var interest = priciple * rate * time;
    return interest;
}

const myPrinciple = 5;
const myRatepercentage = 10;
const myRate = myRatepercentage / 100;
const myTime = 60;
const myInterest = getInterest(myPrinciple, myRate, myTime);
console.log(myInterest);