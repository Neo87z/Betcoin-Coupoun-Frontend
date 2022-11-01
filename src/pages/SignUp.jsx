import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import { ToastContainer, toast } from 'react-toastify';

import HeroImage from '../images/bet1.png';
import HeroImage2 from '../images/bet2.png';
import HeroImage3 from '../images/bet3.png';
import HeroImage4 from '../images/bet4.png';
import 'react-toastify/dist/ReactToastify.css';
export default class FormSubmission extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChnageAge = this.onChnageAge.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeSex = this.onChangeSex.bind(this);
    this.onSubmit = this.onSubmit.bind(this);



    this.state = {

      options: [],
      Full_Name: '',
      Email: '',
      Password: '',
      Age: '',
      Phone: '',
      Sex: '',
      categories: []

    };
  }

  onChangeFullName(e) {
    this.setState({
      Full_Name: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      Password: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      Email: e.target.value
    })
  }

  onChnageAge(e) {
    this.setState({
      Age: e.target.value
    })
  }
  onChangePhone(e) {
    this.setState({
      Phone: e.target.value
    })
  }

  onChangeSex(e) {
    this.setState({
      Sex: e.target.value
    })
  }






  onSelect(selectedList, selectedItem) {
    this.setState({
      categories: selectedList
    })


  }

  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.Full_Name)
    var Staus;
    const User = {

      ValidateToken: this.state.Email,
      WalletAddress: this.state.Full_Name



    };


    console.log(User)
    var StatusData = "";


    axios.post('https://datatrackerbetcoin.herokuapp.com/Merch/RegisterWallet', User)
      .then(res =>

        this.setState({ Age: res.data.Status }));



    if (this.state.Age == 'Fail') {
      toast.error('Invalid Coupon', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }

    if (this.state.Age == 'Coupon Redeemed') {
      toast.success('Coupon Redemeed', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      this.sleep(2000).then(r => {
        window.location = `/congratz`
      })


    }




  }
  render() {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">

        {/*  Site header */}


        {/*  Page content */}
        <main className="grow">

          {/*  Page illustration */}


          <section className="relative">
            <ToastContainer
              position="top-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                {/* Page header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                  <h1 className="h1">Congratulations</h1>
                </div>

                {/* Form */}
                <div className="max-w-sm mx-auto">

                  <div className="flex items-center my-6">
                    <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
                    <div className="text-gray-400">Enter Wallet Address (BSC)  </div>
                    <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
                  </div>
                  <form onSubmit={this.onSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">Wallet Address <span className="text-red-600">*</span></label>
                        <input value={this.state.Full_Name} onChange={this.onChangeFullName} id="full-name" type="text" className="form-input w-full text-gray-300" placeholder="Wallet Address" required />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">Coupon Code <span className="text-red-600">*</span></label>
                        <input value={this.state.Email} onChange={this.onChangeEmail} id="full-name" type="text" className="form-input w-full text-gray-300" placeholder="Coupon Code" required />
                      </div>
                    </div>


                    <div className="flex flex-wrap -mx-3 mt-6">
                      <div className="w-full px-3">
                        <button type="submit" style={{background:"#23894D"}} className="btn text-white  hover:bg-purple-700 w-full">REDEEM REWARD</button>
                      </div>
                    </div>
                  </form>
                  <div>
                    <br></br><br></br>
                    <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                      <img style={{ marginRight: '-1.5%' }} className="mx-auto" src={HeroImage} width="1024" height="504" alt="Hero" />
                    </div>
                    <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                      <img style={{ marginRight: '-1.5%' }} className="mx-auto" src={HeroImage2} width="1024" height="504" alt="Hero" />
                    </div>
                    <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                      <img style={{ marginRight: '-1.5%' }} className="mx-auto" src={HeroImage3} width="1024" height="504" alt="Hero" />
                    </div>
                    <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                      <img style={{ marginRight: '-1.5%' }} className="mx-auto" src={HeroImage4} width="1024" height="504" alt="Hero" />
                    </div>
                  </div>

                </div>


              </div>
            </div>
          </section>

        </main>

      </div>

    );
  }
}