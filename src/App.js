import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';


  function App() {
  return (
    <div>
      <div>
        <h1 className="titre"> React Component Checkpoint </h1>
      </div>
      <div className="App">
        <div>
          <FullName/>
          <Address />
        </div>
        <div>
          <ProfilePhoto />
        </div>    
      </div>
    </div>
  );
}

export default App;
