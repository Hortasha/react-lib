import React, {Component} from 'react';

class Section extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            width: this.props.width ? this.props.width : null,
            backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : null,
            margin: "0 auto",
            padding: "5px",
            fontFamily: "arial"
        }

        return(
            <section style={style}>
                {this.props.children}
            </section>
        );
    }
}

export default Section;


/*
 * Component is inteded to be used as a container for a section of webpage.
 *
 * Props:
 * - width
 * - backgroundColor
 * 
 * Will display the children within the section tag.
 */