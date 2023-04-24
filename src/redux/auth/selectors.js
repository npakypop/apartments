export const selectToken = (state) => state.auth.token;
export const selectUserID = (state) => state.auth.userID;
// export const selectFavoriteApartments = (state) =>
//   state.auth.apartments.favoriteApartments;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserName = (state) => state.auth.userName;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
