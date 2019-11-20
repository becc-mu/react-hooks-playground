import React, { useState } from 'react';
import { MainWrapper, Button } from './Main.style';

// class Main extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             toggle: false
//         };
//     }

const Main = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <MainWrapper>
            <h2>EX1_useState_basic_solution</h2>
            <p>{`the light is ${this.state.toggle ? 'ON' : 'OFF'}`}</p>
            <Button onClick={() => setToggle(!toggle)}>TOGGLE</Button>
        </MainWrapper>
    );
};

export default Main;
