const Rahim = 50;
const Karim = 80;

if (Rahim > Karim) {
    console.log('Rahim will get the strawberry');
} else {
    console.log('Karim will get the strawberry');
}



// inside a function
function getMax(num1, num2){
    if (num1 > num2){
        return num1;
    }
    else {
        return num2;
    }
}

const max1 = getMax(56, 79);
const max2 = getMax(59, 98);
console.log('max of two is:', max)