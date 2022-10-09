import React, { Component } from "react";
import PropTypes from "prop-types";
class Phonebook extends Component {
  state = {
    name: "",
    phone: "",
  };
  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: "", phone: "" });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Имя
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              value={this.state.name}
              onChange={this.handleChange}
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
            Phone
            <input
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
Phonebook.propTypes = {
  onSubmit: PropTypes.func,
};
export default Phonebook;
