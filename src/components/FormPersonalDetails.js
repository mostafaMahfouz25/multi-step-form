import React, { Component } from 'react';


export class FormPersonalDetails extends Component {

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }



    render() {
        const {values,handleChange} = this.props;
        return (
      
            <React.Fragment>
                <h1 className="bg-primary p-2 my-2 text-white border"> Enter Personal Details </h1>
                <input type="text" placeholder="Enter Your Ocubation" className="form-control"
                onChange={handleChange('ocupation')} 
                value={values.ocupation} />
                <br/>
                <input type="text" placeholder="Enter Your City" className="form-control"
                onChange={handleChange('city')} 
                value={values.city} />
                <br />
                <input type="text" placeholder="Enter Your Bio" className="form-control" 
                onChange={handleChange('bio')} 
                value={values.bio} />
                <br />
                <button  className="btn btn-success" style={styles.button}  onClick={this.continue} > Continue </button>
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

export default FormPersonalDetails
