import * as z from "zod";

export const UserValidaton = z.object({
  profile_pic: z.string().url().nonempty(),
  username: z.string().min(5).max(10),
  age: z.number().min(18).max(30),
  bio: z.string().min(20).max(50),
});
