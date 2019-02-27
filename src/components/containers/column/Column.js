import React, {Component} from 'react';

class Column extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const style = this.props.style;

        const classes = [
            this.props.col ? 'col-' + this.props.col : 'col-sm-12',
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
 * Component is used to split container into multible columns
 *
 * Props:
 * - col (string)
 * - style (object)
 * 
 * Will display the children within the section tag.
 */