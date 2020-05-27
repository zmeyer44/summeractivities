import React, { Component } from 'react';
import Activity from './Activity';
import Title from './Title';
import { ActivityConsumer } from '../context'
export default class ActivityList extends Component {
    
    render() {
        return (

            <React.Fragment>
                <div className="py-5 mainpage">
                    <div className="container ">
                        <h2 className="text-center my-5 text-title text-blue">Projects</h2>
                        <div className="row">
                            <ActivityConsumer>
                                {(value) => {
                                    return value.activities.map( activity =>{
                                        return <Activity key={activity.id} activity={activity}/>
                                    });
                                }}
                            </ActivityConsumer>

                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}
