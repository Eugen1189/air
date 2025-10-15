// src/schemas/bookingSchema.js
import { z } from 'zod';

export const bookingSchema = z.object({
  name: z.string().min(2, "Ім'я занадто коротке"),
  email: z.string().email("Введіть коректний email"),
  date: z.string().refine((date) => new Date(date) > new Date(), {
      message: "Дата має бути в майбутньому"
  }),
  guests: z.coerce.number().min(1, "Має бути хоча б 1 гість"),
});

