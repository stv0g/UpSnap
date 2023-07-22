import { writable } from 'svelte/store';
import PocketBase from 'pocketbase';
import type AdminAuthResponse from 'pocketbase';

// set backend url based on environment
export const backendUrl = import.meta.env.DEV ? 'http://127.0.0.1:8090' : '';

// connect to backend
const pb = new PocketBase(backendUrl);
pb.autoCancellation(false);

// export stores
export const pocketbase = writable(pb);