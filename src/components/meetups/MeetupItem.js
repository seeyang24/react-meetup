import { useContext } from 'react';

import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
    const favContext = useContext(FavoritesContext);

    const itemIsFavorite = favContext.itemIsFavorite(props.id);

    function toggleFavoriteHandler() {
        if (itemIsFavorite) {
            favContext.removeFavorite(props.id);
        } else {
            favContext.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <addres>{props.address}</addres>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;