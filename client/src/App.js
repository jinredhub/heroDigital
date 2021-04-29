
import React, { Component } from 'react';
import './App.css';

import checkSvg from './assests/check.svg';

class App extends Component {
    state = {
        formData: {
            firstName: '',
            lastName: '',
            email: '',
            org: '',
            euResident: 'none',
            advances: false,
            alerts: false,
            otherCommunications: false,
        },
        errorMessage: {
            firstName: null,
            lastName: null,
            email: null,
            euResident: null,
            atLeastOneCheckbox: null,
        },
    }

    inputHandler = (e, inputType) =>{
        console.log('inputType', inputType);

        if(inputType === 'firstName'){
            const val = e.target.value.trim();
            const formData = {...this.state.formData};
            formData.firstName = val;

            this.setState({
                formData: formData
            });
            
            // show/hide error message
            const errorMessage = {...this.state.errorMessage};

            if(val){
                errorMessage.firstName = false;
            }
            else{
                errorMessage.firstName = true;
            }

            this.setState({
                errorMessage: errorMessage
            });
        }
        else if(inputType === 'lastName'){
            const val = e.target.value.trim();
            const formData = {...this.state.formData};
            formData.lastName = val;

            this.setState({
                formData: formData
            });

            // show/hide error message
            const errorMessage = {...this.state.errorMessage};

            if(val){
                errorMessage.lastName = false;
            }
            else{
                errorMessage.lastName = true;
            }

            this.setState({
                errorMessage: errorMessage
            });
        }
        else if(inputType === 'email'){
            const val = e.target.value.trim();
            const formData = {...this.state.formData};
            formData.email = val;

            this.setState({
                formData: formData
            });

            // show/hide error message
            const errorMessage = {...this.state.errorMessage};

            const patt = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
            const isValidEmail = patt.test(val);

            console.log('email val', isValidEmail);

            if(isValidEmail){
                errorMessage.email = false;
            }
            else{
                errorMessage.email = true;
            }

            this.setState({
                errorMessage: errorMessage
            });
        }
        else if(inputType === 'org'){
            const val = e.target.value;
            const formData = {...this.state.formData};
            formData.org = val;

            this.setState({
                formData: formData
            });
        }
        else if(inputType === 'euResident'){
            const val = e.target.value;
            const formData = {...this.state.formData};
            formData.euResident = val;

            this.setState({
                formData: formData
            });

            // show/hide error message
            const errorMessage = {...this.state.errorMessage};

            if(val !== 'none'){
                errorMessage.euResident = false;
            }
            else{
                errorMessage.euResident = true;
            }

            this.setState({
                errorMessage: errorMessage
            });
        }
        else if(inputType === 'advances'){
            const val = e.target.checked;
            console.log('checkbox val ', val);
            const formData = {...this.state.formData};
            formData.advances = val;

            this.setState({
                formData: formData
            });
        }
        else if(inputType === 'alerts'){
            const val = e.target.checked;
            const formData = {...this.state.formData};
            formData.alerts = val;

            this.setState({
                formData: formData
            });
        }
        else if(inputType === 'otherCommunications'){
            const val = e.target.checked;
            const formData = {...this.state.formData};
            formData.otherCommunications = val;

            this.setState({
                formData: formData
            });
        }
    }

    submitFormHandler = (e) =>{
        console.log('button pressed');
        // e.preventDefault();

        // form validation before submitting data
        const isValidFirstName = this.state.formData.firstName.length > 0 ? true : false;
        const isValidLastName = this.state.formData.lastName.length > 0 ? true : false;
        const patt = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        const isValidEmail = patt.test(this.state.formData.email);
        const isValisEuResident = this.state.formData.euResident != 'none' ? true : false;

        // check if at least one checkbox is selected
        const advancesCheckboxVal = this.state.formData.advances;
        const alertsCheckboxVal = this.state.formData.alerts;
        const otherCommunicationsCheckboxVal = this.state.formData.otherCommunications;

        let isValidCheckboxes = false;
        if(advancesCheckboxVal || alertsCheckboxVal || otherCommunicationsCheckboxVal){
            isValidCheckboxes = true;
        }

        if(isValidFirstName && isValidLastName && isValidEmail && isValisEuResident && isValidCheckboxes){
            console.log('submitting form');
        }
        else{
            console.log('not submitting form');
            e.preventDefault();

            // show error messages
            const errorMessage = {...this.state.errorMessage};
            errorMessage.firstName = !isValidFirstName;
            errorMessage.lastName = !isValidLastName;
            errorMessage.email = !isValidEmail;
            errorMessage.euResident = !isValisEuResident;
            errorMessage.atLeastOneCheckbox = !isValidCheckboxes;

            this.setState({
                errorMessage: errorMessage
            });
        }
    
    }

    resetFormHandler = (e) =>{
        console.log('resetting');
        e.preventDefault();

        this.setState({
            formData: {
                firstName: '',
                lastName: '',
                email: '',
                org: '',
                euResident: 'none',
                advances: false,
                alerts: false,
                otherCommunications: false,
            },
            errorMessage: {
                firstName: null,
                lastName: null,
                email: null,
                euResident: null,
                atLeastOneCheckbox: null,
            },
        });
    }

