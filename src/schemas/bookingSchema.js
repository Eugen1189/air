// src/schemas/bookingSchema.js
import { z } from 'zod';

export const bookingSchema = z.object({
  name: z.string().min(2, "Il nome è troppo corto"),
  email: z.string().email("Inserisci un'email valida"),
  date: z.string().refine((date) => new Date(date) > new Date(), {
      message: "La data deve essere nel futuro"
  }),
  guests: z.coerce.number().min(1, "Deve esserci almeno 1 ospite"),
});

