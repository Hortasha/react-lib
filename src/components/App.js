import React, {Component} from 'react';
import Section from './containers/section/section';
import Column from './containers/column/column';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        //this.function = this.getData.bind(this);
    }


    render() {
        return(
            <Section>
                <Column columns={2} breakpoint={1000}>
                    <p>Hello</p>
                </Column>
                <Column columns={2} breakpoint={1000}>
                    <p>Hello</p>
                </Column>
            </Section>
        );
    }
}

export default App;