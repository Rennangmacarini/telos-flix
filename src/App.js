import './App.css';
import MiniDrawer from './components/header';
import AppRoutes from './routes';

function App() {
  return (
    <div className="App">
      <MiniDrawer/>
      <div style={{marginLeft: "170px"}}>
      <AppRoutes/>
      </div>
    </div>
  );
}

export default App;
