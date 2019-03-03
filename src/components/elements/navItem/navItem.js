import React, {Component} from 'react';

class NavItem extends Component {

    render() {
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
 * - children
 * - url
 *
 */