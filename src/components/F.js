import React, { Component } from 'react'
import E from "./E"

class F extends Component {
    componentWillMount() {
        console.log("我是元素生命周期的componentWillMount");
    }
    render() {
        return (
            <div>
                我是div元素
            </div>
        )
    }
}
export default E(F)
