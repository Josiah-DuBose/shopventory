import './Loading.scss';

const Loading = () => {
    return (
        <div className="loading">
            <div className="loading__lds-ring">
                <div></div><div></div><div></div><div></div>
            </div>
            <h3 className='loading__title'>Loading...</h3>
        </div>
    );
}

export default Loading;
