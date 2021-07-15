import React from "react";
import styles from "../styles/Landing.module.css";
import { GrFacebookOption, GrTwitter, GrInstagram } from 'react-icons/gr';


export default class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            email: "",
            validemail: true,
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
                    <img
                        src="/logo.svg"
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
                                            Please provide a valid email address
                                        </i>
                                    </p>
                                </div>
                            </div>
                            <button
                                className={styles.notify}
                                onClick={()=>{
                                    this.checkmail(this.state.email);
                                }}
                            >
                                Notify Me
                            </button>
                        </div>
                        <div className={styles.desktoperror}>
                            <p className={styles.validemail} style={{display:this.state.validemail?"none":"flex"}}>
                                <i>
                                    Please provide a valid email address
                                </i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.details}>
                    <img 
                        src="/illustration-dashboard.png"
                        alt="dashboard"
                        className={styles.dashboard}
                    />
                </div>
                <div className={styles.footer}>
                    <div className={styles.socialcontainer}>
                        <a href="#"
                            className={styles.social}
                        >
                            <GrFacebookOption />
                        </a>
                        <a href="#"
                            className={styles.social}
                        >
                            <GrTwitter />
                        </a>
                        <a href="#"
                            className={styles.social}
                        >
                            <GrInstagram />
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