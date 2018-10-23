import React, {Component} from 'react'
import {Button} from 'antd'
class Buttons extends Component {

    constructor() {
        super()
        this.state = {
            clicked: 'false'
        }
    }

    mojefunkce = () => {
        const {text2} = this.props;
        //this.setState({clicked: 'true'})
        this.state = {clicked: 'true'}
    }

    render(){
        console.log(this.props)
        const {text2} = this.props
        const {clicked} = this.state
      return (<div>
      
        <Button  onClick={this.mojefunkce} type="primary">{clicked}</Button>
      </div>);
    }
  }

  export default Buttons;