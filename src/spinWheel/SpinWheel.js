import React from 'react';
import history from "../Controller/history";
import Wheel from './Wheel';
import { ToastContainer, toast } from 'react-toastify';
import '../wheel.css';
import 'react-toastify/dist/ReactToastify.css';

var prize=history.location.state?.prize;
// const eventID=history.location.state?.eventId;
if(prize===undefined){
  prize = {
    "name":
    [
        "Гар утас",
        "Баярлалаа",
        "Баярлалаа",
        "Чихэвч",
        "Баярлалаа",
        "Бал",
        "Чихэвч",
        "Баярлалаа",
    ],
    "total": 
    [
        1,
        5,
        50,
        300
    ],
    "pic": 
    [
        "=djashvfye2eyhf73",
        "=43hcysdiu27bncjk"
    ]
}
}
export class SpinWheel extends React.Component {
  constructor() {
    super();
    this.places = ['test','test1','test2','test3','test4','test5','test6','test7','test8','test9'];
  }
  notify = () => toast("Wow so easy !");
  render() {
    return (
      <div className="spinWheel">
      <ToastContainer/>
        <Wheel items={prize.name} reward={prize.name[2]}/>
        {/* <button onClick={this.notify}>Notify !</button> */}
      </div>
    );
  }
}

// export default () => {
//     return <SpinWheel />;
//   };
  
