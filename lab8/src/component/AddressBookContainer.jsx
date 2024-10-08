import React, { useState } from 'react';
import PageTitle from './PageTitle';
import AddressBook from './AddressBook';
import SearchInput from './SearchInput';

const AddressBookContainer = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  
  const filteredContacts = contacts.filter((contact) =>
    contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.includes(searchTerm)
  );

  return (
    <div className="address-book-container">
      <PageTitle title="Address Management App" />

      <SearchInput searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      <AddressBook contacts={filteredContacts} setContacts={setContacts} />
    </div>
  );
};

export default AddressBookContainer;
