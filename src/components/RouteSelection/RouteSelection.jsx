import { Cascader } from 'antd';
import React from 'react';
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
          }
        }),
      },
    ],
  }
];

export default function RouteSelection({ way, setXChooseData, setYChooseData }) {
  const onChange = (value, options) => {
    if (way === 'start') {
      setXChooseData(options?.at(-1).id)
    } else {
      setYChooseData(options?.at(-1).id)
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