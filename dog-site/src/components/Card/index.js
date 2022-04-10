import { useEffect, useState } from 'react';
import Loading from '../Loading';
import './Card.scss';

const Card = ({ dog }) => {
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch(`https://dog.ceo/api/breed/${dog}/images/random`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                console.log('data', data);
                setImage(data.message);
            })
            .catch(err => {

            })
            .finally(() => {
                setLoading(false);
            })
    }, [dog]);

    return (
        <div className="card">
            {!loading && (
                <>
                    <img className='card__image' src={image} alt={dog} />
                    <h5 className="card__title">{dog}</h5>
                </>
            )}
            {loading && <Loading />}
        </div>
    );
}

export default Card;
