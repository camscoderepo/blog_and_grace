// src/stores/userStore.ts
import { writable } from 'svelte/store';
import { supabase } from '$lib/supabaseClient';
import type { User } from '@supabase/supabase-js';
import { goto } from '$app/navigation';
export const userStore = writable<User | null>(null);
export const userError = writable<string | null>(null);

export const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {

        console.error('Signup error:', error);
        userError.set(error.message);
        return;
    }

    userStore.set(data?.user || null); // Set the user in the store
    
    goto('/profile')
};

export const logIn = async (email: string, password: string) => {
    const {data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        console.error('Login error:', error);
        userError.set(error.message);
        return;
    }

    userStore.set(data?.user || null); // Set the user in the store

    goto('/profile')
};

export const fetchUserProfile = async () => {
    const { data: user, error } = await supabase.auth.getUser() // user = supabase.auth.getUser

    if (error) {
      console.error('Error fetching user profile:', error);
    }
    return user
}