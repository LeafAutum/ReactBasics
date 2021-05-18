import React , {useEffect, useRef , useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../Context/auth-context';


const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authcontext = useContext(AuthContext);

  console.log('cockitpit context',authcontext.authenticated);
  useEffect(() => {
    console.log("useeffect cockpit") ;
    
    // setTimeout(()=>{
    //   alert("time out");
    // },1000);
    toggleBtnRef.current.click();
    return () =>{
      console.log("return useeffect cockpit")
    }

  },[]); 

  useEffect(() => {
    console.log("2 useeffect cockpit");
    return () =>{
      console.log("2 return useeffect");
    }}) ;

    const assignedClasses = [];
    let btnClass ='';
    
    if (props.showpersons){
        btnClass= classes.Red;
    }
    
    if( props.personsLength<=2 ) {
      assignedClasses.push(classes.red)
    } 
    
    if(props.personsLength <=1){
      assignedClasses.push(classes.bold)
    }
   
  
    return (
       
        <div className='classes.Cockpit'>
        <h1>i am fool {props.title}</h1>
        <p className={assignedClasses.join(' ')}> I am idiot!!</p>
        <button>hi</button>
        <hr></hr>
       
        <button className= {btnClass} ref={toggleBtnRef} alt ={props.showpersons.toString()} onClick={props.toggle}>
          Show persons</button>
        <AuthContext.Consumer>
        {context => <button onClick={context.login}>login</button> }
        </AuthContext.Consumer>
        </div>
    );
};

export default React.memo(Cockpit);
