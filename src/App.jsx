import { useState } from 'react'
import MyLayout from './MyLayout'
import MyHomePage from './Pages/HomePage/MyHomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MyAbout from './Pages/AboutPage/MyAbout'
import MyContact from './Pages/ContactPage/MyContact'
import MyBlog from './Pages/BlogPages/Blog/MyBlog'
import MySingleBlog from './Pages/BlogPages/SingleBlog/MySingleBlog'
import MyProductList from './Pages/ProductPage/ProductList/MyProductList'
import MyProductDetails from './Pages/ProductPage/ProductDetails/MyProductDetails'
import MyLogin from './Pages/Pages/Login/MyLogin'
import MyElements from './Pages/Pages/Elements/MyElements'
import MyConfirmation from './Pages/Pages/Confirmation/MyConfirmation'
import MyProductCheckout from './Pages/Pages/ProductCheckout/MyProductCheckout'
import MyShoppingCart from './Pages/Pages/ShoppingCart/MyShoppingCart'


const router = createBrowserRouter([
  {
    path: '/', // http://localhost/
    element: <MyLayout/>,
    // errorElement: <Error/>,
    //lazy dùng để load đúng nội dung component khi người dùng nhấn vào đường link chứa nó.
    //loader
    children: [
      {
        index: true, //Trang chủ
        element: <MyHomePage/>
      },
      {
        path: 'about', 
        element: <MyAbout/> 
      },
      {
        path: 'contact', 
        element: <MyContact/> 
      },
      {
        path: 'blog', 
        element: <MyBlog/> 
      },
      {
        path: 'single-blog', 
        element: <MySingleBlog/> 
      },
      {
        path: 'login', 
        element: <MyLogin/> 
      },
      {
        path: 'elements', 
        element: <MyElements/> 
      },
      {
        path: 'confirmation', 
        element: <MyConfirmation/> 
      },
      {
        path: 'checkout', 
        element: <MyProductCheckout/> 
      },
      {
        path: 'cart', 
        element: <MyShoppingCart/> 
      },
      // {
      //   path: 'product-list', 
      //   element: <MyProductList/> 
      // },
      {
        path: 'product-list/:cat/:sort/:page', 
        element: <MyProductList/> 
      },
      {
        path: 'details/:id', 
        element: <MyProductDetails/> 
      },
      // {
      //   path: ':cat/:p?', // http://localhost/danh-muc
      //   element: <Shop/> 
      // },
      // {
      //   path: 'chi-tiet-sp', // http://localhost/chi-tiet-sp
      //   element: <ShopDetail/> 
      // },
      // {
      //   path: 'gio-hang',
      //   element: <Cart/>
      // }
    ]
  }
])

function App () {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
