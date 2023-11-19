import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/therestaurantDB-source';
import { createRestaurantDetailTemplate } from '../teamplates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
// eslint-disable-next-line spaced-comment
//import LikeButtonPresenter from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
        <div id="resto" class="resto"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.restaurantDetail(url.id);
    const restoContainer = document.querySelector('#resto');

    restoContainer.innerHTML = createRestaurantDetailTemplate(
      resto.restaurant,
    );

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        description: resto.restaurant.description,
        city: resto.restaurant.city,
        pictureId: resto.restaurant.pictureId,
        rating: resto.restaurant.rating,
      },
    });
  },
};

export default Detail;
