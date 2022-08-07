import { Tabs } from 'antd';
import LeafletMap from '../../components/LeafletMap/LeafletMap';
import React, { useState } from 'react';
import RouteSelection from '../RouteSelection/RouteSelection';
import { useSelector } from 'react-redux';
import './Tabs.scss'
const { TabPane } = Tabs;

export default function App() {
  const countOfRoutes = [1, 2, 3, 4, 5];
  const allCoords = useSelector((store) => store.coords);

  const [xPointId, setXPointId] = useState();
  const [yPointId, setYPointId] = useState();

  const onChange = (key) => {
    // const twoPoints = allPoints.filter(el => el.properties.POINT_ID === xPoint || el.properties.POINT_ID === yPoint);
  };

  const analize = (arr, numOfTab) => {
    const start = numOfTab * 2 - 2;
    const end = numOfTab * 2;
    return arr.slice(start, end)
  }

  return (
    <Tabs
      defaultActiveKey="1"
      onChange={onChange}
      tabPosition={'left'}
      style={{ backgroundColor: '#fff', borderRadius: '10px', margin: '25px auto', width: '80%' }}
    >
      {countOfRoutes.map(num => {
        return (
          <TabPane
            key={num}
            style={{ paddingLeft: '10px' }}
            tab={
              <div className='routeSelection-wrapper'>
                <span className='route_num'>{num}</span>
                <RouteSelection
                  way='start'
                  numOfTab={num}
                  setXPointId={setXPointId}
                />
                <RouteSelection
                  numOfTab={num}
                  setYPointId={setYPointId}
                />
              </div>}
          >
            <LeafletMap
              id={[xPointId?.id, yPointId?.id]}
              coord={analize(allCoords, num)}
            />
          </TabPane>
        )
      })
      }
    </Tabs>
  )
}