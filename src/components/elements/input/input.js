import React, {Component} from 'react';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.children ? this.props.children : "",
            valid: this.props.regex ? this.props.regex.test(this.props.children) : true
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(event) {
        let checkRegex = this.props.regex ? this.props.regex.test(event.target.value) : true;
        this.setState({
            value: event.target.value,
            valid: checkRegex
        });
    }

    handleBlur(event) {
        if(this.props.blurPara) {
            this.props.blurMethod(event, ...this.props.blurPara)
        } else {
            this.props.blurMethod(event)
        }
    }

    handleKeyPress(event) {
        if(this.props.blurPara) {
            this.props.keyMethod(event, ...this.props.keyPara)
        } else {
            this.props.keyMethod(event)
        }
    }

    render() {
        return(
            <input
                className="input"
                style={this.state.valid ? {border: '1px solid green'} : {border: '1px solid #ff9191'}}
                type={this.props.type ? this.props.type : "text"}
                value={this.state.value}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress ? this.props.keyMethod : ""}
                onBlur={this.handleBlur ? this.props.blurMethod : ""}
                placeholder={this.props.placeholder ? this.props.placeholder : ""}
                autoFocus={this.props.autoFocus ? this.props.autoFocus : false}
                pattern={this.props.regex ? this.props.regex : ""}
            />
        );
    }
}

export default Input;


/*
 * Component is an input
 *
 * Props:
 * - children
 * - type
 * - placeholder
 * - autoFocus
 * - regex
 * - blurMethod(event, [blurPara])
 * - blurPara[]
 * - keyMethod(event, keyPara[])
 * - keyPara[]
 */