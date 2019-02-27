import React, {Component} from 'react';

class NavItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const style = this.props.style;
        
        const classes = [
        ];

        return(
            <li>
                <a href={this.props.url}>{this.props.children}</a>
            </li>
        );
    }
}

export default NavItem;

/*
 * Component is a selection in navbar
 *
 * Props:
 * - url (string)
 * - style (object)
 *
 * Will display the children within the tag.
 */