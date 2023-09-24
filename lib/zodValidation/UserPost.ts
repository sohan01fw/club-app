import * as z from "zod";

export const PostValidaton = z.object({
  text: z
    .string()
    .nonempty()
    .min(3, { message: "minimum 3 letter is allowed" }),
});
