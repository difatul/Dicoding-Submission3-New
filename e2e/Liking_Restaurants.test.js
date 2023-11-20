/* eslint-disable max-len */
// /* eslint-disable no-undef */

// const assert = require('assert');

// Feature('Liking restaurant');

// Before(({ I }) => {
//   I.wait(2);
//   I.amOnPage('/#/like');
//   I.wait(2);
// });

// Scenario('showing empty liked restaurant', ({ I }) => {
//   I.see('Tidak ada resto untuk ditampilkan. Tambahkan Beberapa Restaurant Pada Favorit', '.empty');
//   // '.restos__not__found',
// });

// Scenario('liking one restaurant', async ({ I }) => {
//   I.see('Tidak ada resto untuk ditampilkan. Tambahkan Beberapa Restaurant Pada Favorit', '.empty');
//   // , '.restos__not__found'
//   I.amOnPage('/');

//   // pause();
//   I.wait(2);
//   I.seeElement('.restos');
//   const firstRestaurant = locate('.restos').first();
//   const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
//   I.wait(2);
//   I.click(firstRestaurant);
//   I.wait(2);

//   I.seeElement('#likeButton');
//   I.click('#likeButton');
//   I.wait(2);

//   I.wait(2);
//   I.amOnPage('/#/like');
//   I.wait(2);
//   I.seeElement('.resto-item');

//   I.wait(2);
//   const likedRestaurantTitle = await I.grabTextFrom('.restos');

//   assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
// });

// Scenario('Unliking one restaurant', async ({ I }) => {
//   I.amOnPage('/');

//   I.wait(2);
//   I.waitForElement('.restos');
//   I.seeElement('.restos');
//   const firstRestaurant = locate('.restos').first();
//   const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
//   I.click(firstRestaurant);

//   I.wait(2);
//   I.seeElement('#likeButton');
//   I.click('#likeButton');

//   I.wait(2);
//   I.amOnPage('#/like');
//   I.wait(2);
//   I.seeElement('.restos');

//   const firstRestaurantLike = locate('.restos').first();
//   const favoriteRestaurantTitle = await I.grabTextFrom(firstRestaurantLike);
//   assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);

//   I.click(firstRestaurantLike);
//   I.seeElement('#likedButton');
//   I.click('#likedButton');
//   I.wait(2);
//   I.amOnPage('#/like');
//   I.wait(2);
//   I.seeElement('.empty');
//   const onFavorite = await I.grabTextFrom('.empty');
//   assert.strictEqual(onFavorite, 'Your favorite list is empty. Add some restaurants to your favorites!');
// });

/* eslint-disable no-undef */

const assert = require('assert');

Feature('Liking restaurant');

Before(({ I }) => {
  I.wait(2);
  I.amOnPage('/#/like');
  I.wait(2);
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.wait(5);
  I.see('Tidak Ada Resto Untuk DItampilkan, Tambahkan Beberapa Restaurant Pada FAvorit', '.empty');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.wait(5);
  I.see('Tidak Ada Resto Untuk DItampilkan, Tambahkan Beberapa Restaurant Pada FAvorit', '.empty');
  // , '.restos_not_found'
  I.amOnPage('/');

  // pause();
  I.wait(2);
  I.seeElement('.restos');
  const firstRestaurant = locate('h3 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.wait(2);
  I.click(firstRestaurant);
  I.wait(2);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.wait(2);
  I.seeElement('.resto-item');

  I.wait(2);
  const likedRestaurantTitle = await I.grabTextFrom('h3 a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(2);
  I.seeElement('.restos');
  const firstRestaurant = locate('h3 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.wait(2);
  I.click(firstRestaurant);
  I.wait(2);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.wait(2);
  I.seeElement('.resto-item');

  I.wait(2);
  const likedRestaurantTitle = await I.grabTextFrom('h3 a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.wait(2);
  I.amOnPage('#/like');
  I.wait(2);
  I.seeElement('h3 a');
  I.click(locate('h3 a').first());
  I.wait(2);
  I.seeElement('.like');
  I.click('.like');
  I.amOnPage('/#/like');
  I.wait(5);
  I.amOnPage('#/like');
  I.wait(2);
  I.see('Tidak Ada Resto Untuk DItampilkan, Tambahkan Beberapa Restaurant Pada FAvorit', '.empty');
});
