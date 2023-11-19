import RestaurantSource from '../../data/therestaurantDB-source';

const Favorite = {
  async render() {
    return `
        <h2>Halaman Favorite</h2>
      `;
  },

  async afterRender() {
    const restos = await RestaurantSource.DaftarRestaurant();
    console.log(restos);
  },

};

export default Favorite;
