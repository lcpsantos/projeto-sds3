import { SalePage } from "types/sale";

type Props = {
    page: SalePage;
}

const Pagination = ({ page } : Props ) => {
  return (
    <div className="row d-flex justify-content-center">
      <nav>
        <ul className="pagination">
          <li className={`page-item ${page.first ? 'disabled' : ''} `}>
            <button className="page-link">Anterior</button>
          </li>
          <li className="page-item disabled">
            <span className="page-link">1</span>
          </li>
          <li className="page-item disabled">
            <button className="page-link">Próxima</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
