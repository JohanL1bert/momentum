const greetContainer = document.querySelector('.greeting-container');
const greetingSelector = greetContainer.querySelector('.greeting');
const inputName = greetContainer.querySelector('.name');

const en = {
  morning: 'Good morning',
  afternoon: 'Good afternoon',
  evening: 'Good evening',
  night: 'Good night',
};

const ua = {
  morning: 'Добрий ранок',
  afternoon: 'Добрий день',
  evening: 'Добрий вечір',
  night: 'Спокійної ночі',
};

const dateTimeLanguage = (lang) => {
  if (lang === 'en') return en;

  if (lang === 'ua') return ua;
};

export const filterDayTime = (lang = { ...en }) => {
  const getDate = new Date();
  const time = getDate.getHours() + '.' + getDate.getMinutes();

  if (time >= 6.0 && time <= 11.59) {
    return lang.morning;
  } else if (time >= 12.0 && time <= 17.59) {
    return lang.afternoon;
  } else if (time >= 18.0 && time <= 23.59) {
    return lang.evening;
  } else if (time >= 0.0 && time <= 5.59) {
    return lang.night;
  }
};

export const greeting = (lang) => {
  const objDateTime = dateTimeLanguage(lang);
  const getGreeting = filterDayTime(objDateTime);

  greetingSelector.innerHTML = getGreeting;
  return getGreeting;
};

const setLocalStorage = () => {
  const name = inputName.value;
  localStorage.setItem('name', `${name}`);
};

const getLocalStorage = () => {
  if (localStorage.getItem('name')) {
    const getName = localStorage.getItem('name');
    inputName.value = `${getName}`;
  }
};

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
