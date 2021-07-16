import * as React from 'react';
import { Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import './assets/css/index.less'
import { Route, BrowserRouter, Switch   } from 'react-router-dom'
import App from './App';
// import { router } from './util/router';

ReactDOM.render(
  <BrowserRouter>
    {/* 使用了路由懒加载，所以需要使用<Suspense>包起来 */}
    <Suspense fallback={<div></div>}>
        <Route path="/" render={routerProps => {
          return <App {...routerProps}/>
        }}/>
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root')
);
