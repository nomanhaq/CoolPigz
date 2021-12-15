const Navbar = () => {
    return (
        <nav className="navbar fixed-top mx-3">
            <a
                className="navbar-brand col-sm-3 col-md-2 mr-0 mx-4"
                href="https://www.coolpigz.io"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={logo} className="App-logo" alt="logo" />
                The Cool Pigs
            </a>

            <button onClick={connectHandler} className="button nav-button btn-sm mx-4">Connect Wallet</button>
        </nav>
    );
}

export default Navbar;