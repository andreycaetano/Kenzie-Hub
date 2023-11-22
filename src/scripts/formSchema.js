import { z } from "zod";

export const registerSchema = z.object({
   name: z.string().nonempty("Nome é obrigatório"),
   email: z.string().nonempty("E-mail é obrigatorio").email("Forneça um e-mail válido"),
   bio: z.string().nonempty("Bio é obrigatorio"),
   contact: z.string().nonempty("Contato é obrigatorio"),
   course_module: z.string().nonempty("Módulo é obrigatorio"),
   password: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(8, "É necessário pelo menos oito caracteres.")
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
      .regex(/[!@#$%^&*(),.?":{}|<>]/, "É necessario pelo menos um caracter especial!"),
      confirmPassword: z.string().nonempty("É necessário confirmar a senha")
}).refine(({password, confirmPassword}) => password === confirmPassword, {
   message: "As senhas não correspondem.",
   path: ["confirmPassword"],
});

export const loginSchema = z.object({
   email: z.string().nonempty("Email é obrigatorio"),
   password: z.string().nonempty("Senha é obrigatoria")
})