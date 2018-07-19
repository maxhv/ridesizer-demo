import React from 'react';
import Rotation from 'react-rotation';

import Bike360 from '../classes/Bike360';
import Shop from '../classes/Shop';

import 'react-tippy/dist/tippy.css';

import { connect } from 'react-redux';

class Module360 extends React.Component {

    constructor(props) {

        super(props);

        this.renderBike = this.renderBike.bind(this);
        this.renderButtons = this.renderButtons.bind(this);
    }

    renderBike = (bikeRender360) => {
        return <div className={`rotate-360-container ${this.state.load360 ? 'active' : 'disabled'}`}>
            {<Rotation
                autoPlay={this.props.play360}
                cycle={true}
                reverse={false}
                scroll={false}
                tabIndex={3}
                >
                {this.state.load360 ? bikeRender360.getImages() : [bikeRender360.getImages()[0]]}
            </Rotation>}
        </div>
    };

    render() {
        const bikeRender360 = new Bike360(this.props.bike, this.props.color);
        return (

            <div className="rotate-360">

                {this.renderBike(bikeRender360)}

            </div>
        )
    }
}

// REDUX STATES
const mapStateToProps = (state) => {
    return {
        load360: state.flags.load360,
        play360: state.flags.play360,
        color: state.bike.color,
        showWillLast: state.bike.showWillLast,
        date: state.user.date,
        bike: state.bike.bike,
    }
};

export default connect(mapStateToProps)(Module360)