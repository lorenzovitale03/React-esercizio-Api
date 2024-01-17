import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <div style={divStyle}>
                <Link to ="/">Home</Link>
                <Link to="/contatti">Contatti</Link>
                <Link to="/chisiamo">Chi siamo</Link>
            </div>

        </div>
    )
}

const divStyle = {
    display:"flex",
    justifyContent: "space-around"
}

export default Header;

