import { create } from 'zustand';
import { supabase } from '../utils/supabase';

interface UserState {
  user: any;
  isLoading: boolean;
  error: string | null;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  getUser: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  signUp: async (email, password, name) => {
    set({ isLoading: true, error: null });
    const { error, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name }
      }
    });
    if (error) {
      set({ error: error.message, isLoading: false });
    } else {
      set({ user: data.user, isLoading: false });
    }
  },
  signIn: async (email, password) => {
    set({ isLoading: true, error: null });
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      set({ error: error.message, isLoading: false });
    } else {
      set({ user: data.user, isLoading: false });
    }
  },
  signOut: async () => {
    set({ isLoading: true, error: null });
    const { error } = await supabase.auth.signOut();
    if (error) {
      set({ error: error.message, isLoading: false });
    } else {
      set({ user: null, isLoading: false });
    }
  },
  getUser: async () => {
    set({ isLoading: true, error: null });
    const { error, data } = await supabase.auth.getUser();
    if (error) {
      set({ error: error.message, isLoading: false });
    } else {
      set({ user: data.user, isLoading: false });
    }
  }
}));

interface CourseState {
  courses: any[];
  currentCourse: any;
  isLoading: boolean;
  error: string | null;
  fetchCourses: () => Promise<void>;
  fetchCourseById: (id: string) => Promise<void>;
}

export const useCourseStore = create<CourseState>((set) => ({
  courses: [],
  currentCourse: null,
  isLoading: false,
  error: null,
  fetchCourses: async () => {
    set({ isLoading: true, error: null });
    const { error, data } = await supabase
      .from('courses')
      .select('*');
    if (error) {
      set({ error: error.message, isLoading: false });
    } else {
      set({ courses: data, isLoading: false });
    }
  },
  fetchCourseById: async (id) => {
    set({ isLoading: true, error: null });
    const { error, data } = await supabase
      .from('courses')
      .select('*')
      .eq('id', id)
      .single();
    if (error) {
      set({ error: error.message, isLoading: false });
    } else {
      set({ currentCourse: data, isLoading: false });
    }
  }
}));

interface ProgressState {
  progress: any[];
  isLoading: boolean;
  error: string | null;
  updateProgress: (lessonId: string, completed: boolean) => Promise<void>;
  fetchProgress: () => Promise<void>;
}

export const useProgressStore = create<ProgressState>((set, get) => ({
  progress: [],
  isLoading: false,
  error: null,
  updateProgress: async (lessonId, completed) => {
    set({ isLoading: true, error: null });
    const user = useUserStore.getState().user;
    if (!user) {
      set({ error: 'User not logged in', isLoading: false });
      return;
    }
    
    const { error, data } = await supabase
      .from('progress')
      .upsert({
        user_id: user.id,
        lesson_id: lessonId,
        completed,
        last_accessed: new Date().toISOString()
      })
      .select();
    
    if (error) {
      set({ error: error.message, isLoading: false });
    } else {
      set({ progress: data, isLoading: false });
    }
  },
  fetchProgress: async () => {
    set({ isLoading: true, error: null });
    const user = useUserStore.getState().user;
    if (!user) {
      set({ error: 'User not logged in', isLoading: false });
      return;
    }
    
    const { error, data } = await supabase
      .from('progress')
      .select('*')
      .eq('user_id', user.id);
    
    if (error) {
      set({ error: error.message, isLoading: false });
    } else {
      set({ progress: data, isLoading: false });
    }
  }
}));

interface AchievementState {
  achievements: any[];
  isLoading: boolean;
  error: string | null;
  fetchAchievements: () => Promise<void>;
}

export const useAchievementStore = create<AchievementState>((set) => ({
  achievements: [],
  isLoading: false,
  error: null,
  fetchAchievements: async () => {
    set({ isLoading: true, error: null });
    const user = useUserStore.getState().user;
    if (!user) {
      set({ error: 'User not logged in', isLoading: false });
      return;
    }
    
    const { error, data } = await supabase
      .from('achievements')
      .select('*')
      .eq('user_id', user.id);
    
    if (error) {
      set({ error: error.message, isLoading: false });
    } else {
      set({ achievements: data, isLoading: false });
    }
  }
}));