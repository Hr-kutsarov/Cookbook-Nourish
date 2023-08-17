import { z } from "zod";

export const FoodsObjFormSchema = z.object({
  name: z.string({ required_error: "Required!" }).trim(),
  calories: z.number().positive(),
  proteins: z.number().positive(),
  fats: z.number().positive(),
  carbs: z.number().positive(),
  seasons: z.array(
        z.object({
        value: z.string(),
        label: z.string(),
        })
    ).nonempty({ message: "There are none selected." }),
  taste: z.array(
    z.object({
    value: z.string(),
    label: z.string(),
    })).nonempty({ message: "Tasteless." }),
  weight: z.array(
    z.object({
    value: z.string(),
    label: z.string(),
    })).nonempty({ message: "There are none selected." }),
  volume: z.array(
    z.object({
    value: z.string(),
    label: z.string(),
    })).nonempty({ message: "There are none selected." }),
  functionality: z.array(
    z.object({
    value: z.string(),
    label: z.string(),
    })).nonempty({ message: "Expands a different dimension." }),
  price: z.number().positive()
});

export type FoodsFormSchema = z.infer<typeof FoodsObjFormSchema>;