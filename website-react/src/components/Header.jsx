import { Link } from "react-router-dom";
import '../styles/Header.css';


export default function Header() {
    return (
        <>
            <div className="header-container">
                <Link to={"/"}>Home</Link>
                <Link to={"/About"}>About</Link>
                <Link to={"/Projects"}>Projects</Link>
            </div>
        </>
    );
}