import * as z from "zod";

export const UserAuthvalidation = z.object({
  email: z.string().email(),
  password: z.string().min(5).max(20),
});
