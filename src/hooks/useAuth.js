import { useSelector } from "react-redux";

export function useAuth() {
  const { email, token, id } = useSelector((state) => state.currentUser);
  return {
    isAuth: !!email, //создал булевое значение из переменной(сюда можно передать любую переменную сделать двойное отрицание для того что бы вернуть значение к первому состоянию)
    email,
    id,
    token,
  };
}
