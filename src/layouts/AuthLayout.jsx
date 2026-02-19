import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
