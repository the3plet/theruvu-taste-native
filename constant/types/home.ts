export type FoodSpot = {
  id: string;
  name: string;
  description: string;
  location: string;
  type: string;
  imageUrl: string;
  imagePublicId: string;
  averageRating: number;
  isOpen: boolean;
  ownerId: string;
  totalReview:number;
};

export type FoodItem = {
  id: string;
  name: string;
  price: number;
  description:string
  isAvailable: boolean;
  imageUrl: string;
  imagePublicId: string;
  foodSpotId: string;
}
