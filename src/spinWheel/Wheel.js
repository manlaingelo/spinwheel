import React from "react";
import { toast } from 'react-toastify';
// import axios from "axios";
// import '../../Assets/styles/wheel.css';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import css from "../index.css";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import PhoneIcon from "@material-ui/icons/Phone";
import InputAdornment from "@material-ui/core/InputAdornment";

const notify = (text) => {
  toast.warn(text, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
const notifyErr = (text) => {
  toast.error(text, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  });
};
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
export default class Wheel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      spin: false,
      prizeName: "Гар утас",
      telNumber: null,
      counter: 0,
      isOpenModal: false,
    };
    this.selectItem = this.selectItem.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.openModal=this.openModal.bind(this);
    this.closeModal=this.closeModal.bind(this);
    this.afterOpenModal=this.afterOpenModal.bind(this);

  }
  openModal() {
    setTimeout(() => {
      this.setState({
        isOpenModal: true,
      });
    }, 3200);
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
  closeModal(){
    this.setState({isOpenModal: false})
  }
  getSpinToken = async () => {
    // await axios.get(`/randomTest`, {telNumber: this.state.telNumber})
    //   .then((res) => {
    //     this.setState({
    //       spin: res.data.spin,
    //       prizeName: res.data.prizeName,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     notifyErr("Бүртгэлгүй утасны дугаар!");
    // });
    this.setState({
      spin: true,
      counter: 3,
    });
  };
  checkSpinToken(telephone) {
    console.log(telephone);
    if(telephone===null || telephone===''){
      notifyErr('Дугаараа оруулна уу');
    }
    else{
      this.setState({ telNumber: telephone });
      console.log(this.state.telNumber+"дугаарын эрх шалгагдаж байна");
      this.getSpinToken();
    }
    
  }
  selectItem() {
    if(this.state.spin && this.state.counter> 0){
      let reward=null;
      this.props.items.map((item, i) =>{
        if(item===this.state.prizeName){
          reward=i;
        }
        return true;
      });
      if (this.state.selectedItem === null) {
        // const selectedItem = Math.floor(Math.random() * this.props.items.length);
        const selectedItem = reward;
        if (this.props.onSelectItem) {
          this.props.onSelectItem(selectedItem);
        }
        this.setState({ selectedItem });
        this.setState({counter: this.state.counter-1});
        this.openModal();
        // this.state.counter=this.state.counter-1;

      } else {
        this.setState({ selectedItem: null });
        setTimeout(this.selectItem, 100);
      }
    }
    else{
      notify('Таньд эрх байхгүй!!!');
    }
  }
  handleChange(event) {
    this.setState({telNumber: event.target.value});
  }

  render() {
    const { items } = this.props;
    const { selectedItem } = this.state;
    const sector=160/items.length;
    const rewardImgStyle = {
      width: "200px",
      height: "200px",
    };
    const randomNumber= Math.ceil(Math.random() *sector) * (Math.round(Math.random()) ? 1 : -1);
    // console.log(items.length); 
    //Math.ceil(Math.floor(Math.random() *sector/2))
    //
    const wheelVars = {
      '--nb-item': items.length,
      '--selected-item': selectedItem,
      '--random': randomNumber,
    };
    // const wheelVars= this.state.isOpenModal===false ? beforeWheelVars : {'--nb-item': items.length,
    // '--selected-item': selectedItem,
    // };
    const spinning = selectedItem !== null ? 'spinning' : '';
    // console.log(Math.floor(Math.random() *items.length));
    return (
      <div className="wheel-container">
      <div className={`wheel ${spinning}`} style={wheelVars}>
        {items.map((item, index) => (
          <div className="wheel-item" key={index} style={{ "--item-nb": index }}>
            {item}
          </div>
        ))}
        <Modal
          isOpen={this.state.isOpenModal}
          style={customStyles}
          contentLabel="Reward Info"
          ariaHideApp={false}
        >
          Баяр хүргье. Та {this.state.prizeName} хожлоо.
          <img alt="" 
          src="https://media.wired.com/photos/5e9f56f143e5800008514457/1:1/w_1277,h_1277,c_limit/Gear-Feature-Apple_new-iphone-se-white_04152020.jpg" 
          style={rewardImgStyle}
          />
          <button onClick={this.closeModal.bind(this)}>Хаах</button>
        </Modal>
      </div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={this.selectItem}
        className={css.button}
      >
        Эргүүлэх
      </Button>
  
     <PhoneForm telNumber={this.state.telNumber} />
     <Button
      variant="contained"
      color="primary"
      size="large"
      className={css.button}
      onClick={() => this.checkSpinToken(this.state.telNumber)}
    >
      <Box fontWeight="fontWeightMedium">Эрх авах</Box>
    </Button>
      Таньд {this.state.counter} эрх байна.
      
    </div>
    );
  }
}

const PhoneForm = (props) => {

  const { register,handleChange, errors } = useForm();
  return (
    <div className="checker-container">
    <TextField
      className="text-field"
      name="telNumber"
      label="Утасны дугаар"
      readonly="true"
      value={props.telNumber || ""}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
            <InputAdornment position="start">
                <PhoneIcon />
            </InputAdornment>
        ),
    }}
    inputRef={register({
        required: {
            value: true,
            message: "Заавал бөглөнө үү!",
        },
        minLength: 8,
        maxLength: 8,
        pattern: {
            value: /^\d+$/,
            message: "wrong number",
        },
    })}
    error={!!errors.telNumber}
    />
    
    <small>
      {errors.telNumber && errors.telNumber.message}
    </small>
  </div>
  );
}
