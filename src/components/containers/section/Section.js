import React, {Component} from 'react';

class Section extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const style = this.props.style;
        
        const classes = [
            this.props.fluid ? 'container-fluid' : 'container',
            'section'
        ];

        return(
            <section className={classes.join(" ")} style={style}>
                <div className="row">
                    {this.props.children}
                </div>
            </section>
        );
    }
}

export default Section;


/*
 * Component is inteded to be used as a container for a section of webpage.
 *
 * Props:
 * - fluid (true or false)
 * - style (object)
 *
 * Will display the children within the tag.
 */