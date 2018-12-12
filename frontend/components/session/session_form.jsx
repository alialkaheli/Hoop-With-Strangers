import React from 'react';


class SessionForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
        city: "",
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
        let fname = ""
        let city = ""
        if(this.props.formType == 'signup'){
            fname = <label>
                    First Name: 
                    <input type="text" value={this.state.fname} onChange={this.update('fname')}/>
                </label>
            city = <label>
                    City: 
                    <input type="text" value={this.state.fname} onChange={this.update('fname')}/>
                </label>
        }
    
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    {fname}
                    <br />
                    <label>
                        Email: 
                        <input type="text" value={this.state.email} onChange={this.update('email')}/>
                    </label>
                    <br />
                    <label>
                        Password: 
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                    <br />
                    {city}
                    <br />
                    <input type="submit" value={this.props.formType} />
                </form>

            </div>
        )
    
    }
}

export default SessionForm;