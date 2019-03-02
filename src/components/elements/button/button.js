import React, {Component} from 'react';

class Button extends Component {
    constructor(props) {
        super(props);

        this.click = this.click.bind(this);
    }

    click() {
        this.props.method(...this.props.para);
    }

    render() {
        return(
            <button onClick={this.click} className="button">{this.props.children}</button>
        );
    }
}

export default Button;


/*
 * Component is a button
 *
 * Props:
 * - click (method)
 * - para (Array of parameters for method)
 * 
 * Will display children and can pass onclick function
 */