/**
 * Utility functions for working with cookies in the browser.
 */

/**
 * Sets a cookie.
 * @param name Cookie name
 * @param value Cookie value
 * @param days Number of days until the cookie expires
 */
const default_days = 7;
export function setCookie(name: string, value: string, days = default_days): void {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

/**
 * Gets a cookie value by name.
 * @param name Cookie name
 * @returns Cookie value or null if not found
 */
export function getCookie(name: string): string | null {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [key, ...rest] = cookie.split('=');
        if (decodeURIComponent(key) === name) {
            return decodeURIComponent(rest.join('='));
        }
    }
    return null;
}

/**
 * Deletes a cookie by name.
 * @param name Cookie name
 */
export function deleteCookie(name: string): void {
    document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}