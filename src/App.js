import './App.css'; 
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';

function App() {
  return (
    <div className="app">
      <Header />   
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div>

    </div>
  );
}

export default App;
