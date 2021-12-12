import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";
import { Context } from "../index";

// function Redirect({ to }) {
//   let navigate = useNavigate();
//   useEffect(() => {
//     navigate(to);
//   });
//   return null;
// }
// Логика навигации по страницам
const AppRouter = () => {
  const { user } = useContext(Context);

  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}

      <Route path="*" element={<Navigate replace to={SHOP_ROUTE} />} />
      {/* <Route path="/" element={<Redirect to="/events" />} /> */}
      {/* <Route path="*" element={console.log("ddd")} /> */}
      {/* <Navigate replace to="/" /> */}
      {/* <Redirect to={SHOP_ROUTE} /> */}
    </Routes>
  );
};

export default AppRouter;
