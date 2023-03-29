import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div className="footer-container">
            <div className="footer">
            <div className="foot">
                <div>
                    <h3>Footer Details</h3>
                    <p>Why do we use it?\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, porro sit tenetur cupiditate quidem dolor ad laborum eius? Unde incidunt et veniam, expedita suscipit sint maxime hic laborum quisquam corrupti?</p>
                </div>
            </div>
            <div className="foot">
                <div>
                    <h3>Footer Links</h3>
                    <Link to="/" className="footer-link"><p>Private policy</p></Link>
                    <Link to="/" className="footer-link"><p>Media</p></Link>
                    <Link to="/" className="footer-link"><p>Cooporation</p></Link>
                    <Link to="/" className="footer-link"><p>Contact us</p></Link>
                </div>
            </div>
            <div className="foot">
                <div>
                    <h3>Footer Links</h3>
                    <Link to="/" className="footer-link"><p>Complaints</p></Link>
                    <Link to="/" className="footer-link"><p>Help center</p></Link>
                    <Link to="/" className="footer-link"><p>Community</p></Link>
                    <Link to="/" className="footer-link"><p>FAQ</p></Link>
                </div>
            </div>
            <div className="foot">
                <div>
                    <img src="https://plus.unsplash.com/premium_photo-1663054774427-55adfb2be76f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                </div>
            </div>
            </div>
            <p className="copyright">Copyright {new Date().getFullYear()}. All Rights Reserved. - Designed  by &nbsp;<a href="https://stevetech.co"> Stevetech.co </a>
            </p>
        </div>
     );
}
 
export default Footer;