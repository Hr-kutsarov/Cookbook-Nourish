import { useForm, SubmitHandler } from "react-hook-form"
import { ZodType, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

type FormData = {
  name: string;
  calories: number;
  proteins: number;
  fats: number;
  carbs: number;
  // seasons?: string[];
  // taste?: string[];
  // weight?: string;
  // volume?: string;
  // function?: string
}

const FoodItemForm: React.FC = () => {

    const schema: ZodType<FormData> = z.object({
      name: z.string().min(2).max(30),
      calories: z.number(),
      proteins: z.number(),
      fats: z.number(),
      carbs: z.number(),
      // seasons: z.string().min(2).max(16).array().optional(),
      // taste: z.string().min(2).max(16).array().optional(),
      // weight: z.string().min(2).max(16).optional(),
      // volume: z.string().min(2).max(16).optional(),
      // function: z.string().min(2).max(16).optional(),
    })
    
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>({
      resolver: zodResolver(schema)
    })


    const onSubmit = (data: FormData) => {
      console.log(data)
    }

    return (
        /* "handleSubmit" will inputs before invoking "onSubmit" */
        <form 
          className='flex flex-col gap-4 p-4' 
          onSubmit={handleSubmit(onSubmit)}>

            {errors.name && <span>This field is required</span>}
            <input type="text" placeholder="Name" {...register("name")} />

            {errors.calories && <span>This field is required</span>}
            <input type="number" placeholder="Calories" {...register("calories", {valueAsNumber: true})} />

            {errors.proteins && <span>This field is required</span>}
            <input type="number" placeholder="Proteins" {...register("proteins", {valueAsNumber: true})} />

            {errors.fats && <span>This field is required</span>}
            <input type="number" placeholder="Fats" {...register("fats", {valueAsNumber: true})} />

            {errors.carbs && <span>This field is required</span>}
            <input type="number" placeholder="Carbs" {...register("carbs", {valueAsNumber: true})} />

            <input type="submit" />
        </form>
    )
}

export default FoodItemForm;