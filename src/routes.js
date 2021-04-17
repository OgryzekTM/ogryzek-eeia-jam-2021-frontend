import QualificationScreen from "./screens/QualificationScreen/QualificationScreen";
import MapView from './components/MapView';
import LandingPage from './components/LandingPage';

const routes = [
  {
    path: "/qualify",
    component: QualificationScreen,
    exact: true,
  },
  {
    path : '/map-test',
    component: MapView
  },
  {
    path : '/',
    component: LandingPage
  },
];

export default routes;
