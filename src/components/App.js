import React from 'react';

// Components
import Tabs from "./Tabs";
import Datepicker from "../components/Datepicker";
import ModalEmbed from '../components/Modal';
import FormEmail from '../components/FormEmail';
import Rotate360 from './Rotate360';
import PDFGenerator from './PDFGenerator';
import Colors from './Colors';

// classes
import SearchService from '../classes/SearchService';

// redux actions
import { identify } from '../redux/actions/UserActions';
import { setBike, setUnit } from '../redux/actions/BikeActions';

// database
import '../firebase/firebase'

const searchService = new SearchService();

class App extends React.Component {

    constructor(props) {

        super(props);

        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.onOpenPDF = this.onOpenPDF.bind(this);
        this.onClosePDF = this.onClosePDF.bind(this);
        this.copyClipboard = this.copyClipboard.bind(this);

    }

    componentWillMount() {

        // = save default bike to redux storage =
        const bike = searchService.defaultBike();
        this.props.dispatch(setBike({ bike }));
        this.props.dispatch(setUnit({ unit: 'inches' }))

    }

    componentDidMount() {

        // = identify user - first visit or existing =
        this.props.dispatch(identify());

    }

    render() {
        return (
            <div className="container">
                <h1>Ridesizer</h1>
                <div className="ridesizer">              
                    <div className="bike-block">
                        <Rotate360 />
                    </div>
                    <div className="controls">
                        <Tabs />   
                        <div className="date-and-color">
                            <Datepicker />
                            <Colors />  
                        </div>  
                        <FormEmail />    
                    </div>
                </div>
                <footer>
                    <ModalEmbed />
                    <PDFGenerator />
                </footer>
            </div>
        )
    }
}

export default App;