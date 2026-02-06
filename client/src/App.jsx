import { useState, useEffect } from 'react';
import gpuService from './services/gpuService.js';
import ManufacturerList from './components/ManufacturerList.jsx';
import Gpu from './components/Gpu.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [gpusData, setGpusData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const data = await gpuService.getAll();
        setGpusData(data.manufacturers);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, []);

  if (!gpusData) {
    return <div><h1>No GPUs available</h1></div>;
  }

  function findCardById(data, id) {
    for (const manufacturer of data) {
      for (const series of manufacturer.series) {
        const card = series.cards.find(c => c.id === id);
        if (card) return card;
      }
    }
    return undefined;
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<ManufacturerList manufacturers={gpusData} />}></Route>
        <Route 
          path='/gpu/:id' 
          element={
            <Gpu gpus={gpusData} findCardById={findCardById} />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
