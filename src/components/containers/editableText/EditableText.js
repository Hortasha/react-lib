import React, {Component} from 'react';

class EditableText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: (this.props.children === undefined) ? "" : this.props.children,
            edit: false
        }

        this.click = this.click.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    click() {
        this.setState({
            edit: true
        });
    }

    handleKeyPress(event) {
        if(event.key === 'Enter') {

            this.setState({
                edit: false
            });
        }
    }

    handleBlur() {
        this.setState({
            edit: false
        });
    }

    handleChange(event) {
        this.setState({
            data: event.target.value
        });
    }

    render() {

        const style = this.props.style;
        
        const classes = [
            "editableText"
        ];

        return(
            //Edit mode?
            this.state.edit
            
            ?

            //Edit mode
            <div className={classes.join(" ")} style={style}>
                <input
                    onKeyPress={this.handleKeyPress}
                    autoFocus={true}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    value={this.state.data}
                />
            </div>
            
            :

            //Non edit mode
            <div className={classes.join(" ")} style={style}>
                <p>
                    {(this.state.data === "") ? "<empty> " : this.state.data + " "}
                    <span onClick={this.click}>
                        <i className="fas fa-pencil-alt"></i>
                    </span>
                </p>
            </div>
        )
    }
}

export default EditableText;

/*
 * Component is text you can edit
 *
 * Props:
 * - children
 * - style
 *
 */