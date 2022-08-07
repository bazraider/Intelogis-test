import { Cascader } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import pointsData from '../../data/points.json'

const options = [
  {
    value: 'Россия',
    label: 'Россия',
    children: [
      {
        value: 'Москва',
        label: 'Москва',
        children: pointsData.features.map(point => {
          return {
            value: point.properties.NAME,
            label: point.properties.NAME,
            id: point.properties.POINT_ID,
            coord: point.geometry.coordinates
          }
        }),
      },
    ],
  }
];

export default function RouteSelection({ way, numOfTab, setXPointId, setYPointId }) {
  const dispatch = useDispatch();

  const onChange = (value, options) => {
    console.log("~ options", options);
    if (way === 'start') {
      setXPointId({ id: options?.at(-1).id, coord: options?.at(-1).coord });
      dispatch({ type: 'SET_COORDS_IN_ARRAY', payload: { coord: options?.at(-1).coord, numOfTab: numOfTab, index: 0 } })
    } else {
      setYPointId({ id: options?.at(-1).id, coord: options?.at(-1).coord })
      dispatch({ type: 'SET_COORDS_IN_ARRAY', payload: { coord: options?.at(-1).coord, numOfTab: numOfTab, index: 1 } })
    }
  };

  return (
    <Cascader
      options={options}
      onChange={onChange}
      placeholder={way === 'start' ? "Откуда" : "Куда"}
      style={{ margin: '0 10px 0 10px' }}
    />
  )
}