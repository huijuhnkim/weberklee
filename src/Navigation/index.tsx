import {Link} from "react-router-dom";

export default function Navigation() {
    return (
        <div id={"navigation"}
             style={{width: 300}}
             className={"list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-danger z-2"}>
            <Link to={"/Home"}
                  className={"btn"}>
                Home
            </Link>

            <Link to={"/Search"}
                  className={"btn"}>
                Search
            </Link>

            <Link to={"/Profile"}
                  className={"btn"}>
                Profile
            </Link>
        </div>
    )
}