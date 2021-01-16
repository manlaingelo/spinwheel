import React from 'react';

import Wheel from './components/wheel';

// import './styles.css';

export class App extends React.Component {
  constructor() {
    super();
    this.places = ['Pizzas', 'Sandwiches', 'Salads', 'Soup', 'Japanese food', 'Pastas'];
  }

  render() {
    return (
      <div className="App">
        <h1>What should you eat today?</h1>
        <Wheel items={this.places} />
      </div>
    );
  }
}

export default App;
















// ene zvger huuhcin test

// import './App.css';
// import React, { useState } from 'react'
// import { Wheels } from 'react-custom-roulette'
// import './wheel.css';
// import Wheel from './components/wheel';

// function App() {
//   const [mustSpin, setMustSpin] = useState(false);
//   // const [prizeNumber, setPrizeNumber] = useState(0);
//   const data = [
//     { option: 'test', style: { backgroundColor: 'white', textColor: 'black' } },
//     { option: 'test1' },
//     { option: 'test2' },
//     { option: 'test3' },
//     { option: 'test4' },
//     { option: 'test5' },
//     { option: 'test6' },
//     { option: 'test7' },
//     { option: 'test8' },
//     { option: 'Баярлалаа' },
//   ]
//   const handleSpinClick = () => {
//     // const newPrizeNumber = Math.floor(Math.random() * data.length)
//     // const newPrizeNumber =2;

//     // setPrizeNumber(newPrizeNumber);
//     setMustSpin(true);
//   }
//   return (
//     <div className="wheel-container">
//       <Wheels
//         mustStartSpinning={mustSpin}
//         prizeNumber={3}
//         data={data}
//         backgroundColors={['white']}
//         textColors={['black', 'grey']}
//         outerBorderColor={'#9a66c2'}
//         outerBorderWidth={5}
//         innerBorderColor={'#9a66c2'}
//         innerBorderWidth={2}
//         radiusLineColor={'#9a66c2'}
//         radiusLineWidth={2}
//         innerRadius={5}
//         fontSize={15}
//         perpendicularText={false}
//         textDistance={60}
//         onStopSpinning={() => {
//           setMustSpin(false)
//         }}
//       />
//       <button onClick={handleSpinClick}>SPIN</button>
//     </div>
//   );
// }

// export default App;
