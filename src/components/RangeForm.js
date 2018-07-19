import React from 'react';
import { connect } from 'react-redux';
import { setRange, setRangeComplete, setInputComplete } from '../redux/actions/BikeActions';
import { setUserInfo } from '../redux/actions/UserActions';
import { setPlay360 } from '../redux/actions/FlagActions';

import SearchService from '../classes/SearchService';

import formatRange from '../functions/formatRange';

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const searchService = new SearchService();

class RangeForm extends React.Component {
    
    constructor(props) {
        super(props);

        this.onRangeChange = this.onRangeChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    // = save data to redux store, pause 360 play =
    onRangeChange(rangeValue) {

        this.props.dispatch(setRange(rangeValue, this.props.unit, this.props.color));
        
        if (this.props.play360) {
            this.props.dispatch(setPlay360({ play360: false }));
        }

    }

    onChangeComplete(rangeValue) {

        this.props.dispatch(setRangeComplete(rangeValue, this.props.unit, this.props.date))

        if (this.props.date) {
            this.props.dispatch(setUserInfo(this.props.date, this.props.bike, this.props.unit));  
        }        
        
    }

    render() {
        return (
            <div className="range-container" onSubmit={(event) => event.preventDefault()} >
                <p className="height-parameter">{this.props.parameter}</p>
                <div className="range">
                    <InputRange
                        value={(this.props.value)}
                        onChange={(value) => this.onRangeChange(value)}
                        onChangeComplete={(value) => this.onChangeComplete(value)}
                        onInputChange={this.onInputChange}
                    />
                </div>
            </div>
        )
    }
}

// REDUX STATES
const mapStateToProps = (state) => {
    return {
        render: state.bike.renderIndex,
        value: state.bike.rangeValue,
        unit: state.bike.unit,
        bike: state.bike.bike,
        date: state.user.date,
        play360: state.flags.play360
    }
};

export default connect(mapStateToProps)(RangeForm)