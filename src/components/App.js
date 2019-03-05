import React, {Component} from 'react';
import Section from './containers/section/section';
import Column from './containers/column/column';
import Navbar from './containers/navbar/navbar';
import EditableText from './containers/editableText/editableText';
import NavItem from './elements/navItem/navItem';
import Button from './elements/button/button';
import Input from './elements/input/input';
import Link from './elements/link/link';
import Para from './elements/para/para';
import Title from './elements/title/title';
import Picture from './elements/picture/picture';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.test = this.test.bind(this);
    }

    test(event, para1) {
        console.log("Adding numbersgit " + para1);
    }

    render() {
        return(
            <Section fluid={true}>
                <Navbar url={"https://via.placeholder.com/150"}>
                    <NavItem url={"#1"}>Nav 1</NavItem>
                    <NavItem url={"#2"}>Nav 2</NavItem>
                    <NavItem url={"#3"}>Nav 3</NavItem>
                </Navbar>
                <Column col="sm-6">
                    <EditableText>Editable</EditableText>
                    <Button method={this.test} para={[10]}>Hello</Button>
                    <Input regex={/^[a-z]{3}$/i}></Input>
                </Column>
                <Column col="sm-6">
                    <Link url="//www.vg.no/">Link</Link>
                    <Para>This is text in a paragraph</Para>
                    <Title>Super title</Title>
                    <Picture url="https://cdn.britannica.com/s:300x300/55/174255-004-9A4971E9.jpg" alt="this is a cow" />
                </Column>
            </Section>
        );
    }
}

export default App;