import * as React from 'react';
import './index.less'
import MiCard from '../card'

export default function home() {
  return (
    <div className="app">
      <MiCard
        style={{ width: '300px',height:'300px' }}
        title='这是标题'
      >
        <div>这是内容</div>
      </MiCard>
    </div>
  );
}

