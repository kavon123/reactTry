


import React from 'react';

export default class Index extends React.Component {
    constructor(props) {
        super(props);

        // 设置 initial state
        this.state = {
            text: props.initialValue || 'placeholder'
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
                用户名:
                <input onChange={this.handleChange}
                    value={this.state.text} />
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