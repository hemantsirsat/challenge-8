import React from "react";
import Image from "next/image";

import styles from "../styles/Landing.module.css";
import { GrFacebookOption, GrTwitter, GrInstagram } from 'react-icons/gr';

import Logo from "../public/logo.svg";
import Daskboard from "../public/illustration-dashboard.png";

export default class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            email: "",
            validemail: true,
            maillength: 0,
        }
    }

    checkmail=(mail)=>{
        if(mail.includes("@")){
          this.setState({
            validemail: true
          })
        }
        else{
          this.setState({
            validemail: false
          })
        }
      }

    render() {
        
        const validinput = styles.inputcontainer;
        const invalidinput = styles.errorinputcontainer;

        return(
            <div className={styles.container}>
                <div className={styles.heading}>
                    <Image
                        src={Logo}
                        alt="ping logo"
                        className={styles.logo}
                    />
                    <p className={styles.launch}>
                        We are launching <span className={styles.soon}>soon!</span>
                    </p>
                    <p className={styles.subscribe}>
                        Subscribe and get notified
                    </p>
                    <div className={styles.formcontainer}>
                        <div className={styles.form}>
                            <div className={styles.input}>
                                <input type="text" name="email" id="email" value={this.state.email} onChange={mail=>this.setState({email:mail.target.value})} className={this.state.validemail?validinput:invalidinput} placeholder="Your email address"/>
                                <div className={styles.mobileerror}>
                                    <p className={styles.validemail} style={{display:this.state.validemail?"none":"flex"}}>
                                        <i>
                                            {this.state.email.length>0?"Please provide a valid email address":"Whoops! It looks like you forgot to add your email"}
                                        </i>
                                    </p>
                                </div>
                            </div>
                            <button
                                className={styles.notify}
                                onClick={()=>{
                                    this.checkmail(this.state.email);
                                }}
                                style={{marginTop: this.state.validemail?"-0.5rem":"1rem"}}
                            >
                                Notify Me
                            </button>
                        </div>
                        <div className={styles.desktoperror}>
                            <p className={styles.validemail} style={{display:this.state.validemail?"none":"flex"}}>
                                <i>
                                    {this.state.email.length>0?"Please provide a valid email address":"Whoops! It looks like you forgot to add your email"}
                                </i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.details}>
                    <div className={styles.dashboard}>
                        <Image
                            src={Daskboard}
                            alt="dashboard"
                            // layout="fill"
                            
                        />
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.socialcontainer}>
                        <a href="#"
                            className={styles.social}
                        >
                            <GrFacebookOption size={15}/>
                        </a>
                        <a href="#"
                            className={styles.social}
                        >
                            <GrTwitter size={15}/>
                        </a>
                        <a href="#"
                            className={styles.social}
                        >
                            <GrInstagram size={15}/>
                        </a>
                    </div>
                    <div className={styles.copyright}>
                        <p>
                            &#169; Copyright ping. All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}