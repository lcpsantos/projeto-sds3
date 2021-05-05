import Navbar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary">Olá, mundo!</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
