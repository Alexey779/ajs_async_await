import GameSavingLoader from './gameLoader';

(async () => {
  try {
    // eslint-disable-next-line no-console
    await GameSavingLoader.load().then((saving) => console.log(saving));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
})();
