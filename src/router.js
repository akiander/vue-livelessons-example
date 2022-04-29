import { createWebHistory, createRouter } from 'vue-router';
import EmployeeOfTheMonthPage from './pages/EmployeeOfTheMonthPage';
import ProductsListPage from './pages/ProductsListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import UserInfoPage from './pages/UserInfoPage';

const routes = [
    { path: '/', component: ProductsListPage },
    { path: '/employee', component: EmployeeOfTheMonthPage },
    { path: '/cart', component: ShoppingCartPage },
    { path: '/products/:id', component: ProductDetailPage },
    { path: '/user-info', component: UserInfoPage },
];

const router = createRouter( {
    history: createWebHistory(),
    routes
});

export default router;