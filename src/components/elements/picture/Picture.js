import React, {Component} from 'react';

class Picture extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <img className="picture" src={this.props.url} alt={this.props.alt} />
        );
    }
}

export default Picture;


 /*
 * Component is a picture
 *
 * Props:
 * - url
 * - alt
 */