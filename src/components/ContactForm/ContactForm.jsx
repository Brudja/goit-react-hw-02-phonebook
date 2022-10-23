import { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: this.props.contacts.name,
    number: this.props.contacts.number
  };

  clearInput = event => {
    event.preventDefault();
    this.props.submit(this.state.name);
    
    // this.setState({
    //   name: '',
    //   number: '',
    // });
  };



  render() {
    return (
      <form onSubmit={this.clearInput}>
        <input
          // value={this.state.name}
          type="text"
          name="name"
          onChange={this.props.chengeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <br/>
        <input
        // value={this.state.number}
          type="tel"
          name="number"
          onChange={this.props.chengeName}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <br/>
        <button style={{
          color:"green",
          backgroundColor: "gray",
        }} type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes={
  contacts: PropTypes.arrayOf(PropTypes.shape({name:PropTypes.string, number:PropTypes.string})).isRequired,
  chengeName: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
}