import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function stringToSlug(input: string): string {
  return input
    .toLowerCase()                 // Convert the string to lowercase
    .trim()                        // Trim any leading or trailing spaces
    .replace(/[^\w\s-]/g, '')      // Remove all non-word characters (punctuation, etc.)
    .replace(/\s+/g, '-')          // Replace spaces with hyphens
    .replace(/--+/g, '-')          // Replace multiple hyphens with a single hyphen
    .replace(/^-+|-+$/g, '');      // Remove any leading or trailing hyphens
}

