import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "./component/Pagination";
import Table from "./component/table";
import "font-awesome/css/font-awesome.css";

function App() {
  return (
    <div className="container">
      <Table />
      <Pagination />
    </div>
  );
}

export default App;
