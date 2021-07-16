// 路由懒加载
import { lazy } from 'react'

const Home = lazy(() => import('../pages/home'))
const Login = lazy(() => import('../pages/login'))

export type RouterType = {
  path: string,
  component: React.LazyExoticComponent<any>,
  root?: string[],
  notExect?: boolean,
}

const HomeRouter:Array<RouterType> = [
      {
        path:'/login',
        component: Login
      },
      {
        path:'/home',
        component: Home
      }
]

// 总路由
export const router: RouterType[] = ([
  ...HomeRouter,
])

