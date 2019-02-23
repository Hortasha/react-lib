import React, {Component} from 'react';

class Column extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentStyle: {}
        }
    }

    componentDidMount() {
        this.setState({
            componentStyle: {
                width: this.props.columns ? (100/this.props.columns).toString() + "%" : "100%",
                backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : "#ffffff",
                display: "inline-block"
            }
        });
    }

    render() {
        return(
            <div style={this.state.componentStyle}>
                {this.props.children}
            </div>
        );
    }
}

export default Column;


/*
 * Split up a row into multible columns
 */