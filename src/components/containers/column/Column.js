import React, {Component} from 'react';

class Column extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const style = this.props.style;

        const classes = [
            this.props.col ? 'col-' + this.props.col : 'col-xs-12',
            'column'
        ];

        return(
            <div className={classes.join(" ")} style={style}>
                {this.props.children}
            </div>
        );
    }
}

export default Column;


/*
 * Component is used to create column
 *
 * Props:
 * - col (string)
 * - style (object)
 * 
 * Will display the children within the tag.
 */