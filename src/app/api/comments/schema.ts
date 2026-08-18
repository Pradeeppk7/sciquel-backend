import { z } from "zod";

export const commentGetSchema = z.object({

})

export const commentPostSchema = z.object({
    
  name: z.string().min(1),
  email: z.string().email(),
  comment: z.string().min(1),

})