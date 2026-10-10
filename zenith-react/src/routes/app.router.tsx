import { createBrowserRouter } from 'react-router';
import { MainLayout } from '@/layouts/MainLayout';
import {
  DashboardPage,
  PaginatorsPage,
  TablesPage,
  FormsPage,
  ModalsPage,
  DrawersPage,
  CardsPage,
  HeroPage,
  HeadingsPage,
  ButtonsPage,
} from '@/pages';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'layout/paginators', element: <PaginatorsPage /> },
      { path: 'layout/tables', element: <TablesPage /> },
      { path: 'forms/forms', element: <FormsPage /> },
      { path: 'feedback/modals', element: <ModalsPage /> },
      { path: 'feedback/drawers', element: <DrawersPage /> },
      { path: 'display/cards', element: <CardsPage /> },
      { path: 'display/hero', element: <HeroPage /> },
      { path: 'display/headings', element: <HeadingsPage /> },
      { path: 'action/buttons', element: <ButtonsPage /> },
    ],
  },
]);