import React,{Component,Suspense}from"react";import"./App.css";import{connect}from"react-redux";import{sfAction,rrAction}from"../actions";const CardList=React.lazy(()=>import("../components/CardList")),SearchBox=React.lazy(()=>import("../components/SearchBox")),Scroll=React.lazy(()=>import("../components/Scroll")),ErrorBoundary=React.lazy(()=>import("../components/ErrorBoundary")),mapStateToProps=r=>({searchField:r.sfReducer.searchField,robots:r.rrReducer.robots,isPending:r.rrReducer.isPending,error:r.rrReducer.error}),mapDispatchToProps=r=>({onSearchRobot:o=>sfAction(r,o.target.value),onRobotsRequest:()=>r(rrAction())});
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
        <div className='tc'> <h1>RoboSearch</h1> <Suspense fallback={<div>Chargement...</div>}> <SearchBox searchrobot={onSearchRobot}/> <Scroll> <ErrorBoundary> <CardList robots={filteredRobots}/> </ErrorBoundary> </Scroll> </Suspense> </div>
      );
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);