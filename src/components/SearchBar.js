import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  /*
   * props only sends data downwards
   * but we can use a trick to fix that.
   */

  /*
   * 3 ways to solve the undefined error when using 'this' inside a function(arrow function seems to be the easiest)
   * 1. use the arrow function when creating the function inside the class
   * 2. bind the function in the constructor using (This is the method used in K.M.S(probably recommended))
   * this.functionName = this.functionName.bind(this)
   * 3. invoke the function using the arrow function inside jsx
   * {() => this.onFormSubmit()}
   */

  //this will throw an error if formatted like the next line without binding the function
  //onFormSubmit(event)
  onFormSubmit = event => {
    //called to prevent default behaviour, probably going to use this a lot
    event.preventDefault();
    //the onSubmit is defined inside the SearchBar, the name is not relevent unlike the onSubmit attached to the form below
    this.props.onSubmit(this.state.term);
  };

  //controlled elements is better. Learn how to refactor from uncontrolled to controlled
  /* Controlled element workflow
   * User types in input
   * Callback gets invoked
   * We call setState with the new value
   * Component rerenders
   * Input is told what its new value is coming from state
   */

  /*
   * As developers it is unrecommended to store information inside the html elements
   * Point is to centralize all the information inside the react component
   * Instead of looking at the dom, react devs look at the state object to find out what the values are
   * There really isn't a problem with storing info in the DOM - other frameworks do that and it works fine. But it is the react method
   *
   */

  render() {
    //do not add parenthesis to onInputChange unless you want it to be called all the time
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

/*
 * Let's use axios over fetch :)
 * axios runs in a much more predictable manner compared to fetch
 * codecrain appears to use axios
 */
