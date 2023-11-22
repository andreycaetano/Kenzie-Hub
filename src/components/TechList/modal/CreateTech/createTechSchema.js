import { z } from "zod";

export const createTechSchema = z.object({
    title: z.string().nonempty("Nome Obrigatorio!"),
    status: z.string().nonempty("Status Obrigatorio!")
})