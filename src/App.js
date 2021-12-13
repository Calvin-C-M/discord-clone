import FriendsList from './Components/Home/FriendsList';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <section className='main'>
      <header>
        <Sidebar />
      </header>
      <main>
        <FriendsList />
      </main>
    </section>
  );
}

export default App;
