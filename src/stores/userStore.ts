import { writable } from 'svelte/store';

export const userStore = writable({
  name: '',
  email: '',
  isLoggedIn: false,
  settings: {
    theme: 'light', // example setting
  },
});

// Example function to update user data
export function updateUser(userData: Partial<typeof userStore>) {
  userStore.update((current) => {
    return { ...current, ...userData };
  });
}

// Example function to reset user data (for logout)
export function resetUser() {
  userStore.set({
    name: '',
    email: '',
    isLoggedIn: false,
    settings: {
      theme: 'light',
    },
  });
}
