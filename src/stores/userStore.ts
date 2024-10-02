// src/stores/userStore.ts
import { writable } from 'svelte/store';
import { supabase } from '$lib/supabaseClient';
import { browser } from '$app/environment';
import type { SignInWithOAuthCredentials, User } from '@supabase/supabase-js';
import { goto } from '$app/navigation';

export const userStore = writable<User | null>(null);
export const userError = writable<string | null>(null);
export const username = writable(browser && localStorage.getItem('username') || null);

username.subscribe((val) => {
    if (browser && val) {
        localStorage.setItem('username', val);
    }
});

export const randomUsername = () => {
    const names = ['User123', 'Guest456', 'Anon789'];
    return names[Math.floor(Math.random() * names.length)];
};

export const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
        console.error('Signup error:', error);
        userError.set(error.message);
        return;
    }

    userStore.set(data?.user || null); // Set the user in the store
    username.set(data?.user?.email || null); // Set username as the email
    goto('/profile');
};

export const logIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        console.error('Login error:', error);
        userError.set(error.message);
        return;
    }

    userStore.set(data?.user || null); // Set the user in the store
    username.set(data?.user?.email || null); // Set username as the email
    goto('/profile');
};

// New function for OAuth with GitHub and random username
export const signInWithGitHub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        redirectTo: window.location.origin
    } as SignInWithOAuthCredentials);

    if (error) {
        console.error('GitHub login error:', error);
        userError.set(error.message);
        return;
    }

    const newUsername = randomUsername();
    username.set(newUsername); // Set random username for GitHub login
    localStorage.setItem('username', newUsername);
    goto('/profile');
};

export const fetchUserProfile = async () => {
    const { data: user, error } = await supabase.auth.getUser();

    if (error) {
        console.error('Error fetching user profile:', error);
        return null;
    }

    return user;
};

// Sign out function with username reset
export const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error('Error signing out:', error);
        userError.set(error.message);
        return;
    }

    const newUsername = randomUsername();
    username.set(newUsername); // Reset username to random one on sign-out
    localStorage.setItem('username', newUsername);
    userStore.set(null); // Clear user
    goto('/');
};
