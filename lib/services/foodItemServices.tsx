import { FoodItem } from "@/constant/types/home"
import axiosAPI from "../api"

export const foodItemService={
    getFoodItem:async(foodSpotId:string)=>{
        const response = await axiosAPI.get<FoodItem[]>(`/fooditem/foodspot/${foodSpotId}`)
        return response
    }
} 