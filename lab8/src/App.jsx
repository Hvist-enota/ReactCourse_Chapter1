import React from 'react';
import './App.css';
import PageTitle from './component/PageTitle';
import AddressBook from './component/AddressBook';

function App() {
  return (
    <>
      <PageTitle title="Address Management App" />
      <AddressBook />
    </>
  );
}

export default App;
