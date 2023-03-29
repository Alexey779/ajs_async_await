import GameSavingLoader from './gamesavingloader';

GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
  // eslint-disable-next-line no-console
  console.log(saving);
}, (error) => {
  // eslint-disable-next-line no-console
  console.log(error);
});
