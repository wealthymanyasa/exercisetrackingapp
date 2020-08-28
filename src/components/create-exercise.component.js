import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
//import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {

  constructor(props){
    super(props);

     this.onChangeUsername = this.onChangeUsername.bind(this);
     this.onChangeDescription = this.onChangeDescription.bind(this);
     this.onChangeDuration = this.onChangeDuration.bind(this);
     this.onChangeDate = this.onChangeDate.bind(this);
     this.onSubmit = this.onSubmit.bind(this);

      

    this.state = {
        username:'',
        description:'',
        duration: 0,
        date: new Date(),
        users: []

    }
  }
componentDidMount(){

  this.setState({
    
  })
}

    onChangeDescription(e) {
       this.setState({
         description:e.target.value
       });
    }
    onChangeDuration(e){
      this.setState({
        duration:e.target.value
      });
   }
   onChangeDate(date){ 
    this.setState({
      date:date
    });
 }
 onChangeUsername(e){
  this.setState({
    username:e.target.value
  });

}

onSubmit(e){
  e.preventDefault();

  const exercise = {
username: this.state.username,
description:this.state.description,
duration:this.state.duration,
date:this.state.duration
  }

  console.log(exercise)

  window.location = '/';
}

    

    render(){
        return(
                <div>
                <h3 >Create new exercise log</h3>
                   <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                       <label>username</label>
                          <select ref="userInput"
                              required 
                              className="form-control"
                              value={this.state.username}
                              onChange={this.onChangeUsername}>
                              {
                                    this.state.users.map(function(user){
                          return <option
                           key=
                           {user}
                          value={user}> {user}
                    
                          </option>;
                        }) 
                          }

                           </select>

                    </div>
                    <div className="form-group">
                    <label>description</label>
                    <input type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.state.onChangeDescription}/>
                    </div>
                    <div className="form-group">
                    <label>duration in minutes</label>
                    <input type="text"
                           className="form-control"
                            value={this.state.duration}
                            onChange={this.state.onChangeDuration}/>
                    </div>
                    <div className="form-group">
                    <label >date</label>
                        <div>
                        <DatePicker
                        selected={this.state.date}
                        onChange={this.onChangeDate}
                        />
                        </div>     
                     </div>
                     <div className="form-group">
  
                    <input type="submit"
                           className="form-group btn btn-primary"
                            value="create"
                                  
                            />
                    </div>
                 
                
                </form>
                </div>
        
        )
             
            
        
    }
}
