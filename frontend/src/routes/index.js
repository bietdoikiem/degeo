import WorldMapContainer from '../containers/WorldMapContainer';
import LocationContainer from '../containers/LocationContainer';

const routes = [
  {
    path: '/',
    component: WorldMapContainer,
    exact: true,
  },
  {
    path: '/home',
    component: WorldMapContainer,
    exact: true,
  },
  {
    path: '/locations/:code',
    example: '/locations/HCMC',
    component: LocationContainer,
    exact: true,
  },
];

export default routes;
