import { ChevronRight } from "lucide-react"
import { Button } from "../ui/button"
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

export const Hero = ({isVisible} : {isVisible:boolean}) => {
  return (
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-teal-300/30 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
            <motion.div
              className="max-w-2xl text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                  Shape Your Future at{" "}
                  <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    Paradise Computer Institute
                  </span>
                </h1>
                
              </motion.div>

              <motion.p
                className="mb-8 text-lg text-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Empowering students with cutting-edge technology skills since 2018. Our industry-aligned courses prepare
                you for the digital future.
              </motion.p>

              <motion.div
                className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/courses">
                <Button size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
                  Explore Courses <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                </Link>
                
                <Button size="lg" variant="outline">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfxGZdZzKOMhc84IslYEWBikI47b5IuFbsV51ojNTkXIe3_Lg/viewform?usp=dialog" target="__blank">Contact Us</a>
                </Button>
              </motion.div>
            </motion.div>

            {/* <motion.div
              className=" h-[400px] w-full max-w-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            > */}
              {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 p-1 shadow-xl">
                <div className="h-full w-full rounded-xl bg-white">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Students learning at Paradise Computer Institute"
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>
              </div> */}
              {/* <OrbitingCirclesDemo/> */}
            {/* </motion.div> */}

            <div className=" laptop:h-[400px] w-full max-w-xl" style={{opacity: 1, transform: "none"}}><div className="h-full w-full rounded-xl bg-transparent "><img alt="Students learning at Paradise Computer Institute" className="h-full w-full rounded-xl object-contain bg-transparent" src="/hero-img.png" />
            </div>
            </div>
          </div>
        </div>
      </section>
  )
}
