import RecursiveComponent from "./components/data"
import a from "./components/folder"
const App = () => {
  return (
    <div style={{ margin: "8px" }}>
      <RecursiveComponent data={a} />
    </div>
  );
};


export default App;


