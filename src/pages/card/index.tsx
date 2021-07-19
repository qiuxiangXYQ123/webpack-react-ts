// 卡片
import * as React from 'react'
import {Component} from 'react'
import './index.less'


type IProps = Readonly<{
  type?: string;
  style?: React.CSSProperties;
  value?: string;
  onChange?: Function;
}>;

class MiCard extends Component<IProps>{


  private handleClass():string{
    let classText = 'mi-card-children'
    console.log(this.props.type)
    switch (this.props.type){
      case 'inset':
        classText+= ' inset'
        break;
      case 'dent':
        classText+= ' dent'
        break;
      case 'raised':
        classText+= ' raised'
        break;
    }
    return classText
  }

  render(){
    return(
      <>
        <div className='mi-card inset'>
          <div className={this.handleClass()}></div>
        </div>
      </>
    )
  }
}

export default MiCard
