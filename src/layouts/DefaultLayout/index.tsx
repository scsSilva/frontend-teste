import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <header>
        <p>Header</p>
      </header>

      <Outlet />
    </div>
  );
};

export default DefaultLayout;
