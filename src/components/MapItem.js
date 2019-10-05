import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';

const MapItem = () => {
  return (
    <YMaps>
      <Map
        defaultState={{
          center: [53.882831, 27.727364],
          zoom: 9
        }}
        width='450px'
      />
    </YMaps>
  );
};

export default MapItem;
