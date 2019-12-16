import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store/reducers/index.reducers';
import Event from '../../models/Event.models'
import styled from 'styled-components';
import { Timeline, Event as TimelineEvent } from 'react-timeline-scribble';
import { Dispatch } from 'redux';
import { transformString } from '../../utils/strings.utils';

interface MyTimelineProps {
    currentPatient : string;
    typeFilters : string[];
    startDate : string;
    endDate : string;
    events : Event[] | null;
}

const ErrorMessage = styled.h2`
    color : red;
    overflow-wrap : normal;
    text-align : center;
`

const TimelineContainer = styled.div`
    height : 95%;
    width : 40%;
    overflow : scroll;
    padding-top : 2%;
`

class MyTimeline extends React.Component<MyTimelineProps, {}> {

    public render = () : React.ReactNode => {
        let content : React.ReactNode;
        if (this.props.events && this.props.events.length > 0) {
            const sortedEvents : Event[] = this.props.events.sort((obj1 : Event, obj2 : Event) => {
                if (obj1.timestamp < obj2.timestamp) {
                    return -1;
                } else {
                    return 1;
                }
            })
            const items : Array<React.ReactNode> = sortedEvents.map((event : Event) => (this.getContent(event)))
            content = (
                <Timeline>
                    {items}
                </Timeline>
            );
        } else {
            if (this.props.currentPatient === "") {
                content = <ErrorMessage>Please select the care recipient whose events you want to visualize.</ErrorMessage>
            } else if (this.props.typeFilters.length === 0) {
                content = <ErrorMessage>Please select at least one type of event.</ErrorMessage>
            } else if (this.props.events && this.props.events.length === 0) {
                content = <ErrorMessage>There aren't any events matching the filters</ErrorMessage>
            } else if (!this.props.events) {
                content = <ErrorMessage>Click on "Apply Filters"</ErrorMessage>
            } else {
                content = "";
            }
        }
        return (
            <TimelineContainer>
                {content}
            </TimelineContainer>
        )
    }

    private getContent = (event : Event) : React.ReactNode => {
        let infos : Array<React.ReactNode> = []
        const keysToAvoid : string[] = ["event_type", "timestamp", "care_recipient_id"];
        for (const [key, value] of Object.entries(event)) {
            if (key && value && !keysToAvoid.includes(key.toString())) {
                infos.push(<p key={key.toString()}><strong>{transformString(key.toString())} : </strong>{transformString(value.toString())}</p>);
            }
        }
        return (
            <TimelineEvent key={event.id} interval={new Date(event.timestamp).toUTCString()} title={transformString(event.event_type)}>
                {infos}
            </TimelineEvent>
        )
    }

}

const mapStateToProps = (state: RootState, ownProps: object) => {
    return ({
        currentPatient : state.patientId,
        typeFilters : state.typeFilters,
        startDate : state.startDate,
        endDate : state.endDate,
        events : state.events
    });
}

export default connect(mapStateToProps)(MyTimeline);