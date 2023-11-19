import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="lazyload" class="resto-item__header__poster" lazyload" alt="${resto.pictureId}"
          data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" crossorigin="anonymous">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
      <p>${resto.description}</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (resto) => `
<h2 class="resto__title">${resto.name}</h2>
<img class="resto__poster" class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.pictureId}" crossorigin="anonymous"/>
<div class="resto__info">
  <h3>Information</h3>
  <h4>Tagline</h4>
  <p>${resto.description}</p>
  <h4>Rating</h4>
  <p>${resto.rating}</p>
  <h4>Kota</h4>
  <p>${resto.city} minutes</p>
  <h4>Kategori</h4>
  <p>${resto.categories
    .map(
      (category) => `
            <span class="category">${category.name}</span>
          `,
    )
    .join('')}</p>
</div>
<div class="resto__overview">
  <h3 align="center">Menu Restaurant</h3>
  <h4>Makanan</h4>
  <ul class="">
  ${resto.menus.foods
    .map(
      (food) => `
  <li><i class=""></i> ${food.name}</li>`,
    )
    .join('')}
</ul>
<h4>Minuman</h4>
  <ul class="restaurant-detail__foods">
  ${resto.menus.drinks
    .map(
      (drink) => `
  <li><i class=""></i> ${drink.name}</li>`,
    )
    .join('')}
</ul>
</div>
<h4><span>Reviews</span></h4><br>
    ${resto.customerReviews
    .map(
      (review) => `
              <h5> Nama : ${review.name}</h5>
              <h5> Tanggal : ${review.date}</h5>
              <h5> Review :  ${review.review}</h5>
          `,
    )
    .join('')}
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
