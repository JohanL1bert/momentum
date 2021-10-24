const greetContainer = document.querySelector('.greeting-container');
const greetingSelector = greetContainer.querySelector('.greeting');
const inputName = greetContainer.querySelector('.name');

const dateObj = () => {
    return new Date()
}

const filter = () => {
    const getDate = dateObj();
    const time = getDate.getHours() + "." + getDate.getMinutes();

    if (time >= 6.00 && time <= 11.59) {
        return "Good morning";
    } else if(time >= 12.00 && time <= 17.59) {
        return 'Good afternoon';
    } else if (time >= 18.00 && time <= 23.59) {
        return "Good evening";
    } else if (time >= 0.00 && time <= 5.59){
        return "Good night";
    }
}

const greeting = () => {
    const getGreeting = filter();
    greetingSelector.innerHTML = getGreeting;
    return getGreeting;
}


//inputName
//document.getElementById("mytext").value = "My value";
//FIXME: Можно и без этого обойтись. Хотя лучше все равно onChange как-то трекать имя
/* const getInputChange = (event) => {
    const changeNickname = event.target.value;
} */
//inputName.addEventListener('input', getInputChange);

const setLocalStorage = () => {
    const name = inputName.value;
    localStorage.setItem('name', `${name}`);
}

const getLocalStorage = () => {    
    if(localStorage.getItem('name')) {
        const getName = localStorage.getItem('name');
        inputName.value = `${getName}`;
    }
}

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);


export default greeting;


