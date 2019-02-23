import React, {Component} from 'react';

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentStyle: {}
        }
    }

    componentDidMount() {
        this.setState({
            componentStyle: {
                width: this.props.width ? this.props.width : null,
                backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : null,
                margin: "0 auto",
                padding: "5px"
            }
        });
    }

    render() {
        return(
            <section style={this.state.componentStyle}>
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