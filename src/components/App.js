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
            <Section fluid={true}>
                <Navbar url={"https://via.placeholder.com/150"}>
                    <NavItem url={"#1"}>Nav 1</NavItem>
                    <NavItem url={"#2"}>Nav 2</NavItem>
                    <NavItem url={"#3"}>Nav 3</NavItem>
                </Navbar>
                
                <Column>
                    <EditableText></EditableText>
                </Column>
            </Section>
        );
    }
}

export default App;