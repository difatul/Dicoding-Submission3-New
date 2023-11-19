import { createRestaurantItemTemplate } from '../../teamplates/template-creator';

class FavoriteRestaurantView {
  // eslint-disable-next-line class-methods-use-this
  getTemplate() {
    return `
      <div class="content">
        <input id="query" type="text">
        <h2 class="content__heading">Your Liked Restaurant</h2>
  
        <div id="restos" class="restos">
        </div>
      </div>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restos) {
    let html;
    if (restos.length) {
      html = restos.reduce((carry, resto) => carry.concat(createRestaurantItemTemplate(resto)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restos').innerHTML = html;

    document.getElementById('restos').dispatchEvent(new Event('restos:updated'));
  }

  // eslint-disable-next-line class-methods-use-this
  _getEmptyRestaurantTemplate() {
    return `
      <div class="resto-item__not__found">
        Tidak ada resto untuk ditampilkan
      </div>
    `;
  }
}

export default FavoriteRestaurantView;
