import React, { Component } from 'react'
import A from './A';

class B extends Component {
    getName(){
        return "我是B组件"
    }
    render() {
        return (
            <div>
                我是B组件
                <input type="text" {...this.props} />
                <br />
                我的名字叫：{this.props.name}
                我的年龄是：{this.props.age}
                我的性别是：{this.props.sex}
            </div>
        )
    }
}
export default A("提示")(B);
