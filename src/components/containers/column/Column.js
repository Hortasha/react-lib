import React, {Component} from 'react';

class Column extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            width: this.props.columns ? (100/this.props.columns).toString() + "%" : "100%",
            backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : "#ffffff",
            display: "inline-block"
        }

        return(
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
}

export default Column;


/*
 * Component is used to split container into multible columns
 *
 * Props:
 * - columns
 * - backgroundColor
 * 
 * Will display the children within the section tag.
 */