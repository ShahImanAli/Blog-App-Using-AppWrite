import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow-sm bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-md bg-white/95">
      <Container>
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              className="hover:opacity-75 transition-opacity duration-200"
            >
              <Logo width="50px" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-1">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="px-4 py-2 text-gray-700 font-medium hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-150"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 space-y-1 border-t border-gray-100 pt-3">
            {navItems.map((item) =>
              item.active ? (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.slug);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2.5 text-gray-700 hover:bg-gray-50 rounded-md transition-colors font-medium"
                >
                  {item.name}
                </button>
              ) : null
            )}
            {authStatus && (
              <div className="pt-2">
                <LogoutBtn />
              </div>
            )}
          </div>
        )}
      </Container>
    </header>
  );
}

export default Header;
