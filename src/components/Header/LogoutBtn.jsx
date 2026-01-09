import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
      navigate("/signup");
    });
  };

  return (
    <button
      className="px-4 py-2 text-red-600 font-medium bg-red-50 hover:bg-red-100 border border-red-200 rounded-md transition-colors duration-150"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
