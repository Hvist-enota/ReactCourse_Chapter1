import ToDoContainer from './components/ToDoContainer'
import './App.css';
import PageTitle from './components/PageTitle';


function App() {
  return (
    <>
    <PageTitle title='ToDoApp'/>
      <ToDoContainer />
    </>
  )
}

export default App