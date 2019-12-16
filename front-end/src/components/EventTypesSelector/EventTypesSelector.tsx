import * as React from 'react';
import { RootState } from '../../store/reducers/index.reducers';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/filters.actions';
import { Dispatch, bindActionCreators } from 'redux';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import { transformString } from '../../utils/strings.utils';

interface EventTypesProps {
    availableFilters : string[],
    selectedFilters : string[],
    actions : any;
}

const FiltersDiv = styled.div`
  width : 100%;
  display : flex;
  justify-content : space-around;
  flex-wrap : wrap;
  align-items : center;
  border : 1px solid lightgray;
  padding : 2%;
`

class EventTypesSelector extends React.Component<EventTypesProps, {}> {

    public componentDidMount = async () : Promise<void> => {
        await this.props.actions.requestAvailableFilters();
    }

    public render = () : React.ReactNode => {
        const options : Array<React.ReactNode> = this.props.availableFilters.map((filter : string) => (
            <Form.Check 
                inline={true} 
                type="checkbox" 
                id={filter} 
                key={filter} 
                label={transformString(filter)} 
                checked={this.props.selectedFilters.includes(filter)} 
                onChange={() => this.handleChange(filter)}
            />
        ));
        return (
            <FiltersDiv>
                <Form>
                    <Form.Check 
                        inline={true} 
                        type="checkbox" 
                        label="All Event Types" 
                        checked={this.props.selectedFilters.length === this.props.availableFilters.length} 
                        onChange={() => this.handleChangeAll()}
                    />
                    <hr/>
                    {options}
                </Form>
            </FiltersDiv>
        )
    }

    private handleChange = (filter : string) : void => {
        if (this.props.selectedFilters.includes(filter)) {
            this.props.actions.removeFilter(filter);
        } else {
            this.props.actions.addFilter(filter);
        }
    }

    private handleChangeAll = () : void => {
        if (this.props.selectedFilters.length === this.props.availableFilters.length) {
            this.props.actions.removeAllFilters();
        } else {
            this.props.actions.resetFilters(this.props.availableFilters);
        }
    }

}

const mapStateToProps = (state: RootState, ownProps: object) => {
    return ({
        availableFilters : state.availableTypeFilters,
        selectedFilters : state.typeFilters,
    })
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(EventTypesSelector);