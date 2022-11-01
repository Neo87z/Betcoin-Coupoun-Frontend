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

    window.location = `/`






  }
  render() {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">

        {/*  Site header */}


        {/*  Page content */}
        <main className="grow">

          {/*  Page illustration */}

          <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="max-w-3xl mx-auto text-center">
                  {/* Top image */}
                  <div style={{ marginLeft: '100px' }} className="relative inline-flex flex-col mb-6" data-aos="fade-up">
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
                  {/* 404 content */}
                  <br></br> <br></br> <br></br> <br></br> <br></br> <br></br><br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
                  <h1 className="h3 mb-4" data-aos="fade-up" data-aos-delay="200">Congratulations!. You Will be AirDroped The BetCoin Tokens Shortly.</h1>
                  <form onSubmit={this.onSubmit}>
                    <div className="w-full px-3">
                      <button type="submit" style={{ background: "#23894D" }} className="btn text-white  hover:bg-purple-700 w-full">REDEEM AGAIN</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

        </main>

        {/*  Site footer */}


      </div>

    );
  }
}