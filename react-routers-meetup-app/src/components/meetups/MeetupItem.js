import { useContext } from 'react';

import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavoriteContext from '../../store/favorite-context';

function MeetupItem(props) {
    const favoritesCtx = useContext(FavoriteContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if(itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                address: props.address,
                image: props.image,
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
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorite' : 'To favorite'}</button>
            </div>
        </Card>
    </li>
    );
}

export default MeetupItem;