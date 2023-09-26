import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav style={{ height: '120px' }}>
                <ul style={{ display: "flex", flexDirection: "row", margin: '30px', justifyContent: 'center' }}>
                    <Link style={{ paddingLeft: "30px" }} to="/home">Home</Link>
                    <Link style={{ paddingLeft: "1200px" }} to="cart">Cart</Link>
                    <Link style={{ paddingLeft: "30px" }} to="/profile">Profile</Link>

                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
