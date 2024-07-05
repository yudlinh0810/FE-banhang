import { HomePage } from '../pages/HomePage/HomePage';
import { OderPage } from '../pages/OderPage/OderPage';
import { ProductsPage } from '../pages/ProductsPage/ProductsPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import TypeProductPage from '../pages/TypeProductPage/TypeProductPage';
import { SignInPage } from '../pages/SignInPage/SignInPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage';
import ProfilePage from '../pages/Profile/ProfilePage';
import ChangePassPage from '../pages/ChangePassPage/ChangePassPage';
import AdminHome from '../pages/AdminPages/AdminHome/AdminHome';
import ManageUser from '../pages/AdminPages/ManageUser/ManageUser';
import ManageProduct from '../pages/AdminPages/ManageProduct/ManageProduct';
import ManageInvoice from '../pages/AdminPages/ManageInvoice/ManageInvoice';

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
  {
    path: '/profile-user',
    page: ProfilePage,
    isShowHeader: true,
  },
  {
    path: '/changePass-user',
    page: ChangePassPage,
  },
  {
    path: '/admin',
    page: AdminHome,
    isShowHeader: false,
    isPrivate: true,
  },
  {
    path: '/manage-user',
    page: ManageUser,
    isShowHeader: false,
    isPrivate: true,
  },
  {
    path: '/manage-product',
    page: ManageProduct,
    isShowHeader: false,
    isPrivate: true,
  },
  {
    path: '/manage-invoice',
    page: ManageInvoice,
    isShowHeader: false,
    isPrivate: true,
  },
];
