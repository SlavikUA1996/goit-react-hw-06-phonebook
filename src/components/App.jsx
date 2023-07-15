// import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const enterContacts = contacts.some(
      i =>
        (i.name === contact.name.toLowerCase() &&
          i.number === contact.number) ||
        i.number === contact.number
    );
    enterContacts
      ? alert(`${name} or ${number} is already in contacts`)
      : setContacts([contact, ...contacts]);
  };

  const changeFilterInput = e => {
    setFilter(e.target.value);
  };

  const findContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
    setFilter('');
  };

  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} changeFilterInput={changeFilterInput} />
      <ContactList contacts={findContacts()} deleteContact={deleteContact} />
    </section>
  );
};



// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//    componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState ) {
//     if (this.state.contacts !== prevState.contacts) {
//       console.log('renewed contacts');
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   formSubmit = ({ name, number }) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };
    
//     const enterContact = this.state.contacts.some(
//       i =>
//         (i.name === contact.name.toLowerCase() &&
//           i.number === contact.number) ||
//         i.number === contact.number
//     );
    
//     enterContact ? alert(`${name} is already in contacts`)
//       : this.setState(({ contacts }) => ({
//           contacts: [contact, ...contacts],
//         }));
//   };

//   changeFilterInput = e => {
//     this.setState({ filter: e.target.value });
//   };

//   findContacts = () => {
//     const { filter, contacts } = this.state;
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   render() {
//     const { filter } = this.state;
//     return (
//       <section>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.formSubmit} />
//         <h2>Contacts</h2>
//         <Filter filter={filter} changeFilterInput={this.changeFilterInput} />
//         <ContactList
//           contacts={this.findContacts()}
//           deleteContact={this.deleteContact}
//         />
//       </section>
//     );
//   }
// }