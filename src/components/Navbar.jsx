import "./navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
            {/*sidebar */}
            <div className = "wrapper">
                <span>Chi Chan</span>
                <div className="social">
                    <a href ="#"> <img src = "./facebook.png" alt= ""/></a>
                    <a href ="#"> <img src = "./instagram.png" alt= ""/></a>
                    <a href ="#"> <img src = "./linkedin.png" alt= ""/></a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
