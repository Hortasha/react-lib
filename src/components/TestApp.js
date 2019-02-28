import React, {Component} from 'react';
import Section from './containers/section/section';
import Column from './containers/column/column';
import Navbar from './containers/navbar/navbar';
import NavItem from './elements/navItem/navItem';
import EditableText from './containers/editableText/editableText';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return(
            <Section>
            </Section>
        );
    }
}

export default App;