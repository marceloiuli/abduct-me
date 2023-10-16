import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Nav from "react-bootstrap/Nav";

export default function NavBar({user, setUser}) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }
    return (
        <Nav className="justify-content-center">
            <Nav.Item as="li">
                <Link to="/">Home</Link>
            </Nav.Item>
            &nbsp; &nbsp;
            <Nav.Item as="li">
                <Link to="/abductions">Booking History</Link>
            </Nav.Item>
            &nbsp; &nbsp;
            <Nav.Item as="li">
                <Link to="/abductions/new">Start Form</Link>
            &nbsp; &nbsp;
            </Nav.Item>
            &nbsp; &nbsp;
            <Nav.Item as="li">
                <span>Welcome, {user.name}</span>
            </Nav.Item>
            &nbsp; &nbsp;
            <Nav.Item as="li">
                <Link to='' onClick={handleLogOut}>Log Out </Link>
            </Nav.Item>
        </Nav>
    )
}