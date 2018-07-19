import React from 'react';

import { setEmailDatabase } from '../redux/actions/UserActions';
import { showSubmitModal } from "../redux/actions/FlagActions";

import axios from 'axios';

import 'react-responsive-modal/lib/react-responsive-modal.css';

import { connect } from 'react-redux';

class FormEmail extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.sendRequest = this.sendRequest.bind(this);

        this.state = { 
            value: '',
            id: 0
        };
    }

    // = send user id to server function =
    sendRequest() {        

        const user = {
            id: this.state.id
        }

        axios.post(`/api/form/${user.id}`, { user },        
            { headers: {

                'Authorization': '',
                'Content-Type': 'application/json',
            }})
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error.response)
            });
            
    }

    // = send user id to server =
    onSubmit(event) {

        event.preventDefault();

        if (this.props.date) {        
            this.props.dispatch(setEmailDatabase({ email: this.state.value }));
            this.props.dispatch(showSubmitModal({showSubmit: true}));
            document.querySelector('.react-date-picker__button').classList.remove('error');

            this.sendRequest();

            this.setState(() => {
                return {
                    value: ''
                }
            })

        } else {
            document.querySelector('.react-date-picker__button').classList.add('error');
        }

    }

    onChange(event) {

        event.persist();

        this.setState(() => {
            return {
                value: event.target.value,
                id: this.props.id
            }
        })
    }

    render() {
        return (
            <form className="email-form" onSubmit={this.onSubmit}>
                <div className="input-email">
                    <input
                        type="email"
                        value={this.state.value}
                        onChange={this.onChange}
                        pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                        placeholder='ENTER EMAIL'
                        required
                    />
                    <input type="text" hidden readOnly value={this.state.id} />
                    <button>{this.props.submitText || 'SUBMIT'}</button>
                </div>
            </form>            
        );
    }
}

// REDUX STATES
const mapStateToProps = (state) => {
    return {
        email: state.user.email,
        date: state.user.date,
        showSubmit: state.flags.showSubmit,
        id: state.user.user.id
    }
};

export default connect(mapStateToProps)(FormEmail);