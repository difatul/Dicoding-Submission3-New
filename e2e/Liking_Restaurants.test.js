/* eslint-disable no-undef */

const assert = require('assert');

Feature('Liking restaurant');

Before(({ I }) => {
  I.wait(2);
  I.amOnPage('/#/like');
  I.wait(2);
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan. Tambahkan Beberapa Restaurant Pada Favorit', '.empty');
  // '.restos__not__found',
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan. Tambahkan Beberapa Restaurant Pada Favorit', '.empty');
  // , '.restos__not__found'
  I.amOnPage('/');

  // pause();
  I.wait(2);
  I.seeElement('.restos');
  const firstRestaurant = locate('.restos').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.wait(2);
  I.click(firstRestaurant);
  I.wait(2);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(2);

  I.wait(2);
  I.amOnPage('/#/like');
  I.wait(2);
  I.seeElement('.resto-item');

  I.wait(2);
  const likedRestaurantTitle = await I.grabTextFrom('.restos');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.wait(2);
  I.waitForElement('.restos');
  I.seeElement('.restos');
  const firstRestaurant = locate('.restos').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.wait(2);
  I.amOnPage('#/like');
  I.wait(2);
  I.seeElement('.restos');

  const firstRestaurantLike = locate('.restos').first();
  const favoriteRestaurantTitle = await I.grabTextFrom(firstRestaurantLike);
  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);

  I.click(firstRestaurantLike);
  I.seeElement('#likedButton');
  I.click('#likedButton');
  I.wait(2);
  I.amOnPage('#/like');
  I.wait(2);
  I.seeElement('.empty');
  const onFavorite = await I.grabTextFrom('.empty');
  assert.strictEqual(onFavorite, 'Your favorite list is empty. Add some restaurants to your favorites!');
});

// Scenario('searching Restaurants', async ({ I }) => {
//   I.see('Tidak ada resto untuk ditampilkan', '.restos__not__found');

//   I.amOnPage('/');

//   I.seeElement('.restaurant__title a');

//   const titles = [];

//   // eslint-disable-next-line no-plusplus
//   for (let i = 1; i <= 3; i++) {
//     I.click(locate('.restaurant__title a').at(i));

//     I.seeElement('#likeButton');
//     I.click('#likeButton');

//     // eslint-disable-next-line no-await-in-loop
//     titles.push(await I.grabTextFrom('.restaurant__title'));

//     I.amOnPage('/');
//   }

//   I.amOnPage('/#/like');
//   I.seeElement('#query');

//   const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restos');
//   assert.strictEqual(titles.length, visibleLikedRestaurants);

//   const searchQuery = titles[1].substring(1, 3);

//   I.fillField('#query', searchQuery);
//   I.pressKey('Enter');

//   // mendapatkan daftar resto yang sesuai dengan searchQuery
//   const matchingRestaurants = titles.filter((title) => title.indexOf(searchQuery) !== -1);
//   const visibleSearchedLikedRestaurants = await I.grabNumberOfVisibleElements('.restos');

//   assert.strictEqual(matchingRestaurants.length, visibleSearchedLikedRestaurants);

//   // eslint-disable-next-line no-plusplus
//   for (let i = 0; i < matchingRestaurants.length; i++) {
//     // eslint-disable-next-line no-await-in-loop
//     const visibleTitle = await I.grabTextFrom(locate('.restaurant__title').at(i + 1));

//     assert.strictEqual(matchingRestaurants[i], visibleTitle);
//   }
// });
