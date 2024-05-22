import "./footer.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footerContent">
                <p style={{ color: "white", fontSize: "1.9vw" }}>Rigoberto Antonio Maximiliano Martínez Quintana</p>
                <p style={{ color: "white", fontSize: "1.5vw" }}>Desarrollador Web Full Stack</p>
            </div>
            <div>
                <p style={{ color: "white", fontSize: "1.2vw" }}>Información</p>
                <Link to="/about">
                    <p style={{ color: "white", fontSize: "1vw" }}>Sobre mí</p>
                </Link>

                <Link to="/userProfile">
                    <p style={{ color: "white", fontSize: "1vw" }}>Proyectos</p>
                </Link>
            </div>
            <div style={{ marginTop: "8px" }}>
                <Link to="/cv">
                    <p style={{ color: "white", fontSize: "1vw" }}>Descarga mi CV</p>
                </Link>
                <Link to="/contacto">
                    <p style={{ color: "white", fontSize: "1vw" }}>Contáctame</p>
                </Link>
            </div>

        </footer>
    );
};

export default Footer;

/*<div className="footerContent">
<p className="tipoh1">Rigoberto Antonio Maximiliano Martínez Quintana</p>
<p className="tipoh2">Desarrollador Web Full Stack</p>
</div>
<div className="footerContent alto">

</Link>
</div>
<div className="footerContent alto">
<br />
<Link to="/cv">
    <p className="tipoh4">Descarga mi CV</p>
</Link>
<Link to="/contacto">
    <p className="tipoh4">Contáctame</p>
</Link>

</div>
*/