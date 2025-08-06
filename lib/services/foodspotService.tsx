import { FoodSpot } from "@/constant/types/home"
import axiosAPI from "../api"

export const foodspotService ={
    foodspots:async()=>{
        const response = await axiosAPI.get<FoodSpot[]>('/foodspots')
        return response
    },
    foodspotbyid:async(id:string)=>{
        const response = await axiosAPI.get<FoodSpot>(`/foodspots/${id}`)
        return response
    }
}