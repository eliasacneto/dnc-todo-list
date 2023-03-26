
import Logo from '../assets/images/dnc-logo.png'
import DoingList from '../components/Cards/DoingList'
import DoneList from '../components/Cards/DoneList'
import PlaningList from '../components/Cards/PlaningList'
import ToDoList from '../components/Cards/ToDoList'
import './home.css'


const Home = () => {
  return (
    <>
      <nav>
        <img className='logo' src={Logo} alt="" />
        <h1 className='title-list'>Lista de Tarefas</h1>
      </nav>

      <div className="container">
        <PlaningList />
        <ToDoList />
        <DoingList />
        <DoneList />
      </div>
    </>
  )
}

export default Home