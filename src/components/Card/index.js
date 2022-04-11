import { useEffect, useState } from 'react';
import Loading from '../Loading';
import './Card.scss';

const Card = ({ dog }) => {
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState([]);

    useEffect(() => {
        const breed = dog.split(' ');
        const url = breed.length > 1
            ? `https://dog.ceo/api/breed/${breed[0]}/${breed[1]}/images/random`
            : `https://dog.ceo/api/breed/${breed[0]}/images/random`
        setLoading(true);
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                setImage(data?.message);
            })
            .catch(err => {
                console.error('Error retrieving image: ', err);
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
