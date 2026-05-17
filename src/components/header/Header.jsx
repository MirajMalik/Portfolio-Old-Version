import { NavLink } from "react-router";

const Header = () => {
    return (
        <div className="w-full flex justify-between bg-black border-b-4 border-red-700 text-yellow-300 py-5 px-10 font-bold gap-5">
            <div>
                Tarek Abdullah Miraj
            </div>
            <nav className="flex justify-between items-center gap-5 text-yellow-300">
                <NavLink 
                        to="/" 
                        className={({ isActive }) =>
                                      isActive ? "text-red-500" : ""
                                    
                                  }>
                                Home
                </NavLink>
                <NavLink 
                        to="/about" 
                        className={({ isActive }) =>
                                    isActive ? "text-red-500" : ""
                                  }>
                                About
                </NavLink>
                <NavLink 
                        to="/login" 
                        className={({ isActive }) =>
                                      isActive ? "text-red-500" : ""
                                  }>
                                Login
                </NavLink>
                <NavLink 
                        to="/register" 
                        className={({ isActive }) =>
                                      isActive ? "text-red-500" : ""
                                  }>
                                Register
                </NavLink>  
            </nav>       
        </div>
    );
};

export default Header;