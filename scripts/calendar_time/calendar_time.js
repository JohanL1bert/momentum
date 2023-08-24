const timeClass = document.querySelector('.time');
const dateClass = document.querySelector('.date');

const locale = {
  en: 'en-US',
  ua: 'uk-UA',
};

Object.freeze(locale);

const chooseLocale = (lang) => {
  return locale[lang];
};

const getTime = (lang) => {
  const time = new Date();
  const timeNow = time.toLocaleTimeString(lang);
  timeClass.innerHTML = timeNow;
};

const getDate = (lang) => {
  const date = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const fullDate = date.toLocaleString(`${lang}`, options);
  dateClass.innerHTML = fullDate;
};

const timeCallback = (lang) => {
  const locationLocale = chooseLocale(lang);
  getTime(locationLocale);
  getDate(locationLocale);
};

export default timeCallback;
