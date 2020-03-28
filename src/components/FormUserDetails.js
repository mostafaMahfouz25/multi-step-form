import React, { Component } from 'react';


export class FormUserDetails extends Component {

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const {values,handleChange} = this.props;
        return (
    
                <React.Fragment>
                    <h1 className="bg-primary p-2 my-2 text-white border">Enter User Details</h1>
                    <input type="text" placeholder="Enter Your First Name" className="form-control" 
                    onChange={handleChange('firstName')} 
                    value={values.firstName} />
                    <br/>
                    <input type="text" placeholder="Enter Your Last Name"    className="form-control"
                    onChange={handleChange('lastName')} 
                    value={values.lastName} />
                    <br />
                    <input type="text" placeholder="Enter Your Email"   className="form-control"
                    onChange={handleChange('email')} 
                    value={values.email} />
                    <br />
                    <button className="btn btn-success" style={styles.button}  onClick={this.continue} > Continue </button>
                    
                </React.Fragment>
           
        )
    }
}

const styles = {
    button:{
        margin:15
    }
}

export default FormUserDetails
