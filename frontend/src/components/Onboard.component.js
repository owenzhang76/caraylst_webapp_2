import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Navbar from "./Navbar.component";

export default class OnboardPage extends Component {
    constructor(props) {
        super(props);

        this.toggleHighlight = this.toggleHighlight.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            username: '',
            firstname: '',
            lastname: '',
            email: '',
            identitiesList: [],
        }
    };

    componentDidMount() {
        this.setState({
            username: this.props.registerFormInfo.username,
            password: this.props.registerFormInfo.password,
            email: this.props.registerFormInfo.email,
            firstname: this.props.registerFormInfo.firstname,
            lastname: this.props.registerFormInfo.lastname,
        }, () => {
            document.getElementById("section-2").style.display="none";
        })
    }

    toggleHighlight(event) {
        if (document.getElementById("identity-submit-button") == null) {
            console.log("inside if");
            let submitButton = document.createElement("button");
            submitButton.id = "identity-submit-button";
            submitButton.classList.add("identity-submit-button");
            submitButton.textContent = "Next";
            submitButton.addEventListener("click", this.handleSubmit);
            document.getElementById("button-container").appendChild(submitButton);
            
        }
        if (event.target.classList.contains("identity-button")) {
            event.target.classList.remove("identity-button");
            event.target.classList.add('identity-button-focus');
        } else {
            event.target.classList.remove("identity-button-focus");
            event.target.classList.add('identity-button');
        }
    }

    handleSubmit() {
        let chosenIdentities = document.getElementsByClassName("identity-button-focus");
        let testList = [];
        for (let i = 0; i < chosenIdentities.length; i++) {
            testList.push(chosenIdentities[i].textContent);
        };
        this.setState({
            identitiesList: testList,
        }, () => {
            console.log(this.state);
            // document.getElementById("section-1").style.display="none";
            document.getElementById("section-1").classList.add('animate__animated', 'animate__fadeOutUp');
            document.getElementById("section-1").addEventListener('animationend', () => {
                document.getElementById("section-1").style.display="none";
                document.getElementById("section-2").style.display="block";
            });
        })
       
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    };

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    };
    
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    };

    onChangeFirstname(e) {
        this.setState({
            firstname: e.target.value
        })
    };

    onChangeLastname(e) {
        this.setState({
            lastname: e.target.value
        })
    };

    // onSubmit(e) {
    //     e.preventDefault();
    //     const registerInfo = {
    //         username: this.state.username,
    //         password: this.state.password,
    //         email: this.state.email,
    //         firstname: this.state.firstname,
    //         lastname: this.state.lastname
    //     }
    //     console.log(registerInfo);
    //     this.props.passRegisterInfo(registerInfo);
    // }

    render() {
        return (
            <div class="onboard-main-container"> 
                <div id="section-1" class="section">
                    <div class="quiz-messages-container">
                        <div class="quiz-message-big animate__animated animate__fadeInUp animate__delay-1s">Hello there, {this.state.firstname}</div>
                        <div class="quiz-message-big animate__animated animate__fadeInUp animate__delay-2s">Please pick any identities that resonate with you.</div>
                    </div>
                    <div id="identities-container" class="identities-container animate__animated animate__fadeIn animate__delay-3s">
                        <div class="column animate__animated animate__fadeInUp animate__delay-4s">
                            <button id="c1" class="identity-button" onClick={this.toggleHighlight}>White</button>
                            <button id="c2" class="identity-button" onClick={this.toggleHighlight}>Destiny 2</button>
                        </div>
                        <div class="column "></div>
                        <div class="column animate__animated animate__fadeInUp animate__delay-4s">
                            <button id="c3" class="identity-button" onClick={this.toggleHighlight}>duck</button>
                        </div>
                        <div class="column animate__animated animate__fadeInUp animate__delay-4s">
                            <button id="c4" class="identity-button" onClick={this.toggleHighlight}>sleepy</button>
                            <button id="c5" class="identity-button" onClick={this.toggleHighlight}>terminator</button>
                        </div>
                        <div class="column animate__animated animate__fadeInUp animate__delay-4s">
                            <button id="c6" class="identity-button" onClick={this.toggleHighlight}>douche</button>
                        </div>
                        <div class="column"></div>
                        <div class="column animate__animated animate__fadeInUp animate__delay-4s">
                            <button id="c7" class="identity-button" onClick={this.toggleHighlight}>cheese fondue</button>
                            <button id="c8" class="identity-button" onClick={this.toggleHighlight}>depressed</button>
                        </div>
                    </div>
                    <div id="button-container" class="button-container"></div>      
                </div>
                <div id="section-2" class="sectio animate__animated animate__fadeInUp">
                    <div>This is section 2 bitch</div>
                </div>
                
            </div>
        );
    }
}