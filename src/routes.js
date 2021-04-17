import QualificationScreen from "./screens/QualificationScreen/QualificationScreen";
import MapView from './components/MapView';

const routes = [
  {
    path: "/qualify",
    component: QualificationScreen,
    exact: true,
  },
  {
    path : '/map-test',
    component: MapView
 }
];

export default routes;
