import React, {Component} from 'react';

class Link extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <a className="link" href={this.props.url}>{this.props.children}</a>
        );
    }
}

export default Link;


 /*
 * Component is an link
 *
 * Props:
 * - children
 * - url
 */