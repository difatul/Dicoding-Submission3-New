import RestaurantSource from '../../data/therestaurantDB-source';
import { createRestaurantItemTemplate } from '../teamplates/template-creator';

const Restaurant = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Explore Restaurant</h2>
      <div id="restos" class="restos">
      </div>
    </div>
    `;
  },

  async afterRender() {
    const restos = await RestaurantSource.DaftarRestaurant();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
  },
};

export default Restaurant;
