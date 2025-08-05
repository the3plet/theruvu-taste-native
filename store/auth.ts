import { create } from "zustand";
type User = {
  name: string;
  email: string;
  token: string;
};

type AuthStore = {
  user: User | null;
  setUser: (user: User) => void;
  // signin:()=> void
  signout: () => void;
};

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  signout: () => set({ user: null }),
}));


export default useAuthStore;
