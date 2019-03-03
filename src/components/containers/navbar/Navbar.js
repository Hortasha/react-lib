import React, {Component} from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const style = this.props.style;
        
        const classes = [
            "navbar"
        ];

        return(
            <nav className={classes.join(" ")} style={style}>
                <a href="./">
                    <img src={this.props.url} alt="icon" />
                </a>
                <ul>
                    {this.props.children}
                </ul>
            </nav>
        );
    }
}

export default Navbar;


/*
 * Component contain all elements for navbar
 *
 * Props:
 * - children
 * - style
 */