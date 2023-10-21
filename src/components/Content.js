import { Link } from "react-router-dom";
export default function Content() {
    return (
        <ul class="nav nav-pills nav-fill bg-secondary bg-gradient" role="group" aria-label="Basic example">
            <li class="nav-item border border-2 p-2">
                <Link to="/" className="text-black">
                    Description
                </Link>
            </li>
            <li class="nav-item border border-2 p-2">
                <Link to="/participant" className="text-black">
                    Speakers
                </Link>
            </li>
            <li class="nav-item border border-2 p-2">
                <Link to="/program" className="text-black">
                    Program
                </Link>
            </li>
            <li class="nav-item border border-2 p-2">
                <Link to="/abstract" className="text-black">

                    Abstract
                </Link>
            </li>
            <li class="nav-item border border-2 p-2">
                <Link to="/document" className="text-black">
                   Posters
                </Link>
            </li>
        </ul>
    );
}
