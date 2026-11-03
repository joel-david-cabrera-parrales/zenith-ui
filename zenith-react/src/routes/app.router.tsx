import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import { LandingHomePage, AboutPage, ServicesPage } from '@/examples/landing/pages';
import { AuthLayout, LoginPage, RegisterPage, ForgotPasswordPage, ResetPasswordPage } from '@/examples/auth';
import { HelperLayout, NotFoundPage, ServerErrorPage } from '@/helper';
import {
  HomePage,
  PaginatorsPage,
  TablesPage,
  FormsPage,
  DatePickerPage,
  RichTextEditorPage,
  FileUploadPage,
  ModalsPage,
  DrawersPage,
  CardsPage,
  HeroPage,
  HeadingsPage,
  ButtonsPage,
  DropdownsPage,
  BadgesPage,
  CountdownsPage,
  ToastsPage,
  AvatarsPage,
  AccordionsPage,
  SkeletonsPage,
  DiffsPage,
  CarouselsPage,
  StepsPage,
  BreadcrumbsPage,
  TabsPage,
  TooltipsPage,
  ProgressPage,
  LoadingPage,
} from '@/pages/index';

import { CatalogPage } from '@/examples/shop/pages/CatalogPage';
import { ProductDetailPage } from '@/examples/shop/pages/ProductDetailPage';
import { ChartsPage } from '@/pages/ChartsPage';
import { ChatExamplePage } from '@/examples/chat/ChatExamplePage';
import { CheckoutPage } from '@/examples/shop/pages/CheckoutPage';
import { SeachProductPage } from '@/examples/shop/pages/SeachProductPage';
import { ShoppingCartPage } from '@/examples/shop/pages/ShoppingCartPage';
import { ProfilePage } from '@/examples/shop/pages/ProfilePage';

const ShopLayout = lazy(() => import('@/examples/shop/layout/ShopLayout'));
const ChatLayout = lazy(() => import('@/examples/chat/layout/ChatLayout'));
const FeaturesLayout = lazy(() => import('@/features/layout/FeaturesLayout'));
const LandingLayout = lazy(() => import('@/examples/landing/layout/LandingLayout'));

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <FeaturesLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'layout/paginators', element: <PaginatorsPage /> },
      { path: 'layout/tables', element: <TablesPage /> },
      { path: 'forms/forms', element: <FormsPage /> },
      { path: 'forms/date-picker', element: <DatePickerPage /> },
      { path: 'forms/rich-text-editor', element: <RichTextEditorPage /> },
      { path: 'display/charts', element: <ChartsPage /> },
      { path: 'forms/file-upload', element: <FileUploadPage /> },
      { path: 'feedback/modals', element: <ModalsPage /> },
      { path: 'feedback/drawers', element: <DrawersPage /> },
      { path: 'display/cards', element: <CardsPage /> },
      { path: 'display/hero', element: <HeroPage /> },
      { path: 'display/headings', element: <HeadingsPage /> },
      { path: 'action/buttons', element: <ButtonsPage /> },
      { path: 'overlay/dropdowns', element: <DropdownsPage /> },
      { path: 'feedback/countdowns', element: <CountdownsPage /> },
      { path: 'display/badges', element: <BadgesPage /> },
      { path: 'display/progress', element: <ProgressPage /> },
      { path: 'feedback/loading', element: <LoadingPage /> },
      { path: 'feedback/toasts', element: <ToastsPage /> },
      { path: 'display/avatars', element: <AvatarsPage /> },
      { path: 'display/accordions', element: <AccordionsPage /> },
      { path: 'feedback/skeletons', element: <SkeletonsPage /> },
      { path: 'display/diffs', element: <DiffsPage /> },
      { path: 'display/carousels', element: <CarouselsPage /> },
      { path: 'display/steps', element: <StepsPage /> },
      { path: 'navigation/breadcrumbs', element: <BreadcrumbsPage /> },
      { path: 'navigation/tabs', element: <TabsPage /> },
      { path: 'overlay/tooltips', element: <TooltipsPage /> },
    ],
  },
  {
    path: 'examples/chat',
    element: <ChatLayout />,
    children: [
      {
        index: true,
        element: <ChatExamplePage />,
      },
    ],
  },
  {
    path: '/landing',
    element: <LandingLayout />,
    children: [
      { index: true, element: <LandingHomePage /> },
      { path: 'home', element: <LandingHomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicesPage /> },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'forgot', element: <ForgotPasswordPage /> },
      { path: 'reset', element: <ResetPasswordPage /> },
    ],
  },
  {
    path: '/helper',
    element: <HelperLayout />,
    children: [
      { path: '404', element: <NotFoundPage /> },
      { path: '500', element: <ServerErrorPage /> },
    ],
  },
  {
    path: 'examples/shop',
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <CatalogPage />,
      },
      {
        path: 'home',
        element: <CatalogPage />,
      },
      {
        path: 'product/:productCode',
        element: <ProductDetailPage />,
      },
      {
        path: 'checkout/:orderId',
        element: <CheckoutPage />,
      },
      {
        path: 'search',
        element: <SeachProductPage />,
      },
      {
        path: 'shopping-cart',
        element: <ShoppingCartPage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: '*',
    element: <HelperLayout />,
    children: [{ path: '*', element: <NotFoundPage /> }],
  },
]);
