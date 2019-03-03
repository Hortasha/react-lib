import React, {Component} from 'react';

class Button extends Component {
    constructor(props) {
        super(props);

        this.click = this.click.bind(this);
    }

    click(event) {
        if(this.props.para) {
            this.props.method(event, ...this.props.para);
        } else {
            this.props.method(event);
        }
    }

    render() {
        return(
            <button onClick={this.click} className="button">{this.props.children}</button>
        );
    }
}

export default Button;


 /*
 * Component is an button
 *
 * Props:
 * - children
 * - method(event, [blurPara])
 * - para[]
 */