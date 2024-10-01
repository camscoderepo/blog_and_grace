// +page.ts (SvelteKit specific)
import { userStore } from '../../stores/userStore';
import { goto } from '$app/navigation';
import { get } from 'svelte/store'; 

export const load = async () => {
    const user = get(userStore); // Get the current value of userStore

    if (!user) {
        // Redirect to login if user is not authenticated
        throw goto('/login');
    }

    // Return any data needed by the page if the user is authenticated
    return {
        user
    };
};
