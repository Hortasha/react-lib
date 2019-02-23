import React, {Component} from 'react';
import Section from './containers/section/section';

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
                <h1>My React App</h1>
            </Section>
        );
    }
}

export default App;