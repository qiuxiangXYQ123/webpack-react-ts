// 卡片
import * as React from 'react'
import {Component} from 'react'
import './index.less'


type IProps = Readonly<{
  style?:unknown;
  type?: string;
  title?: string | JSX.Element;
  body?: string | JSX.Element;
}>;

class MiCard extends Component<IProps>{

  private handleClass():string{
    let classText = 'mi-card'
    switch (this.props.type){
      case 'inset':
        classText+= ' mi-card-inset'
        break;
      case 'dent':
        classText+= ' mi-card-dent'
        break;
      case 'raised':
        classText+= ' mi-card-raised'
        break;
    }
    return classText
  }

  render(){
    const { title, type, style } = this.props

    return(
      <>
        <div className={this.handleClass()} style={style}>
          <div className="mi-card-children">
            {
              type === 'free' ? this.props.children
                :<>
                  { title &&
                  <div className='mi-card-title'>
                    {title}
                  </div>
                  }
                  <div className="mi-card-body">
                    {this.props.children}
                  </div>
                </>
            }
          </div>
        </div>
      </>
    )
  }
}

export default MiCard
