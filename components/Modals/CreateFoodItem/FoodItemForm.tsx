import { useForm, SubmitHandler } from "react-hook-form"
import { ZodType, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import WarningRequired from "./WarningRequired";

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
      calories: z.number().positive(),
      proteins: z.number().positive(),
      fats: z.number().positive(),
      carbs: z.number().positive(),
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
          className='flex flex-col gap-4 p-4 relative' 
          onSubmit={handleSubmit(onSubmit)}>

            <span className="flex relative w-full group">
            {errors.name && <WarningRequired  message={errors.name.message}/>}
            <input className='flex w-full' type="text" placeholder="Name" {...register("name")} />
            </span>

            <span className="flex relative w-full group">
            {errors.calories && <WarningRequired message={errors.calories.message}/>}
            <input className='flex w-full' type="number" step="0.01" placeholder="Calories" {...register("calories", {valueAsNumber: true})} />
            </span>

            <span className="flex relative w-full group">
            {errors.proteins && <WarningRequired  message={errors.proteins.message}/>}
            <input className='flex w-full' type="number" step="0.01" placeholder="Proteins" {...register("proteins", {valueAsNumber: true})} />
            </span>

            <span className="flex relative w-full group">
            {errors.fats && <WarningRequired  message={errors.fats.message}/>}
            <input className='flex w-full' type="number" step="0.01" placeholder="Fats" {...register("fats", {valueAsNumber: true})} />
            </span>

            <span className="flex relative w-full group">
            {errors.carbs && <WarningRequired  message={errors.carbs.message}/>}
            <input className='flex w-full' type="number" step="0.01" placeholder="Carbs" {...register("carbs", {valueAsNumber: true})} />
            </span>

            <input type="submit" />
        </form>
    )
}

export default FoodItemForm;