import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const authConnect = (type: string) => z.object({
  fullName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
  // Both
  email: z.string().email(),
  password: z.string().min(8),
})