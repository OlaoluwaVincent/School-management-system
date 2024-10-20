import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export let userTheme: any;
export let themes = ['light', 'dark', 'retro', 'valentine', 'sunset'];

if (browser) {
	localStorage.theme = localStorage.theme || themes[3];
	userTheme = writable(localStorage.theme);
	userTheme.subscribe((value: string) => (localStorage.theme = value));
}

export default userTheme;
