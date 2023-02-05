
import './App.css';
import RouteContainer from './Route';
function App() {
  return (
    <>
      <div
        className="App"
        style={{
          backgroundColor: "white",
          minHeight: "100vh",
          width: "100vw",
        }}
      >
        <RouteContainer />
      </div>
    </>
  );
}

export default App;
