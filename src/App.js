import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Post from './Components/Posts/Post';
import Profile from './Components/Profile/Profile';
import { data } from './data';
import { posts } from './Posts';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="contents">
      <Profile datas = {data}/>
      <Post posts ={posts}/>
      </div>
    </div>
  );
}

export default App;
