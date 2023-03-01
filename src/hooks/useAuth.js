import { useSelector } from "react-redux";

export function useAuth() {
  const { token, isLoggedIn, userName, isLoading } = useSelector(
    (state) => state.auth
  );
  return { token, isLoggedIn, userName, isLoading };
}
