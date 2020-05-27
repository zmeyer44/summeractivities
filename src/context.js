import React, { Component } from 'react';
import {summerActivity, detailActivity} from './data';
const ActivityContext = React.createContext();

 class ActivityProvider extends Component {
     state ={
         activities:[],
         detailActivity:detailActivity,
     };
     componentDidMount(){
         this.setActivities();
     }
     setActivities =()=>{
         let tempActivities =[];
         summerActivity.forEach(item =>{
             const singleItem = {...item};
             tempActivities = [...tempActivities,singleItem];
         })
         this.setState(()=>{
             return {activities:tempActivities};
         })
     };

     getItem = (id) => {
         const activity = this.state.activities.find(item => item.id ===id);
         return activity;
     };

     handleDetail = id => {
         const activity = this.getItem(id);
         this.setState(()=>{
             return {detailActivity:activity}
         })
     };
    
    
    render() {
        return (
            <ActivityContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                }}>
                {this.props.children}
            </ActivityContext.Provider>
        );
    }
}
const ActivityConsumer = ActivityContext.Consumer;
export {ActivityProvider,ActivityConsumer};