import React, {Component} from 'react';

let sectionStyle = {
    width: "100%",
    backgroundColor: "#ffffff",
    margin: "0 auto"
}

class Section extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        this.props.width ? sectionStyle.width = this.props.width : null;
        this.props.backgroundColor ? sectionStyle.backgroundColor = this.props.backgroundColor : null;

        return(
            <section style={sectionStyle}>
                {this.props.children}
            </section>
        );
    }
}

export default Section;


/*
* Component is inteded to be used as a container for a section of webpage.
* This component can take backgroundColor and width as props.
* Will display the children within the section tag.
*/