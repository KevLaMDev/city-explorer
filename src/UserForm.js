import React from 'react'

class UserForm extends React.Component {

  render() {
    return(
    <form onSubmit={(e) => this.props.handleSubmit(e)}>
      <label>Enter a City!
        <input type="text" name="city" onChange={(e) => this.props.getCityInfo(e.target.city.value)}></input>
      </label>
      <button>Submit</button>
    </form>
    )
  }
}

export default UserForm;
