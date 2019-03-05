import React, {Component} from 'react';

class Para extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <p className="para">{this.props.children}</p>
        );
    }
}

export default Para;


 /*
 * Component is an paragraph
 *
 * Props:
 * - children
 */