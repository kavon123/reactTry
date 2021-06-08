


import React, { Component } from 'react';
import { Divider, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default class Login extends Component {
    constructor(props) {
        super(props);

        // 设置 initial state
        this.state = {
            text: props.initialValue || 'placeholder1'
        };

        // ES6 类中函数必须手动绑定
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
        console.log(this.setState)
    }

    render() {
        return (
            <div>
                {/* 用户名:
                <input onChange={this.handleChange}
                    value={this.state.text} /> */}
                <Layout>
                    <Sider >Sider</Sider>
                    <Layout>
                        {/* <Header>Header</Header> */}
                        <Content>Content</Content>
                        {/* <Footer>Footer</Footer> */}
                    </Layout>
                </Layout>
            </div>
        );
    }
}
// About.propTypes = {
//     initialValue: React.PropTypes.string
// };
// About.defaultProps = {
//     initialValue: ''
// };