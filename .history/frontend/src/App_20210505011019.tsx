import Navbar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarChart from "components/";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5>Todas vendas</h5>
            <BarChart />
          </div>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
