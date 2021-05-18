import React, { PureComponent } from 'react';

import Person from '../Person/Person';

class  Persons extends PureComponent {
    
    // static getDerivedStateFromProps(props , state){
    //     console.log("getDerivedStateFromProps APP.js", props);
    //     return state;
    //   }

    // shouldComponentUpdate(nextProps,nextState) {
    //     console.log("shouldComponentUpdate Persons.js")  ;

    //     if(
    //       nextProps.persons !== this.props.persons ||
    //       nextProps.clicked !== this.props.clicked ||
    //       nextProps.changed !== this.props.changed 
    //       ){
    //     return true;
    //     }else {
    //       return false;
    //     }
    //    }
    
       getSnapshotBeforeUpdate(prevProps,prevState) {
    
        console.log("getSnapshotBeforeUpdate Persons.js",prevProps,prevState)  ;
        return {message : "message"};
       }
    
       componentDidUpdate(prevProps,prevState,snapshot){
        console.log("componentDidUpdate Persons.js", snapshot)  ;
      }

      componentWillUnmount() {
        console.log("componentWillUnmount Persons.js")  ;
      }

   render() {
   console.log("rendering Persons.js")  ;



   return this.props.persons.map((person, index) => {
     
    return(  
    <Person
    click = {() => this.props.clicked(index)} 
                
    change={(event) =>this.props.changed(event, person.name)}
    name={person.name} age={person.age} key={person.name} 
    />
    );
});
}}


export default Persons;