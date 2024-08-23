import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid Email" }),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  msgTitle: z
    .string()
    .min(3, { message: "subject must be at least 3 characters" }),
  msg: z.string().min(3, { message: "msg must be at least 3 characters" }),
});
