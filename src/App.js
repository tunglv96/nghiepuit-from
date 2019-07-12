import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      textarea: '',
      sltGender: 1,
      rdLang: 'en',
      checkStatus: true
    }
  }

  onHandleChange = (event) => {
    // console.log(event.target.value);
    var target = event.target;
    var name= target.name;
    var value= target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8">
            <form onSubmit={this.onHandleSubmit}>
              <div className="form-group">
                <label>UserName</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="username"
                  onChange={this.onHandleChange}
                  value={this.state.username}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  name="password"
                  onChange={this.onHandleChange}
                  value={this.state.password}
                />
                <div className="form-group">
                    <label>TextArea</label>
                    <textarea 
                      className="form-control" 
                      rows="3"
                      name="textarea"
                      value={this.state.textarea}
                      onChange={this.onHandleChange}
                    >
                    </textarea>
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <select 
                    className="form-control" 
                    name="sltGender"
                    value={this.state.sltGender}
                    onChange={this.onHandleChange}  
                  >
                    <option value={0}>Nu</option>
                    <option value={1}>Nam</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input 
                        type="radio" 
                        className="form-check-input"
                        name="rdLang"
                        value="vi"
                        onChange={this.onHandleChange}
                        checked={this.state.rdLang === 'vi'}
                      />
                      vi
                    </label><br />
                    <label className="form-check-label">
                      <input 
                        type="radio" 
                        className="form-check-input"
                        name="rdLang"
                        value="en"
                        onChange={this.onHandleChange}
                        checked={this.state.rdLang === 'en'}
                      />
                      en
                    </label>
                  </div>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input 
                      type="checkbox" 
                      className="form-check-input" 
                      name="checkStatus" 
                      value={true} 
                      onChange={this.onHandleChange}
                      checked={this.state.checkStatus === true}
                    />
                        Status
                  </label>
                </div>
              </div>
              <input type="submit" className="btn btn-secondary" />&nbsp;
              <input type="reset" className="btn btn-warning" />
            </form>
          </div>
        </div>
    </div>
    );
  }
}

export default App;