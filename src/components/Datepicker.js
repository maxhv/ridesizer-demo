import React from 'react';
import DatePicker from 'react-date-picker';
import UserDatapicker from '../classes/UserDatapicker';

import { connect } from 'react-redux';

import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

import { setUserInfo } from '../redux/actions/UserActions';

const userDatapicker = new UserDatapicker();

class Calendar extends React.Component {

    constructor(props) {

        super(props);

        this.onChange = this.onChange.bind(this);

    }

    // = add custom events to external component =
    componentDidMount() {

        userDatapicker.customize();

    }

    onChange(date) {

        if (date) {

            this.props.dispatch(setUserInfo(date, this.props.bike, this.props.unit));
            document.querySelector('.react-date-picker__button').classList.remove('error');

        }

    }

    render() {
        return (
            <div className="datepicker">
                <DatePicker
                    dateFormat="YYYY/MM/DD"
                    value={this.props.date}
                    onChange={date => this.onChange(date)}
                    maxDate={new Date()}
                    maxDetail='year'
                    view="year"
                    className="user-age"
                />
            </div>
        )
    }
}

// REDUX STATES
const mapStateToProps = (state) => {
    return {
        rangeValue: state.bike.rangeValue,
        date: state.user.date,
        unit: state.bike.unit,
        bike: state.bike.bike
    }
};

export default connect(mapStateToProps)(Calendar)