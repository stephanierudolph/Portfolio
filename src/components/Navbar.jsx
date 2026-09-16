import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link> {'|'}
            <Link to="/About">About</Link> {'|'}
            <Link to="/Leadership">Leadership</Link> {'|'}
            <Link to="/Coding-Projects">Coding Projects</Link> {'|'}
            <Link to="/Music">Music</Link> {'|'}
            <Link to="/Contact">Contact</Link>
        </nav>
    );
}
