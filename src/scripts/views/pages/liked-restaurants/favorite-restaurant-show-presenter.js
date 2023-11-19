class FavoriteRestaurantShowPresenter {
  constructor({ view, favoriteRestaurants }) {
    this._view = view;
    this._favoriteRestaurants = favoriteRestaurants;

    this._showfavoriteRestaurants();
  }

  async _showfavoriteRestaurants() {
    const restos = await this._favoriteRestaurants.getAllRestaurants();
    this._displayRestaurants(restos);
  }

  _displayRestaurants(restos) {
    this._view.showfavoriteRestaurants(restos);
  }
}

export default FavoriteRestaurantShowPresenter;