    render() {
        console.log('state======================', this.state);
        return (
            <div className='App'>
                <section>
                    <h1>Sign up for email updates</h1>
                    <div style={{color: 'gray'}}>*indicates Required Field</div>

                    <form method='POST' action="/user-info" encType='application/x-www-form-urlencoded'>
                        <div className='displayFlex'>
                            <div className='flex50'>
                                <div className='errorMessage'>{this.state.errorMessage.firstName ? 'First name is required' : null}</div>
                                <label htmlFor="firstName" className='textInputLabelText'>FIRST NAME*</label>
                                <input type="text"
                                    name='firstName'
                                    id='firstName'
                                    onChange={(ev)=>this.inputHandler(ev, 'firstName')}
                                    value={this.state.formData.firstName}
                                    className={this.state.errorMessage.firstName ? 'errorInputStyle' : null}
                                />
                            </div>

                            <div className='flex50'>
                                <div className='errorMessage'>{this.state.errorMessage.lastName ? 'Last name is required' : null}</div>
                                <label htmlFor="lastName" className='textInputLabelText'>LAST NAME*</label>
                                <input type="text"
                                    name='lastName'
                                    id='lastName'
                                    onChange={(ev)=>this.inputHandler(ev, 'lastName')}
                                    value={this.state.formData.lastName}
                                    className={this.state.errorMessage.lastName ? 'errorInputStyle' : null}
                                />
                            </div>
                        </div>
                        
                        <div className='displayFlex'>
                            <div className='flex50'>
                                <div className='errorMessage'>{this.state.errorMessage.email ? 'Email address is required' : null}</div>
                                <label htmlFor="email" className='textInputLabelText'>EMAIL ADDRESS*</label>
                                <input type="text"
                                    name='email'
                                    id='email'
                                    onChange={(ev)=>this.inputHandler(ev, 'email')}
                                    value={this.state.formData.email}
                                    className={this.state.errorMessage.email ? 'errorInputStyle' : null}
                                />
                            </div>

                            <div className='flex50'>
                                <div className='errorMessage'></div>
                                <label htmlFor="org" className='textInputLabelText'>ORGANIZATION</label>
                                <input type="text"
                                    name='org'
                                    id='org'
                                    onChange={(ev)=>this.inputHandler(ev, 'org')}
                                    value={this.state.formData.org}
                                />
                            </div>
                        </div>

                        <div>
                            <div className='errorMessage'>{this.state.errorMessage.euResident ? 'EU resident is required' : null}</div>
                            <label htmlFor="euResident" className='selectLabelText'>EU RESIDENT*</label><br/>
                            <select name="euResident" 
                                id="euResident"
                                onChange={(ev)=>this.inputHandler(ev, 'euResident')}
                                value={this.state.formData.euResident}
                                className={this.state.errorMessage.euResident ? 'errorInputStyle' : null}
                            >
                                <option value="none">- SELECT ONE -</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        
                        <div style={{paddingTop: '20px'}}></div>

                        {/* atLeastOneCheckbox */}
                        <div className='errorMessage'>{this.state.errorMessage.atLeastOneCheckbox ? 'One or more options are required' : null}</div>

                        <div className='displayFlex flexWrap-wrap'>    
                            <div className='checkboxDiv'>
                                <label htmlFor="advances" className='checkboxLabel'>
                                    <input type="checkbox" 
                                        name='advances'
                                        id='advances'
                                        onChange={(ev)=>this.inputHandler(ev, 'advances')} 
                                        checked={this.state.formData.advances}
                                    />
                                    <div className='faceCheckboxBox' style={{backgroundColor: this.state.formData.advances ? '#803093' : 'white'}}>
                                        {this.state.formData.advances ? <img src={checkSvg} alt="check"/> : null}
                                    </div>
                                    <div className='checkboxLabelText'>ADVANCES</div>
                                </label>
                            </div>

                            <div className='checkboxDiv'>
                                <label htmlFor="alerts" className='checkboxLabel'>
                                    <input type="checkbox" 
                                        name='alerts'
                                        id='alerts'
                                        onChange={(ev)=>this.inputHandler(ev, 'alerts')} 
                                        checked={this.state.formData.alerts}
                                    />
                                    <div className='faceCheckboxBox' style={{backgroundColor: this.state.formData.alerts ? '#803093' : 'white'}}>
                                        {this.state.formData.alerts ? <img src={checkSvg} alt="check"/> : null}
                                    </div>
                                    <div className='checkboxLabelText'>ALERTS</div>
                                </label>
                            </div>

                            <div className='checkboxDiv'>
                                <label htmlFor="otherCommunications" className='checkboxLabel'>
                                    <input type="checkbox" 
                                        name='otherCommunications'
                                        id='otherCommunications'
                                        onChange={(ev)=>this.inputHandler(ev, 'otherCommunications')} 
                                        checked={this.state.formData.otherCommunications}
                                    />
                                    <div className='faceCheckboxBox' style={{backgroundColor: this.state.formData.otherCommunications ? '#803093' : 'white'}}>
                                        {this.state.formData.otherCommunications ? <img src={checkSvg} alt="check"/> : null}
                                    </div>
                                    <div className='checkboxLabelText'>OTHER COMMUNICATIONS</div>
                                </label>
                            </div>
                        </div>

                        <div style={{paddingTop: '20px'}}></div>

                        

                        <div style={{paddingTop: '60px'}}></div>

                        <button type='submit' onClick={this.submitFormHandler} className='submitButton'>SUBMIT</button>
                        <button type='button' onClick={this.resetFormHandler} className='resetButton'>RESET</button>

                        <div style={{paddingTop: '60px'}}></div>

                    </form>

                </section>
            </div>
        );
    }
}

export default App;

