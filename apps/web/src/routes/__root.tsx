import { createRootRoute, Outlet} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import DefaultLayout from '../components/layouts/default';
import Nav from '../components/nav';

export const Route = createRootRoute({
  component: () => (
    <DefaultLayout header={<Nav />}>
      <Outlet />
      <TanStackRouterDevtools />
    </ DefaultLayout>
  )
});
