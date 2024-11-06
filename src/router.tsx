import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Products, { loader as productsLoader, action as updateStatusAction} from './views/Products';
import NewProduct, { action as newProductAction } from './views/NewProduct';
import EditProduct, { loader as EditProductLoader, action as EditProductAction} from './views/EditProduct';
import { action as deleteProductAction } from './components/ProductsDetails';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader,
                action: updateStatusAction
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: newProductAction
            },
            {
                path: 'productos/:id/editar', // ROA Pattern - Resource-oriented desing
                element: <EditProduct/>,
                loader: EditProductLoader,
                action: EditProductAction
            },
            {
                path: 'productos/:id/eliminar',
                action: deleteProductAction
            }
        ]
    }
])