import React, {Component} from 'react';

class Column extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            width: 0
        }

        this.updateWidth = this.updateWidth.bind(this);
    }
    
    componentDidMount(){
        this.updateWidth();
        window.addEventListener('resize', this.updateWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWidth);
    }

    updateWidth() {
        this.setState({ width: window.innerWidth });
    }

    render() {
        const style = {
            width: this.props.columns ? (100/this.props.columns).toString() + "%" : "100%",
            backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : "#ffffff",
            display: "inline-block"
        }

        const styleBreakpoint = {
            width: "100%",
            backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : "#ffffff",
            display: "inline-block"
        }

        return(
            <div style={(this.props.breakpoint && this.props.breakpoint >= this.state.width) ? styleBreakpoint : style}>
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
 * - Breakpoint
 * 
 * Will display the children within the section tag.
 */