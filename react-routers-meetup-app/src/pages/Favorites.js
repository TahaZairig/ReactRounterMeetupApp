import { useContext } from "react";

import FavoriteContext from '../store/favorite-context';
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoriteContext);
  
  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You have no favorite yet, You can start adding your favorites</p>
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites}/>
  }

    return (
      <section>
        <h1>My Favorites</h1>
        {content}
    </section>
    );
  }
  
  export default FavoritesPage;