import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import JSPDF from 'jspdf';

import { showSubmitModal } from '../redux/actions/FlagActions';
import formatDate from '../functions/formatDate';

import Bike360 from "../classes/Bike360";

import { connect } from 'react-redux';

import 'react-responsive-modal/lib/react-responsive-modal.css';
import Modal from 'react-responsive-modal/lib/css';

class PDFGenerator extends Component {
    constructor(props) {
        super(props);
        this.printDocument = this.printDocument.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    // HTML -> Canvas -> Image -> PDF
    printDocument() {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new JSPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save("guardian-bikes.pdf");
            })
            ;
    }

    onClose() {
        this.props.dispatch(showSubmitModal({ showSubmit: false }));
    }

    render() {
        return (
            <div className="pdf-modal">
                <Modal
                    open={this.props.showSubmit}
                    onClose={this.onClose}
                    little>
                    <div id="divToPrint" className="pdf-print">
                        <div className="pdf-print-header">
                            <img src="i/logo.png" alt="logo"/>
                            <h3>Success!</h3>    
                        </div>
                        <div className="pdf-container">
                            <div className="pdf-reccomend">                              
                                <h3>Current bike</h3>                                                                                           
                                <div>
                                    <span>Wheel:</span>
                                    <span>{this.props.bike.wheel}"</span>
                                </div>
                                <div>
                                    <span>Color:</span>
                                    <span>{this.props.bike.color}</span>
                                </div>
                                <h3>User info</h3>
                                {formatDate(this.props.date).month !== 'undefined' && 
                                    <div>
                                        <span>Birth month:</span>
                                        <span>{formatDate(this.props.date).month}</span>
                                    </div> 
                                }
                                <div>
                                    <span>Email:</span>
                                    <span>{this.props.email}</span>
                                </div>
                            </div>
                            <div className="pdf-image">
                                <h3>{this.props.bike.wheel} inch bike</h3>
                                {new Bike360(this.props.bike, this.props.bike.color).getImages()[0]}
                            </div>
                        </div>             
                    </div>
                </Modal>
            </div>
        );
    }
}

// REDUX STATES
const mapStateToProps = (state) => {
    return {
        email: state.user.email,
        date: state.user.date,
        value: state.bike.rangeValue,
        showSubmit: state.flags.showSubmit,
        unit: state.bike.unit,
        bike: state.bike.bike
    }
};

export default connect(mapStateToProps)(PDFGenerator);