import QualificationScreen from "./screens/QualificationScreen/QualificationScreen";
import MapView from './components/MapView';
import LandingPage from './components/LandingPage';
import SearchResult from './components/SearchResults';
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
    path : '/results',
    component: SearchResult
  },
  {
    path : '/',
    component: LandingPage
  },
  
];

export default routes;
