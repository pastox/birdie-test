import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PatientSelector from '../PatientSelector/PatientSelector';
import DatesSelector from '../DatesSelector/DatesSelector';
import EventTypesSelector from '../EventTypesSelector/EventTypesSelector';
import { Button } from 'react-bootstrap';
import * as actions from '../../store/actions/events.actions';
import { Dispatch, bindActionCreators } from 'redux';
import { RootState } from '../../store/reducers/index.reducers';
import Event from '../../models/Event.models';

interface ParametersSelectionProps {
    currentPatient : string;
    typeFilters : string[];
    startDate : string;
    endDate : string;
    actions : any;
}

const ParametersContainer = styled.div`
    width : 40%;
    height : 95%;
    display : flex;
    flex-direction : column;
    justify-content : space-around;
    align-items : center;
    overflow : scroll;
`

class ParametersSelection extends React.Component<ParametersSelectionProps, {}> {

    public render = () : React.ReactNode => {
        return (
            <ParametersContainer>
                <PatientSelector/>
                <DatesSelector/>
                <EventTypesSelector/>
                <Button variant="primary" onClick={() => this.handleButtonClick()}>Apply filters</Button>
            </ParametersContainer>
        )
    }

    private handleButtonClick = () => {
        if (this.props.currentPatient !== "") {
            this.props.actions.requestEvents(this.props.currentPatient, this.props.typeFilters, this.props.startDate, this.props.endDate);
        }
    }

}

const mapStateToProps = (state: RootState, ownProps: object) => {
    return ({
        currentPatient : state.patientId,
        typeFilters : state.typeFilters,
        startDate : state.startDate,
        endDate : state.endDate
    });
}

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => ({
    actions : bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ParametersSelection);