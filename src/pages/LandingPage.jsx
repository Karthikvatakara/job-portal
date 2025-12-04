import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card"
import { Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel"
import companies from "../data/companies.json";
import faqs from "../data/faqs.json";
import Autoplay from 'embla-carousel-autoplay';
import {
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function LandingPage() {
  return (
    <main className='flex flex-col text-center justify-center  items-center gap-10 sm:gap-20 py-2'>
        <section>
            <h1 className='p-2 flex flex-col items-center text-3xl sm:text-5xl font-extrabold lg:text-6xl bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Find Your Dream Job <span className='flex items-center gap-4 sm:gap-6'> and Get <img src="/logo.png" alt="" class='h-28 sm:h-48 lg:h-32'  /> </span></h1>
            <p className='block justify-center'>Explore thousands of job listings or find the perfect candidate</p>
        </section>
        <div className='flex gap-6'>
            <Link to="/jobs">
                <Button variant="blue" size="xl">Find Jobs</Button>
            </Link>
            <Link to="/post-job">
                <Button variant="destructive" size="xl">Post a Job</Button>
            </Link>
        </div>

            <div>
        <Carousel plugins={[Autoplay({delay:2000})]} className="w-full z-[-1]">
      <CarouselContent>
       {companies.map((item) => (
            <CarouselItem key={item.id} className="basis-1/2 sm:basis-1/3 lg:basis-1/4 flex items-center justify-center">
                <Card className="shadow-none border-none">
                    <CardContent className="flex items-center justify-center p-4">
                        <img src={item.path} alt={item.nam} />
                    </CardContent>
                </Card>
            </CarouselItem>
       ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      </Carousel>
            </div>

            {/* banner */}
            <div>
                <img src="./banner.jpeg" alt="" className='w-full'/>
            </div>

            <section className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20'>
        <Card>
        <CardHeader>
        <CardTitle>For job seekers</CardTitle>
        </CardHeader>
        <CardContent>
            search and apply for jobs, track application and more..
         </CardContent>
        </Card>

        <Card>
        <CardHeader>
        <CardTitle>For Employers</CardTitle>
        </CardHeader>
        <CardContent>
            post jobs,manage applicatiions and find best candidates
         </CardContent>
        </Card>
            </section>

                     {/* accordion */}
            <section className='w-full md:w-1/2'>
            <Accordion type="single" collapsible>
                {faqs.map((item,index) => (
                     <AccordionItem value={`item-${index+1}`} key={index}>
    <AccordionTrigger className="flex w-full justify-between">{item.question}</AccordionTrigger>
    <AccordionContent>
      {item.answer}
    </AccordionContent>
  </AccordionItem>
                ))}
</Accordion>
            </section>
    </main>
  )
}

export default LandingPage
