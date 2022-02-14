import React from 'react';
import Todo from './Todo';


class TodoContainer extends React.Component {
    
    componentDidMount() {
        this.props.getTodoData();
    }

    render() {
        return (<Todo state={this.props.state} addNewTodoData={this.props.addNewTodoData}/>
        )
    }
}
export default TodoContainer;