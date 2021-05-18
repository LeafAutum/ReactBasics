import React, { Component } from 'react';
//import logo from './logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
//import React , { useState }  from 'react';
//import Radium , {StyleRoot} from 'radium';
//import styled from 'styled-components';
import Errorboundary from '../components/Errorboundary/errorboundary';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../components/Context/auth-context';

// const StyleButton = styled.button`

//   background-color : ${props => props.alt ? 'salmon' : 'white'};
//   font:inherit;
//   border : 5px solid blue;
//   padding : 8px;
//   cursor: pointer;

//   &:hover {
//     background-color :  ${props => props.alt ? 'lightgreen' : 'red'};
//     color: yellow;
//   }
// `;
class App extends Component {

  constructor(props) {
    super(props);
    console.log('constructor app.js');
  }

   state={
      persons: [
       {name:'lee',age:'30'},
       {name:'Eun',age:'24'},
       {name:'Nam',age:'26'}
     ],
     otherstate : 'foollll',
     showpersons : false,
     showCockpit : true,
     changecounter:0,
     authenticated : false
   }
   //console.log(state.showpersons);
   //console.log(setthis.state)
    
   
    switchNameHandler = (newname) => {
   
     this.setState({
     persons: [
       {name:'lee jung',age:'30'},
       {name:'Eun woo',age:'24'},
       {name:newname, age:'26'}
     ]
   });
  }

  NameChangeHandler = (event,newname) => {
   
    const PersonIndex = this.state.persons.findIndex(p =>{
                     return  p.name === newname;})

    const person = {
        ...this.state.persons[PersonIndex]
        } 
    person.name= event.target.value;
    const persons = [...this.state.persons];
    persons[PersonIndex]= person;

    this.setState({
          persons: persons,
          changecounter :this.state.changecounter+1
  });
 }

 togglepersons = () =>{
   const doesShow = this.state.showpersons;
   this.setState({
     showpersons : !doesShow
   });
 }
 
 deleteperson = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({
      persons:persons
    });

 }

 static getDerivedStateFromProps(props , state){
   console.log("getDerivedStateFromProps APP.js", props);
   return state;
 }

 componentDidMount(){
  console.log("componentDidMount APP.js");
 }

 shouldComponentUpdate(nextProps,nextState) {
  console.log("shouldComponentUpdate APP.js")  ;
  return true;
 }

 getSnapshotBeforeUpdate(prevProps,prevState) {

  console.log("getSnapshotBeforeUpdate APP.js",prevProps,prevState)  ;
  return {message : "message"};
 }

 componentDidUpdate(prevProps,prevState,snapshot){
  console.log("componentDidUpdate APP.js", snapshot)  ;
}


loginHandler = () => {
  this.setState({authenticated : true})
};

//  componentWillMount(){
//   console.log("componentWillMount APP.js");
//  }

  render() {
    console.log("render method app.js");
    
    // const style = {
    //   backgroundColor : 'white',
    //   font:'inherit',
    //   border : '5px solid blue',
    //   padding : '8px',
    //   cursor: 'pointer',
    //   ':hover' : {
    //     backgroundColor : 'lightgreen',
    //     color: 'black'
    //   }
    // };
    let persons =null;

    if (this.state.showpersons){
      persons = (
         <div>
           <Persons persons ={this.state.persons} 
           clicked={this.deleteperson}
           changed ={this.NameChangeHandler}
           />
            {/* {this.state.persons.map((person,index) => {

                return <Errorboundary key = {index}>
                  
                  <Person click = {() => this.deleteperson(index)} 
                
                change={(event) =>this.NameChangeHandler(event, person.name)}
                name={person.name} age={person.age} />
                </Errorboundary>}
           )} */}
          </div> 
      );
      
    
      // style.backgroundColor = 'red';
      // style[':hover']= {

      //   backgroundColor : 'lightgreen',
      //   color : 'black'

      // }
    }

 
  return (
    //classes={classes.App}>
    <Aux>
      <button onClick= {() =>{this.setState({showCockpit : false})}}> REMOVE COCKPIT </button>
      <AuthContext.Provider value={{
        authenticated:this.state.authenticated,
        login:this.loginHandler
      }}>
      {this.state.showCockpit ?
      <Cockpit title= {this.props.appTitle} personsLength={this.state.persons.length} 
      showpersons={this.state.showpersons}
      toggle={this.togglepersons}/>: null
  }
      {persons}
      </AuthContext.Provider>
    </Aux> 
    
  );
  // return React.createElement('div',{className : 'App'},React.createElement('h1',null,'i am fool'));
  
}
}

export default withClass(App,classes.App);

// export default Radium(App);

// <StyleRoot>
// <div className="App">
//   <h1>i am fool</h1>
//   <p> I am idiot!!</p>
//  {/* <button style={style} onClick={() => this.switchNameHandler('nam do san')}>click me</button> */}
//   <hr></hr>
 
//   <button style={style} onClick={this.togglepersons}>Show persons</button>
//   {persons}
// </div>
// </StyleRoot>

// const App = props => {
//   const [this.state,setthis.state] = useState({
//      persons: [
//      {name:'lee',age:'30'},
//      {name:'Eun',age:'24'},
//      {name:'Nam',age:'26'}
//    ],
//    otherstate : 'foollll'
//  });
//  console.log(this.state);
//  //console.log(setthis.state)
 
//  const switchNameHandler = () => {
 
//    setthis.state({
//    persons: [
//      {name:'lee jung',age:'30'},
//      {name:'Eun woo',age:'24'},
//      {name:'Nam joon',age:'26'}
//    ]
//  })
 
//  };

/* <div>
<Person name= {this.state.persons[0].name} 
        age={this.state.persons[0].age}
        click={this.switchNameHandler.bind(this,'nam joo')}/>
<Person name= {this.state.persons[1].name} age={this.state.persons[1].age}
        change={this.NameChangeHandler}/>
<Person name= {this.state.persons[2].name} age={this.state.persons[2].age}/>
</div>  */