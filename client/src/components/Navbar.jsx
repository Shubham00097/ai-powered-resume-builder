import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../app/features/authSlice";

function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-40 bg-white/40 backdrop-blur border-b border-slate-200">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="logo" className="h-9 w-auto" />
        </Link>

        {/* Right actions */}
        <div className="flex items-center gap-5 text-sm">

          {user && (
            <p className="hidden sm:block text-slate-600">
              Hi, <span className="font-medium text-slate-800">{user.name}</span>
            </p>
          )}

          {user && (
            <button
              onClick={logoutUser}
              className="
                rounded-full
                border border-slate-300
                px-5 py-1.5
                text-slate-700
                hover:bg-slate-100
                transition
                active:scale-95
              "
            >
              Logout
            </button>
          )}

        </div>
      </nav>
    </header>
  );
}

export default Navbar;
