const Footer = () =>{

    const year = new Date().getFullYear();

    return(
        <footer className="footer">
            <div className="footer-content">
                <p>© {year} EasyEats Food. All rights reserved.</p>
                <div className="footer-links">
                        <a href="/home" className="footer-link">Terms of Service</a>
                        <a href="/home" className="footer-link">Privacy Policy</a>
                        <a href="/home" className="footer-link">Contact US</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;

