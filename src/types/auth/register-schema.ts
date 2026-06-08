import * as z from "zod";

export const RegisterSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    role: z.enum(["MENTOR", "SANTRI", "WALI_SANTRI"]),
    phone: z.string().min(10).optional(),
    fullName: z.string().min(3)
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>