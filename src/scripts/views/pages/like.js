import FavoriteMovieIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../teamplates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Movie</h2>
        <div id="restos" class="restos">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteMovieIdb.getAllRestaurants();
    const restosContainer = document.querySelector('#restos');
    const content = document.querySelector('.content');
    if (restos.length === 0) {
      content.innerHTML
      += '<div class="empty">Tidak Ada Resto Untuk DItampilkan, Tambahkan Beberapa Restaurant Pada FAvorit</div>';
    }
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
  },
};

export default Like;
