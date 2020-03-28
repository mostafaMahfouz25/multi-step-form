import React, { Component } from 'react';


export class Confirm extends Component {

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }



    render() {
        const {values} = this.props;
        return (
      
            <React.Fragment>
                <h1 className="bg-primary p-2 my-2 text-white border"> Confirm Personal Details </h1>
                    
                <ul className="list-group">
                    <li className="list-group-item">{values.firstName}</li>
                    <li className="list-group-item">{values.lastName}</li>
                    <li className="list-group-item">{values.email}</li>
                    <li className="list-group-item">{values.ocupation}</li>
                    <li className="list-group-item">{values.city}</li>
                    <li className="list-group-item">{values.bio}</li>
                </ul>
                 
                <button  className="btn btn-success" style={styles.button}  onClick={this.continue} >Confirm & Continue </button>
                <button   className="btn btn-danger"  style={styles.button}  onClick={this.back} > Back </button>
                
            </React.Fragment>
      
        )
    }
}

const styles = {
    button:{
        margin:15
    }
}

export default Confirm
