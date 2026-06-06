import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";"
import TestimonialCard from "./testemonials-card"


export const StudentsReview = ({studentReviews} :any) => {
  return (
    <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-[20px] laptop:px-4">
            <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            >
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">What Our Students Say</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Hear from our alumni about their learning experience and how our courses helped them achieve their career
              goals.
            </p>
            </motion.div>

            <Carousel
            opts={{
                align: "start",
            }}
            className="w-full "
            >
            <CarouselContent>
              {
                studentReviews.map((testimonial:any, index:number)=>(
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 ">
                        <TestimonialCard testimonial={testimonial} />
                    </div>
                    </CarouselItem>
                ))
              }
            </CarouselContent>
            </Carousel>
        </div>
    </section>
  )
}

