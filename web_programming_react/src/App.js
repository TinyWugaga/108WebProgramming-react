import React from 'react';
import {Axios} from './config/axios'

import StudentList from './student-list.jsx'

export default class ReactApp extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {students: []};
      }
 
    componentDidMount() {
        let _this = this;
        Axios.get('/students')
          .then(function (response) {
             console.log(response);
            _this.setState({students: response.data});
          })
          .catch(function (error) {
            console.log(error);
          });
    }
 
    render() {
        const students = this.state.students
        return (
                <div>
                  <StudentList key={students.student_id} students={students}/>
                </div>
            )
    }
}