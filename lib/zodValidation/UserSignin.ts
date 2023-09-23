import * as z from "zod";

export const UserSigninvalidation = z.object({
  email: z.string().nonempty().email(),
  password: z.string().nonempty().min(5).max(20),
});
