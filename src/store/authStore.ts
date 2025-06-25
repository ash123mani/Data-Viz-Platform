import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import {
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
  auth
} from '../firebase/auth';
import type { User } from "firebase/auth";

interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;
    initializeAuth: () => () => void;
    googleSignIn: () => Promise<void>;
    emailPasswordLogin: (email: string, password: string) => Promise<void>;
    emailPasswordRegister: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      loading: false,
      error: null,

      initializeAuth: () => {
        set({ loading: true });
        const unsubscribe = auth.onAuthStateChanged((user) => {
          set({ user, loading: false, error: null });
        });
        return unsubscribe;
      },

      googleSignIn: async () => {
        set({ loading: true, error: null });
        try {
          const user = await signInWithGoogle();
          set({ user, loading: false });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Google sign-in failed',
            loading: false
          });
        }
      },

      emailPasswordLogin: async (email, password) => {
        set({ loading: true, error: null });
        try {
          const user = await logInWithEmailAndPassword(email, password);
          set({ user, loading: false });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Login failed',
            loading: false
          });
        }
      },

      emailPasswordRegister: async (email, password) => {
        set({ loading: true, error: null });
        try {
          const user = await registerWithEmailAndPassword(email, password);
          set({ user, loading: false });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Registration failed',
            loading: false
          });
        }
      },

      logout: async () => {
        set({ loading: true });
        try {
          await logout();
          set({ user: null, loading: false, error: null });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Logout failed',
            loading: false
          });
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage', // unique name for localStorage key
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user
        // Only persist user to avoid storing loading/error states
      }),
    }
  )
);
