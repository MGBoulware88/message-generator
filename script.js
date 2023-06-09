const messageContainer = document.querySelector("#messageContainer");
const messageArr1 = ["Time has not", "Trouble doesn't seem to have", "Tomorrow has not"];
const messageArr2 = ["come to pass", "overtaken you yet", "ever"];
const messageArr3 = [", but it might", "because you are strong of heart", "and who knows why, really?"];


const getRandMessage = (arr1, arr2, arr3) => {
    const randMessage = [];
    let randNum = Math.floor(Math.random() * (arr1.length));
    randMessage.push(arr1[randNum]);
    randNum = Math.floor(Math.random() * (arr2.length));
    randMessage.push(arr2[randNum]);
    randNum = Math.floor(Math.random() * (arr3.length));
    randMessage.push(arr3[randNum]);

    return randMessage.join(" ");
}; 

const randMessage = getRandMessage(messageArr1, messageArr2, messageArr3);

const generateMessage = () => {
    messageContainer.innerHTML = getRandMessage(messageArr1, messageArr2, messageArr3);
}