import * as React from 'react';
import { RootState } from '../../store/reducers/index.reducers';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/patients.actions';
import { Dispatch, bindActionCreators } from 'redux';
import Select, { ValueType, OptionTypeBase } from 'react-select';

interface PatientSelectorProps {
    currentPatient : string;
    patients : string[];
    actions : any;
}

class PatientSelector extends React.Component<PatientSelectorProps, {}> {

    public componentDidMount = () : void => {
        this.props.actions.requestPatients();
    }

    public render = () : React.ReactNode => {
        const options = this.props.patients.map((patient : string) => ({label : patient, value : patient}));
        if (this.props.currentPatient === "") {
            options.push({label : "Select a care recipient", value : ""});
        }
        return (
            <Select
                className="w-75"
                options={options as Array<{label : string, value : string}>}
                value={this.props.currentPatient === "" ? {label : "Select a care recipient", value : ""} : {label : this.props.currentPatient, value : this.props.currentPatient}} 
                onChange={(choice : ValueType<{label : string, value : string}>) => {
                    const patient : string = choice ? (choice as {label : string, value : string}).value : ""; 
                    this.props.actions.setPatient(patient);
                }}
            />
        )
    }

}

const mapStateToProps = (state: RootState, ownProps: object) => ({
    currentPatient : state.patientId,
    patients : state.patients
})

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PatientSelector);