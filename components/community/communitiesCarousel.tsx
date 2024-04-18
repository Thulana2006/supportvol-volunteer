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

export default function CommunityCarousel() {
  return (
    <Carousel className="w-full">
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
