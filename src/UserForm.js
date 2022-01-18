import React from 'react'

class UserForm extends React.Component {

  render() {
    return(
    <form onSubmit={(e) => this.props.handleSubmit(e.target.city.value)}>
      <label>Enter a City!
        <input type="text" name="city"></input>
      </label>
      <button>Submit</button>
    </form>
    )
  }
}

export default UserForm;
