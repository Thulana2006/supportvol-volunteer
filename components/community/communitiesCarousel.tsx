import * as React from "react"
import CommCard from './comCard';

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { json } from "stream/consumers";

interface CommunityCarouselProps {
  uid: string;
}

const CommunityCarousel: React.FC<CommunityCarouselProps> = ({ uid }) => {

  const handleSubmit = async (e: any) => {
    e.preventDefault();
 
    const userid = uid; // Replace 'your_uid_here' with your actual UID
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'uid': userid,
      },
    };
 
    try {
      const response = await fetch('https://support-vol.as.r.appspot.com/api/community', requestOptions);
      if (!response.ok) {
        console.log(response);
        throw new Error('Network response was not ok');
      }
      // Handle successful response
      console.log('Request successful');
      console.log(response);
    } catch (error) {
      // Handle error
      console.error('There was an error!', error);
    }
  };

  return (
    <Carousel className="w-full" onLoad={handleSubmit}>
      <CarouselContent className="-ml-1">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <div className="">
            
            <CommCard 
                imageURL="https://via.placeholder.com/800x500" 
                title="Essenine malpae" 
                description="We strive to protect birds that immigrate from South in summer times."
                initiativeCount={20}
                projectCount={80}
                memberCount={500}
                communityID="824323hj4kjhdf793242uihfw783"
                joined={index %3 == 0 ? true : false}/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CommunityCarousel;