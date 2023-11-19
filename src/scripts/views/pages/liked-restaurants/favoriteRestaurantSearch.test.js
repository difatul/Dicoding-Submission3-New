// /* eslint-disable max-len */
// /* eslint-disable indent */
// /* eslint-disable no-undef */
// import { spyOn } from 'jest-mock';
// import FavoriteRestaurantSearchPresenter from './favorite-restaurant-search-presenter';
// import FavoriteMovieIdb from '../../../data/favorite-restaurant-idb';

// describe('Searching movies', () => {
//     let presenter;

//     const searchRestaurants = (query) => {
//         const queryElement = document.getElementById('query');
//         queryElement.value = query;
//         queryElement.dispatchEvent(new Event('change'));
//       };
//   // eslint-disable-next-line indent

//   const setMovieSearchContainer = () => {
//     document.body.innerHTML = `
//     <div id="resto-search-container">
//     <input id="query" type="text">
//     <div class="resto-result-container">
//       <ul class="restos">
//       </ul>
//     </div>
//   </div>
//     `;
//   };

//   const constructPresenter = () => {
//     spyOn(FavoriteRestaurantIdb, 'searchRestaurant');
//     presenter = new FavoriteRestaurantSearchPresenter({
//       favoriteRestaurants: FavoriteRestaurantIdb,
//     });
//   };

//   beforeEach(() => {
//     setMovieSearchContainer();
//     constructPresenter();
//   });

//     it('should ask the model to search for liked restaurants', () => {
//         spyOn(FavoriteMovieIdb, 'searchRestaurants');
//         // eslint-disable-next-line no-unused-vars
// eslint-disable-next-line max-len
//         // const presenter = new FavoriteRestaurantSearchPresenter({ favoriteRestaurants: FavoriteMovieIdb });
//         const queryElement = document.getElementById('query');
//         queryElement.value = 'resto a';
//         queryElement.dispatchEvent(new Event('change'));
//       });
//       expect(FavoriteRestaurantIdb.searchRestaurants).toHaveBeenCalledWith('resto a');
//   });

class FavoriteRestaurantSearchPresenter {
  constructor({ favoriteRestaurants, view }) {
    this._favoriteRestaurants = favoriteRestaurants;
    this._view = view;

    this._listenToSearchRequestByUser();
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchRestaurants(latestQuery);
    });
  }

  async _searchRestaurants(latestQuery) {
    this._latestQuery = latestQuery.trim();

    let foundRestaurants;
    if (this.latestQuery.length > 0) {
      foundRestaurants = await this._favoriteRestaurants.searchRestaurants(this.latestQuery);
    } else {
      foundRestaurants = await this._favoriteRestaurants.getAllRestaurants();
    }

    this._showfoundRestaurants(foundRestaurants);
  }

  _showfoundRestaurants(restos) {
    this._view.showfavoriteRestaurants(restos);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestaurantSearchPresenter;
