/* eslint-disable no-undef */
// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
  });

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    // update favorites - get the latest favorites
    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup)
        });
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            // return true if we want to favorite the item. if false, we drop the item
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        })
    }

    function itemIsFavoriteHandler(meetupId) {
        // return true if we have a meet up with that ID. 
        return userFavorites.some(meetup => meetup.id === meetupId); 
    };

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        // pointers - expose the functions to all components that need them
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;