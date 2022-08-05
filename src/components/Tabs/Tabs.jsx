import { Tabs } from 'antd';
import LeafletMap from '../../components/LeafletMap/LeafletMap';
import React, { useState } from 'react';
import RouteSelection from '../RouteSelection/RouteSelection';
import './Tabs.scss'
const { TabPane } = Tabs;

export default function App() {
  const [xChooseData, setXChooseData] = useState(null);
  const [yChooseData, setYChooseData] = useState(null);

  console.log('xChooseData =====>', xChooseData); // =================================================> TODO DELETE
  console.log('yChooseData =====>', yChooseData); // =================================================> TODO DELETE

  const onChange = (key) => {
    console.log(key); // =================================================> TODO DELETE
  };

  return (
    <Tabs
      defaultActiveKey="1"
      onChange={onChange}
      tabPosition={'left'}
      style={{ backgroundColor: '#fff', borderRadius: '10px', margin: '25px auto', width: '80%' }}
    >
      <TabPane
        tab={
          <div className='routeSelection-wrapper'>
            <span className='route_num'>1</span>
            <RouteSelection way='start' setXChooseData={setXChooseData} />
            <RouteSelection setYChooseData={setYChooseData} />
          </div>}
        key="1"
        style={{ paddingLeft: '10px' }}
      >
        <LeafletMap coord={[xChooseData, yChooseData]} />
      </TabPane>

      <TabPane
        tab={
          <div className='routeSelection-wrapper'>
            <span className='route_num'>2</span>
            <RouteSelection way='start' />
            <RouteSelection />
          </div>}
        key="2"
        style={{ paddingLeft: '10px' }}
      >
        <LeafletMap />
      </TabPane>

      <TabPane
        tab={
          <div className='routeSelection-wrapper'>
            <span className='route_num'>3</span>
            <RouteSelection way='start' />
            <RouteSelection />
          </div>}
        key="3"
        style={{ paddingLeft: '10px' }}
      >
        <LeafletMap />
      </TabPane>

      <TabPane
        tab={
          <div className='routeSelection-wrapper'>
            <span className='route_num'>4</span>
            <RouteSelection way='start' />
            <RouteSelection />
          </div>}
        key="4"
        style={{ paddingLeft: '10px' }}
      >
        <LeafletMap />
      </TabPane>

      <TabPane
        tab={
          <div className='routeSelection-wrapper'>
            <span className='route_num'>5</span>
            <RouteSelection way='start' />
            <RouteSelection />
          </div>}
        key="5"
        style={{ paddingLeft: '10px' }}
      >
        <LeafletMap />
      </TabPane>

    </Tabs>
  )
}