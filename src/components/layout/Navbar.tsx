import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Menu, User, LogOut, House } from "lucide-react";

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-background shadow-navbar">
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <Link to="/dashboard" className="flex items-center gap-1">
          <House className="h-6 w-6 text-primary" />
          <span className="text-primary font-bold text-xl hidden sm:inline">staybnb</span>
        </Link>

        <div className="flex items-center gap-2">
          {isAuthenticated && (
            <Link
              to="/bookings"
              className={`hidden sm:block text-sm font-semibold px-4 py-2 rounded-full hover:bg-secondary transition-colors ${location.pathname === "/bookings" ? "bg-secondary" : ""
                }`}
            >
              My Bookings
            </Link>
          )}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 border border-border rounded-full px-3 py-2 hover:shadow-md transition-shadow"
            >
              <Menu className="h-4 w-4" />
              <div className="bg-airbnb-foggy text-primary-foreground rounded-full p-1">
                <User className="h-4 w-4" />
              </div>
            </button>
            {menuOpen && (
              <>
                <div className="fixed inset-0" onClick={() => setMenuOpen(false)} />
                <div className="absolute right-0 top-14 w-56 bg-background rounded-xl shadow-panel border border-border py-2 animate-fade-in">
                  {isAuthenticated ? (
                    <>
                      <div className="px-4 py-2 text-sm font-semibold text-foreground border-b border-border mb-1">
                        {user?.name}
                      </div>
                      <Link
                        to="/dashboard"
                        onClick={() => setMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors"
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/bookings"
                        onClick={() => setMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors"
                      >
                        My Bookings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors flex items-center gap-2 border-t border-border mt-1"
                      >
                        <LogOut className="h-4 w-4" /> Log out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        onClick={() => setMenuOpen(false)}
                        className="block px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
                      >
                        Log in
                      </Link>
                      <Link
                        to="/login"
                        onClick={() => setMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors"
                      >
                        Sign up
                      </Link>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
