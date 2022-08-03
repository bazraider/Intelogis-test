import { Tabs } from 'antd';
import LeafletMap from '../../components/LeafletMap/LeafletMap';
import React from 'react';
import RouteSelection from '../RouteSelection/RouteSelection';
import './Tabs.scss'
const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const App = () => (
  <Tabs
    defaultActiveKey="1"
    onChange={onChange}
    tabPosition={'left'}
    style={{ backgroundColor: '#fff', borderRadius: '10px', margin: '25px auto', width: '80%' }}
  >
    <TabPane
      tab={
        <>
          <span className='route_num'>1</span>
          <RouteSelection way='start' />
          <RouteSelection way='stop' />
        </>}
      key="1"
      style={{ paddingLeft: '10px' }}
    >
      <LeafletMap />
    </TabPane>

    <TabPane
      tab={
        <>
          <RouteSelection way='start' />
          <RouteSelection way='stop' />
        </>}
      key="2"
      style={{ paddingLeft: '10px' }}
    >
      <LeafletMap />
    </TabPane>

    <TabPane
      tab={
        <>
          <RouteSelection way='start' />
          <RouteSelection way='stop' />
        </>}
      key="3"
      style={{ paddingLeft: '10px' }}
    >
      <LeafletMap />
    </TabPane>

    <TabPane
      tab={
        <>
          <RouteSelection way='start' />
          <RouteSelection way='stop' />
        </>}
      key="4"
      style={{ paddingLeft: '10px' }}
    >
      <LeafletMap />
    </TabPane>

    <TabPane
      tab={
        <>
          <RouteSelection way='start' />
          <RouteSelection way='stop' />
        </>}
      key="5"
      style={{ paddingLeft: '10px' }}
    >
      <LeafletMap />
    </TabPane>

  </Tabs>
);

export default App;