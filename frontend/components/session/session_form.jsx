import React from 'react';


class SessionForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
        city_name: "",
        fname: "",
      };
      
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.form(user);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderErrors() {
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
    };

    render(){
        // let fname = ""
        // let city = ""
        // if(this.props.formType == 'signup'){
        //     fname = <label>
        //             First Name: 
        //             <input type="text" value={this.state.fname} onChange={this.update('fname')}/>
        //         </label>
        //     city = <label>
        //             City: 
        //             <input type="text" value={this.state.fname} onChange={this.update('fname')}/>
        //         </label>
        // }
    
        // return(
        //     <div>
        //         <form onSubmit={this.handleSubmit}>
        //             {fname}
        //             <br />
        //             <label>
        //                 Email: 
        //                 <input type="text" value={this.state.email} onChange={this.update('email')}/>
        //             </label>
        //             <br />
        //             <label>
        //                 Password: 
        //                 <input type="password" value={this.state.password} onChange={this.update('password')}/>
        //             </label>
        //             <br />
        //             {city}
        //             <br />
        //             <input type="submit" value={this.props.formType} />
        //         </form>

        //     </div>
        // )

        if(this.props.formType ==='Sign Up'){
            return(
                <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>SIGN UP</h1>
                    <label>
                        First Name: 
                        <input className="input-box1" type="text" value={this.state.fname} onChange={this.update('fname')}/>
                    </label>
                    <br />
                    <label>
                        Email: 
                        <input className="input-box1" type="text" value={this.state.email} onChange={this.update('email')}/>
                    </label>
                    <br />
                    <label>
                        Password: 
                        <input className="input-box1" type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                    <br />
                    <label>
                        City: 
                        <input className="input-box1" type="type" value={this.state.city_name} onChange={this.update('city_name')}/>
                    </label>
                    <br />
                    <input height="40" className="submit-box1" type="submit" value={this.props.formType} />
                </form>

            </div>
            )
        }else{
            return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1 className="signin">Sign in stranger!</h1>
                    <p className="signin-m">It's good to have you back. Sign in here and sign up for your next tea time!</p>
                    <label>
                        <input className="input-box" type="text" placeholder="Email Address" value={this.state.email} onChange={this.update('email')}/>
                    </label>
                    <br />
                    <label> 
                        <input className="input-box" type="password" placeholder="Password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                    <br />
                    <input className="submit-box"type="submit" value={this.props.formType} />
                </form>

            </div>
            )
        }
    
    }
}

export default SessionForm;