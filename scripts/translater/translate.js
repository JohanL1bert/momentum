const settingsName = document.querySelector('.setting-name');
const languageName = document.querySelector('.language-name');
const backgroundPopupName = document.querySelector('.background-name');

export const toggleSettingLanguage = (lang) => {
  if (lang == 'en') {
    settingsName.textContent = 'Settings';
    languageName.textContent = 'Language';
    backgroundPopupName.textContent = 'Background image(default Github)';
  } else {
    settingsName.textContent = 'Налаштування';
    languageName.textContent = 'Мова';
    backgroundPopupName.textContent = 'Задній фон(по-заомвчуванню Github)';
  }
};
