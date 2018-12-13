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
                <div className="signup-container">
                <form onSubmit={this.handleSubmit}>
                    <h1 className="signin">Join game time!</h1>
                    <p className="signin-m">Many strangers had played basketball games with each other. Create an account and you'll be on your way to join basketball games. </p>
                    {this.renderErrors()}
                    <label> 
                        <input placeholder="First Name" className="input-box" type="text" value={this.state.fname} onChange={this.update('fname')}/>
                    </label>
                    <br />
                    <label>
                        <input placeholder="Email Address" className="input-box" type="text" value={this.state.email} onChange={this.update('email')}/>
                    </label>
                    <br />
                    <label>
                        <input placeholder="Password" className="input-box" type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                    <br />
                    <label>
                        <input placeholder="City" className="input-box" type="type" value={this.state.city_name} onChange={this.update('city_name')}/>
                    </label>
                    <br />
                    <input height="40" className="submit-box" type="submit" value='Join To Play' />
                    <br />
                    <p className="switch">{this.props.navLink}</p>
                </form>

            </div>
            )
        }else{
            return(
            <div className="signin-container">
                <form onSubmit={this.handleSubmit}>
                    <h1 className="signin">Sign in stranger!</h1>
                    <p className="signin-m">It's good to have you back. Sign in here and sign up for your next tea time!</p>
                    {this.renderErrors()}
                    <label>
                        <input className="input-box" type="text" placeholder="Email Address" value={this.state.email} onChange={this.update('email')}/>
                    </label>
                    <br />
                    <label> 
                        <input className="input-box" type="password" placeholder="Password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                    <br />
                    <input className="submit-box"type="submit" value={this.props.formType} />
                    <br />
                    <p className="switch">{this.props.navLink}</p>
                </form>

            </div>
            )
        }
    
    }
}

export default SessionForm;