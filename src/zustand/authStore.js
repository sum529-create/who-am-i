import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  token: null,
  setUser: (user) => {set({user})},
  setToken: (token) => {
    try {
      window.localStorage.setItem("accessToken", token)
      set({token})
    } catch (error) {
      console.error(error);
    }
  },
  logout: () => {
    window.localStorage.removeItem('accessToken')
    set({user:null, token: null})
  }
}))

export default useAuthStore;