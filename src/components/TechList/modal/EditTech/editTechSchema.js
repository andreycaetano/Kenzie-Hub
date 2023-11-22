import { z } from "zod";

export const editTechSchema = z.object({
    title: z.string().nonempty("Nome Obrigatorio!"),
    status: z.string().nonempty("Status Obrigatorio!")
})