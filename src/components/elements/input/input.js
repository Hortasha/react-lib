import React, {Component} from 'react';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.children,
            valid: this.props.regex ? this.props.regex.test(this.state.value) : true
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,

        });
    }

    render() {
        return(
            <input
                value={this.state.value}
                onChange={this.handleChange}
                placeholder={this.props.placeholder ? this.props.placeholder : "Write text here"}
                autoFocus={this.props.autoFocus ? this.props.autoFocus : false}
            />
        );
    }
}

export default Input;


/*
 * Component is a button
 *
 * Props:
 * - click (method)
 * - para (Array of parameters for method)
 * 
 * Will display children and can pass onclick function
 */