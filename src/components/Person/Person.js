import React, { Component }  from 'react';
//import classes from './Person.module.css'; rename css file also no need of eject
import classes from './Person.css';
//import Radium from 'radium';
//import styled from 'styled-components';

// const StyledDiv =   styled.div` 
import Aux from '../../hoc/Auxiliary';
import withClass from '../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../Context/auth-context';
  
// width : 60%;
// margin :16px auto;
// border : 1px solid #eee;
// box-shadow: 0 2px 3px #ccc;
// padding : 16px;
// text-align : center;

// @media (min-width: 500px) {
  
//    width : '450px';
  
// }`;

class Person extends Component {
  constructor(props){
   super(props);
   this.inputElementRef= React.createRef();

  }

  static contextType = AuthContext ;

  componentDidMount(){
     //this.inputelement.focus()
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }
  
//    const style = {
//        '@media (min-width: 500px)': {
//            width : '450px'
 //        }
//    }
    // const rnd = Math.random();
    // if(rnd > 0.7){
    //     throw new Error('something');
    //     }

  
  render() {
    console.log("rendering......person.js") ;
    return (
    
    // <div className = {classes.person}>
    //<React.Fragment> or <Fragment> similar to <Aux>
    <Aux> 
        
          {this.context.authenticated ? <p>Authenticated</p>: <p>plz login</p> }
        
       
        <p onClick = {this.props.click}> 
        {this.props.name} { Math.floor(Math.random()*30) } I am fool yss {this.props.age}</p>
        <input type='text' 
        ref = {this.inputElementRef} 
        //ref= {(inputEl) => {this.inputelement = inputEl}}
        onChange={this.props.change} value={this.props.name}
        />
    </Aux>
    // </div>
    )
    }
};

Person.propTypes = {
  click : PropTypes.func,
  name :  PropTypes.string,
  age :   PropTypes.number,
  change : PropTypes.func
}

export default withClass(Person,classes.person);

//export default Radium(person);