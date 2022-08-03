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
          }
        }),
      },
    ],
  }
];

const onChange = (value) => {
  console.log(value); // =================================================> TODO DELETE
};

const RouteSelection = ({ way }) =>
  <Cascader
    options={options}
    onChange={onChange}
    placeholder={way === 'start' ? "Отправление из" : "Доставка в"}
    style={{ margin: '0 10px 0 10px' }}
  />;

export default RouteSelection;