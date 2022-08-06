import { Tabs } from 'antd';
import LeafletMap from '../../components/LeafletMap/LeafletMap';
import React, { useEffect, useState } from 'react';
import RouteSelection from '../RouteSelection/RouteSelection';
import { useSelector } from 'react-redux';
import './Tabs.scss'
const { TabPane } = Tabs;

export default function App() {
  const countOfRoutes = [1, 2, 3, 4, 5];
  const allPoints = useSelector((store) => store.points.features);
  // const pointsArray = allPoints.filter(el => el.properties.POINT_ID === coord[0] || el.properties.POINT_ID === coord[1]);

  const [xPoint, setXPoint] = useState();
  const [yPoint, setYPoint] = useState();

  const [coordArray, setCoordArray] = useState([]);

  const onChange = (key) => {
    console.log(key)
    const twoPoints = allPoints.filter(el => el.properties.POINT_ID === xPoint || el.properties.POINT_ID === yPoint);
    console.log('twoPoints', twoPoints);
    // setCoordArray(...coordArray, coordArray[(key * 2) - 1] = twoPoints.geometry.coordinates[1])
  };

  useEffect(() => {
    const twoPoints = allPoints.filter(el => el.properties.POINT_ID === xPoint || el.properties.POINT_ID === yPoint);
    console.log('twoPoints', twoPoints);
  }, [allPoints, xPoint, yPoint]);

  console.log('coordArray ===>', coordArray)

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
                  setXChooseData={setXPoint}
                />
                <RouteSelection
                  setYChooseData={setYPoint}
                />
              </div>}
          >
            <LeafletMap
              numOfTab={num}
              coord={[xPoint, yPoint]} />
          </TabPane>
        )
      })
      }
    </Tabs>
  )
}