// src/stores/userStore.ts
import { writable } from 'svelte/store';
import { supabase } from '$lib/supabaseClient';
import type { User } from '@supabase/supabase-js';

export const userStore = writable<User | null>(null);
export const userError = writable<string | null>(null);

export const signUp = async (email: string, password: string) => {
    const { user, error } = await supabase.auth.signUp({ email, password });

    if (error) {
        console.error('Signup error:', error);
        userError.set(error.message);
        return;
    }

    userStore.set(user); // Set the user in the store
};

export const logIn = async (email: string, password: string) => {
    const { user, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        console.error('Login error:', error);
        userError.set(error.message);
        return;
    }

    userStore.set(user); // Set the user in the store
};

export const fetchUserProfile = async () => {
    const user = supabase.auth.user
