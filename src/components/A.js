import React, { Component } from 'react'

export default (title) => (WrappedComponent) => class A extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: ""
        }
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    };

    refCopy(instance){
        instance && console.log(instance.getName());
    }

    render() {
        const { age, ...otherProps } = this.props;
        const newProps = {
            value: this.state.value,
            onChange: this.onChange
        }
        return (
            <div className="a-container">
                <div className="header">
                我是A组件
                    <div>{title}</div>
                </div>
                <div>
                    <WrappedComponent sex={'男'} {...otherProps} ref={this.refCopy.bind(this)} {...newProps} />
                </div>
            </div>
        )
    }
}
