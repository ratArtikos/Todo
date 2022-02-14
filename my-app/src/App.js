import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar/Navbar';
import TodoContainer from './components/Content/Todo/TodoContainer';
import HomePage from './components/Content/HomePage/HomePage';
import HeaderContainer from './components/Header/HeaderContainer';

class App extends React.Component {

  render() {
    return (
      <div className='App-wrapper'>
        <HeaderContainer />
        <Nav />
        <div className='App-wrapper-content'>
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='/todo' element={<TodoContainer state={this.props.state} getTodoData={this.props.getTodoData} addNewTodoData={this.props.addNewTodoData}  store={this.props.store}/>} />
        </Routes>
        </div>
      </div>
    );
  }
}


export default App;


