import { Outlet } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
function RootLayout() {
  return (
    <div>
      <MainPage/>
      <div style={{ minHeight: "60vh" }}>
        <div className="container">
          {" "}
          <Outlet />
        </div>
      </div>
    
    </div>
  );
}

export default RootLayout;