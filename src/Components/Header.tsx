import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <div>
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-600">Fixer</Link>
                    <nav className="space-x-4">
                    <Link to="/work" className="text-gray-700 hover:text-blue-600">Work</Link>
                    <Link to="/request" className="text-gray-700 hover:text-blue-600">Request</Link>
                    <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                    <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
                    <Link to="/signup" className="text-gray-700 hover:text-blue-600">Sign Up</Link>
                    </nav>
                </div>
            </header>
        </div>
        
    )
}