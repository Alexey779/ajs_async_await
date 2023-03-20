import GameSavingLoader from '../gameLoader';

test('Проверка класса GameSavingLoader с методом load.', async () => {
  const result = JSON.stringify({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });

  await GameSavingLoader.load().then((saving) => {
    expect(saving).toEqual(result);
  });
});
