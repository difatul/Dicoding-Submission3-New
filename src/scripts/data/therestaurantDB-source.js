import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async DaftarRestaurant() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}
export default RestaurantSource;
