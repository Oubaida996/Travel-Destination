import Home from "./components/home/Home";
const data = require("./data/data.json");

function App() {
  return <Home dataFromAppComponent={data} />;
}

export default App;
