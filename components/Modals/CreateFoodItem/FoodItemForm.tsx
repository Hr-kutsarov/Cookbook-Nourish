'use client'

import { useForm, SubmitHandler, useFormContext, Controller } from "react-hook-form"
import { ZodType, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react";
import WarningRequired from "./WarningRequired";
import Select  from 'react-select';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { RxQuestionMarkCircled } from 'react-icons/rx'
import { twMerge } from "tailwind-merge";
import { RxDrawingPin,  RxHeart} from 'react-icons/rx'
import {IoLogoElectron, IoLogoAppleAr, IoLogoBuffer, IoJournalOutline } from 'react-icons/io5'
import { redirect } from "next/navigation";

import useCreateFood from '@/hooks/createFoodModal'

interface FormData {
  name: string;
  calories: number;
  proteins: number;
  fats: number;
  carbs: number;
  seasons:{
    value: string;
    label: string;
  }[];

  taste:{
    value: string;
    label: string;
  }[];

  weight: {
    value: string;
    label: string;
  };
  volume: {
    value: string;
    label: string;
  };
  functionality: {
    value: string;
    label: string;
  }
  price: number;
}



const FoodItemForm: React.FC = () => {

  const modalHandler = useCreateFood();

  const schema: ZodType<FormData> = z.object({
    name: z.string().min(2).max(30),
    calories: z.number().positive(),
    proteins: z.number().positive(),
    fats: z.number().positive(),
    carbs: z.number().positive(),
    seasons: z.array(
      z.object({
      value: z.string(),
      label: z.string(),
      })).nonempty({ message: "Select season." }),
    taste: z.array(
      z.object({
      value: z.string(),
      label: z.string(),
      })).nonempty({ message: "Tasteless." }),
    weight: z.object({
      value: z.string(),
      label: z.string(),
      }).required(),
    volume: z.object({
      value: z.string(),
      label: z.string(),
      }).required(),
    functionality: z.object({
      value: z.string(),
      label: z.string(),
      }).required(),
    price: z.number().positive()
  })
    
    // const { control, register, handleSubmit, formState: { errors } } = useForm<FormData>({
    //   defaultValues: {name: '', calories: 0.0, proteins: 0.0, fats: 0.0, carbs: 0.0, },
    //   resolver: zodResolver(schema)});

    // const onSubmit: SubmitHandler<FormData> = data => console.log(data);

    const { control, handleSubmit, register, formState: { errors } } = useForm({
      defaultValues: {
        name: '',
        calories: null,
        proteins: null,
        carbs: null,
        fats: null,
        seasons: null,
        taste: null,
        weight: null,
        volume: null,
        functionality: null,
        price: null
      },
      resolver: zodResolver(schema)
    });

    const onSubmit = async (formData: any) => {
      const supabase = createClientComponentClient()

      const {data, error} = await supabase.from('Foods').insert([{
        name: formData.name, 
        calories: formData.calories, 
        proteins: formData.proteins,
        carbs: formData.carbs,
        fats: formData.fats,
        // TODO FIX THIS
                // TODO FIX THIS
                        // TODO FIX THIS
        seasons: formData.seasons.map((i) => i.value),
        taste: formData.taste.map((i) => i.value),
        weight: formData.weight.value,
        volume: formData.volume.value,
        functionality: formData.functionality.value,
        price: formData.price
      }])

      if (!error) {
        modalHandler.onClose();
      }

      console.log(data)
    };

    const labelWrapperClassNames = 'flex relative flex-col gap-1 w-full group';
    const labelsClassnames = 'text-md font-md text-slate-600 ml-1';
    const valueInputsWrapperClassnames = 'flex flex-col gap-1 relative';
    const valueInputsClassnames = 'flex w-full px-3 py-2 rounded-md outline-1 border-2 border-slate-300 outline-blue-500 pl-12';
    const hintHoverableButtonClassnames = "p-1 rounded-full font-bold shadow-sm text-slate-400 hover:text-green-700 hover:shadow-md mr-1 group";
    const labelClassnames = 'flex w-full flex-row relative group justify-between items-center';
    const hiddenInfoClasses = 'absolute max-w-[60%] bottom-1 right-10 px-2 py-3 hidden group-hover:flex bg-slate-50 shadow-md text-slate-600 rounded-md text-md font-semibold'


    return (
        /* "handleSubmit" will inputs before invoking "onSubmit" */
        <form 
          className={valueInputsWrapperClassnames} 
          onSubmit={handleSubmit(onSubmit)}>

            <span className={valueInputsWrapperClassnames} >
            {errors.name && <WarningRequired  message={errors.name.message}/>}
            <span className="absolute ratio-square p-3 text-slate-500 bg-transparent"><RxDrawingPin size={18}/></span>
            <input className={valueInputsClassnames} type="text" placeholder="Name" {...register("name")} />
            </span>

            <span className={valueInputsWrapperClassnames} >
            {errors.calories && <WarningRequired message={errors.calories.message}/>}
            <span className="absolute ratio-square p-3 text-slate-500 bg-transparent"><RxHeart size={18}/></span>
            <input className={valueInputsClassnames} type="number" step="0.01" placeholder="Calories" {...register("calories", {valueAsNumber: true})} />
            </span>

            <span className={valueInputsWrapperClassnames} >
            {errors.proteins && <WarningRequired  message={errors.proteins.message}/>}
            <span className="absolute ratio-square p-3 bg-transparent text-slate-500"><IoLogoAppleAr size={18}/></span>
            <input className={valueInputsClassnames} type="number" step="0.01" placeholder="Proteins" {...register("proteins", {valueAsNumber: true})} />
            </span>

            <span className={valueInputsWrapperClassnames} >
            {errors.fats && <WarningRequired  message={errors.fats.message}/>}
            <span className="absolute ratio-square p-3 bg-transparent text-slate-500"><IoLogoBuffer size={18}/></span>
            <input className={valueInputsClassnames} type="number" step="0.01" placeholder="Fats" {...register("fats", {valueAsNumber: true})} />
            </span>

            <span className={valueInputsWrapperClassnames} >
            {errors.carbs && <WarningRequired  message={errors.carbs.message}/>}
            <span className="absolute ratio-square p-3 bg-transparent text-slate-500"><IoLogoElectron size={18}/></span>
            <input className={valueInputsClassnames} type="number" step="0.01" placeholder="Carbs" {...register("carbs", {valueAsNumber: true})} />
            </span>

            <span className={labelWrapperClassNames}>
            {errors.seasons && <WarningRequired  message={errors.seasons.message}/>}
            <div className={labelClassnames}>
              <label className={labelsClassnames}>Seasons</label>
              <span className={hintHoverableButtonClassnames}>
                <RxQuestionMarkCircled size={24}/>
                <span className={hiddenInfoClasses}>
                  Each season suggests a different palette of ingredients, and different ways of preparing them and serving them.
                </span>
              </span>
            </div>
            <Controller 
              name='seasons'
              control={control}
              render={({ field }) => <Select isMulti
              {...field} 
              options={[
                { value: "spring", label: "Spring" },
                { value: "summer", label: "Summer" },
                { value: "autumn", label: "Autumn" },
                { value: "winter", label: "Winter" }
              ]} 
            />}
            />
            </span>
            
            <span className={labelWrapperClassNames}>
            {errors.taste && <WarningRequired  message={errors.taste.message}/>}
            <div className={labelClassnames}>
              <label className={labelsClassnames}>Taste</label>
              <span className={hintHoverableButtonClassnames}>
                <RxQuestionMarkCircled size={24}/>
                <span className={hiddenInfoClasses}>
                  Every ingredient has its stereotypical taste (bananas are sweet), plus its actual taste which might be a function of its age and ripeness.
                </span>
              </span>
            </div>
            <Controller 
              name='taste'
              control={control}
              render={({ field }) => <Select isMulti
              {...field} 
              options={[
                { value: "bitter", label: "Bitter" },
                { value: "sweet", label: "Sweet" },
                { value: "salty", label: "Salty" },
                { value: "sour", label: "Sour" },
                { value: "umami", label: "Umami" }
              ]} 
            />}
            />
            </span>

            <span className={labelWrapperClassNames}>
            {errors.weight && <WarningRequired  message={errors.weight.message}/>}
            <div className={labelClassnames}>
              <label className={labelsClassnames}>Weight</label>
              <span className={hintHoverableButtonClassnames}>
                <RxQuestionMarkCircled size={24}/>
                <span className={hiddenInfoClasses}>
                  Info stuff 
                </span>
              </span>
            </div>
            <Controller 
              name='weight'
              control={control}
              render={({ field }) => <Select
              {...field} 
              options={[
                { value: "light", label: "Light" },
                { value: "lightMedium", label: "Light-Medium" },
                { value: "medium", label: "Medium" },
                { value: "mediumHeavy", label: "Medium-Heavy" },
                { value: "heavy", label: "Heavy" },
              ]} 
            />}
            />
            </span>

            <span className={labelWrapperClassNames}>
            {errors.volume && <WarningRequired  message={errors.volume.message}/>}
            <div className={labelClassnames}>
              <label className={labelsClassnames}>Volume</label>
              <span className={hintHoverableButtonClassnames}>
                <RxQuestionMarkCircled size={24}/>
                <span className={hiddenInfoClasses}>
                  You need to be aware of an ingredient's volume whenever combining it with other ingredients. If a dish is overspiced to the point where you can not taste its essence it's wrong.
                </span>
              </span>
            </div>
            <Controller 
              name='volume'
              control={control}
              render={({ field }) => <Select
              {...field} 
              options={[
                { value: "loud", label: "Loud" },
                { value: "moderateLoud", label: "Moderate-Loud" },
                { value: "moderate", label: "Moderate" },
                { value: "quietModerate", label: "Quiet-Moderate" },
                { value: "quiet", label: "Quiet" },
              ]} 
            />}
            />
            </span>

            <span className={labelWrapperClassNames}>
            {errors.volume && <WarningRequired  message={errors.volume.message}/>}
            <div className={labelClassnames}>
              <label className={labelsClassnames}>Functionality</label>
              <span className={hintHoverableButtonClassnames}>
                <RxQuestionMarkCircled size={24}/>
                <span className={hiddenInfoClasses}>
                  Info stuff 
                </span>
                </span>
              </div>
            <Controller 
              name='functionality'
              control={control}
              render={({ field }) => <Select
              {...field} 
              options={[
                { value: "heating", label: "Heating" },
                { value: "warming", label: "Warming" },
                { value: "cooling", label: "Cooling" },
              ]} 
            />}
            />

            <span className={twMerge(valueInputsWrapperClassnames, 'mt-4')} >
            {errors.price && <WarningRequired  message={errors.price.message}/>}
            <span className="absolute ratio-square p-3 bg-transparent text-slate-500"><IoJournalOutline size={18}/></span>
            <input className={valueInputsClassnames} type="number" step="0.01" placeholder="Price per kg" {...register("price", {valueAsNumber: true})} />
            </span>

             </span>
            <input className="rounded-md shadow-md text-green-50 hover:text-green-100 py-3 font-bold bg-teal-900 hover:bg-teal-600 hover:shadow-lg cursor-pointer mt-4 " type="submit" />
        </form>
    )
}

export default FoodItemForm;