import React from "react";
import { Navigate } from "react-router";

function HomePage() {
  return <Navigate to="/login" replace={true} />; //! тут будет тернарное условие если не зарегестрирован то редирект если зарег то остается на главной
}

export default HomePage;
