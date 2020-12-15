import { proxy } from "valtio";

const Store = proxy({
  user: {
    isAuthenticated: false
  }
});

export const authenticate = ({ email, password }) => {
  // if (!email || !password) {
  //   return { ...Store.user };
  // }

  Store.user.isAuthenticated = true;

  return { ...Store.user };
};

export default Store;
