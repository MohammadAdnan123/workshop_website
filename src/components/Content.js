import { Link } from "react-router-dom";
export default function Content() {
  return (
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-primary">
        <Link to="/" className="text-white">
          Description
        </Link>
      </button>
      <button type="button" class="btn btn-primary">
        <Link to="/participant" className="text-white">
          Participant
        </Link>
      </button>
      <button type="button" class="btn btn-primary">
        <Link to="/program" className="text-white">
          Program
        </Link>
      </button>
      <button type="button" class="btn btn-primary">
        <Link to="/abstract" className="text-white">
          Abstract
        </Link>
      </button>
      <button type="button" class="btn btn-primary">
        <Link to="/document" className="text-white">
          Document
        </Link>
      </button>
    </div>
  );
}
