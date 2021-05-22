import React,{Component} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';
import { connect } from 'react-redux'
import {sfAction,rrAction} from '../actions'

const mapStateToProps = (state) => {
  return{
    searchField:state.sfReducer.searchField,
    robots: state.rrReducer.robots,
    isPending: state.rrReducer.isPending,
    error: state.rrReducer.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchRobot:(event)=>sfAction(dispatch,event.target.value),
    onRobotsRequest:() => dispatch(rrAction())
  }
}

class App extends Component {
    componentDidMount() {
      this.props.onRobotsRequest()
    }
    render() {
      const {searchField,onSearchRobot,robots,isPending} = this.props
      const filteredRobots = robots.filter((robot)=>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
      })
      if(isPending){
        return <h1 className='tc'>Loading!</h1>
      } else {
        return (
          <div className='tc'>
            <h1>RoboSearch</h1>
            <SearchBox searchrobot={onSearchRobot}/>
            <Scroll>
                <ErrorBoundary>
                   <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
          </div>
        );
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);