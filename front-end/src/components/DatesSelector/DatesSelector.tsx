import * as React from 'react';
import { RootState } from '../../store/reducers/index.reducers';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/dates.actions';
import { Dispatch, bindActionCreators } from 'redux';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';

interface DatesSelectorProps {
    currentStartDate : string,
    currentEndDate : string,
    actions : any;
}

const DatesDiv = styled.div`
  width : 100%;
  display : flex;
  justify-content : space-around;
  align-items : center;
`

const DatesSelector : React.FC<DatesSelectorProps> = (props : DatesSelectorProps) => {
    return (
        <DatesDiv>
            <div>
                <label>Start Date</label>
                <DatePicker 
                    selected={new Date(props.currentStartDate)} 
                    onChange={date => {
                        const newDate : string = date ? date.toISOString() : "";
                        if (newDate !== "") {
                            props.actions.setStartDate(newDate);
                        }
                    }}
                />
            </div>
            <div>
                <label>End Date</label>
                <DatePicker 
                    selected={new Date(props.currentEndDate)} 
                    onChange={date => {
                        const newDate : string = date ? date.toISOString() : "";
                        if (newDate !== "") {
                            props.actions.setEndDate(newDate);
                        }
                    }}
                />
            </div>
        </DatesDiv>
    )
}

const mapStateToProps = (state: RootState, ownProps: object) => {
    return ({
    currentStartDate : state.startDate,
    currentEndDate : state.endDate
})
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DatesSelector);