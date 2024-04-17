import { HomePage } from '../pages/HomePage/HomePage';
import { OderPage } from '../pages/OderPage/OderPage';
import { ProductsPage } from '../pages/ProductsPage/ProductsPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import TypeProductPage from '../pages/TypeProductPage/TypeProductPage';
import { SignInPage } from '../pages/SignInPage/SignInPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage';

export const routes = [
  {
    path: '/',
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: '/order',
    page: OderPage,
    isShowHeader: true,
  },
  {
    path: '/products',
    page: ProductsPage,
    isShowHeader: true,
  },

  {
    path: '/:type',
    page: TypeProductPage,
    isShowHeader: true,
  },
  {
    path: '/sign-in',
    page: SignInPage,
    isShowHeader: false,
  },
  {
    path: '/sign-up',
    page: SignUpPage,
    isShowHeader: false,
  },
  {
    path: '/product-details',
    page: ProductDetailPage,
    isShowHeader: true,
  },
  {
    path: '*',
    page: NotFoundPage,
  },
];
