import './IndexPage.scss';
import Tabs from '../../components/Tabs/Tabs'
import pointsData from '../../data/points.json'
import { useDispatch } from 'react-redux';

export default function IndexPage() {
  const dispatch = useDispatch();
  // Записываем точки разгрузки и погрузки в Redux
  dispatch({ type: 'SET_ALL_POINTS', payload: pointsData })

  return (
    <Tabs />
  )
}
