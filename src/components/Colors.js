import React from 'react';

import { setColorDatabase } from '../redux/actions/BikeActions';
import { connect } from 'react-redux';

class Colors extends React.PureComponent {

    constructor(props) {
        super(props);
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(event) {

        this.props.dispatch(setColorDatabase(event, this.props.bike));

    }

    // = generate bike colors options =
    render() {
        return (
            <div className="colors">
                <div className="colors-container">
                    {this.props.bike.colors.map((color, index) => {
                        let classColor;
                        index === 0 ? classColor = `color active ${color}` : classColor = `color ${color}`;
                        return <button key={color} onClick={this.changeColor} data-color={color} data-index={index} className={classColor} />
                    })
                    }
                </div>
            </div>
        )
    }
}

// REDUX STATES
const mapStateToProps = (state) => {
    return {
        bike: state.bike.bike
    }
};

export default connect(mapStateToProps)(Colors);