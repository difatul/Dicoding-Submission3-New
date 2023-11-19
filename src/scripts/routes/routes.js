import Restaurant from '../views/pages/restaurant';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Restaurant, // default page
  '/restaurant': Restaurant,
  '/favorite': Favorite,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
