function changeText() {
    let fruitlist = [ 'Apple', 'Banana', 'Mango', 'Guava', 'Kiwi', 'PineApple', 'Orange'];
    let randomNumber = generateRandomNumber(0, (fruitlist.length)- 1);
    let texttochange = fruitlist[randomNumber];
    document.getElementById('header').innerHTML = texttochange
}
function generateRandomNumber(min,max) {
    return Math.floor(Math.random() * (max-min + 1)+min);
}