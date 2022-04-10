import { useEffect, useState } from 'react';
import _ from 'lodash';
import './App.scss';
import Card from './components/Card';
import Loading from './components/Loading';
import Navbar from './components/Navbar';

const formatData = (data) => {
  let formattedData = [];

  _.keys(_.get(data, 'message')).forEach(key => {
    formattedData.push(key);
    _.forEach(_.get(data, ['message', key]), subBreed => {
      formattedData.push(`${key} ${subBreed}`);
    });
  });

  return _.uniq(formattedData);
}

const App = () => {
  const [loading, setLoading] = useState(false);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        setDogs(formatData(data));
      })
      .catch(err => {
        console.error('Error retrieving dogs: ', err);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  return (
    <div className="app">
      <Navbar />
      {!loading && (
        <div className="cards">
          {dogs && dogs.map(dog => <Card key={dog} dog={dog} />)}
        </div>
      )}
      {loading && <Loading />}
    </div>
  );
}

export default App;
