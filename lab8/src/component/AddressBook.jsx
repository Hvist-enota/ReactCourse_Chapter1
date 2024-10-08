import React, { useState } from "react";
import AddressTable from "./AddressTable";
import SearchInput from "./SearchInput";

const AddressBook = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editId, setEditId] = useState(null);

  const validateForm = () => {
    if (!firstName) {
      setError("The first name is required");
      return false;
    }
    if (!lastName) {
      setError("The last name is required");
      return false;
    }
    if (!phone) {
      setError("The phone is required");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (editId) {
      setContacts(
        contacts.map((contact) =>
          contact.id === editId
            ? { id: editId, firstName, lastName, phone }
            : contact
        )
      );
      setEditId(null);
    } else {
      const newContact = { id: Date.now(), firstName, lastName, phone };
      setContacts([...contacts, newContact]);
    }

    setFirstName("");
    setLastName("");
    setPhone("");
  };

  const handleEdit = (id) => {
    const contactToEdit = contacts.find((contact) => contact.id === id);
    if (contactToEdit) {
      setEditId(id);
      setFirstName(contactToEdit.firstName);
      setLastName(contactToEdit.lastName);
      setPhone(contactToEdit.phone);
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhone(value);
    }
  };

  const filteredContacts = contacts.filter((contact) =>
    `${contact.firstName} ${contact.lastName} ${contact.phone}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="address-book">
      <SearchInput searchTerm={searchTerm} onSearchChange={(e) => setSearchTerm(e.target.value)} />
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              style={{ borderColor: error.includes("first name") ? "red" : "" }}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              style={{ borderColor: error.includes("last name") ? "red" : "" }}
            />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              required
              style={{ borderColor: error.includes("phone") ? "red" : "" }}
            />
          </label>
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>

      {filteredContacts.length === 0 ? (
        <div>No data to display.</div>
      ) : (
        <AddressTable contacts={filteredContacts} onEdit={handleEdit} />
      )}
    </div>
  );
};

export default AddressBook;
