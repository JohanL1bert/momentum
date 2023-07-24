export const languageChoice = document.querySelector('.btn-toggle');

let language = 0;

export const toggleLanguage = () => {
  if (language === 0) {
    language = 1;
    return 'ua';
  } else {
    language = 0;
    return 'en';
  }
};
