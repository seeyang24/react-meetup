import {useContext} from 'react';
import MeetupList from '../components/meetups/MeetupList';

import FavoritesContext from '../store/favorites-context';

function FavoritesPage() {
    const favContext = useContext(FavoritesContext);

    let content;
    if (favContext.totalFavorites === 0) {
        content = <h2>No Favorites</h2>
    } else {
        content = <MeetupList meetups={favContext.favorites} />
    }

    return (
        <div>
            <h1>My Favorites</h1>
            {content}
        </div>
    )
}

export default FavoritesPage;