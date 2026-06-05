import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Award, Building, Calendar, GraduationCap, Users } from "lucide-react"
import TeamMemberCard from "@/components/about-us/team-member-card"

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const teamMembers = [
    {
      id: 1,
      name: "Mohd Sharib Khan",
      role: "Founder",
      bio: "MSc and LLB with over 10 years of experience in education and industry. Passionate about bridging technology and law for impactful solutions.",
      image: "/sharib-sir-pic.jpeg",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 2,
      name: "Mohd Sajid Khan",
      role: "Software Er & Programing Instructor",
      bio: "Instructor in Programming and Web Development with an MCA and over 6+ years of experience in education and industry. Skilled in delivering practical, career-focused tech training.",
      image: "/sajid-sir-pic.jpeg",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 3,
      name: "Salman Khan",
      role: "Director and Microsoft Office & Financial Accounting Expert.",
      bio: "Instructor in Tally, MS Office, MS Excel, and related tools with an MBA and extensive experience in business and office applications. Focused on practical, job-oriented training.",
      image: "/salman-sir-pic.jpeg",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ]

  const milestones = [
    {
      year: "2017",
      title: "Foundation",
      description: "Paradise Computer Institute was established with a vision to provide quality IT education.",
    },
    {
      year: "2018",
      title: "Seminar",
      description: "Conducted a seminar to share knowledge, engage students, and explore tech trends and career paths.",
    },
    
    {
      year: "2018",
      title: "Certification",
      description: "We are authorized with MSME certification as a recognized training center.",
    },
    {
      year: "2019",
      title: "Industry Partnership",
      description: "Formed strategic partnerships with leading tech companies for placement opportunities.",
    },
  ]

  const facilities = [
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      title: "Modern Infrastructure",
      description: "State-of-the-art classrooms and labs equipped with the latest hardware and software technologies.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Collaboration Spaces",
      description: "Dedicated areas for group projects, discussions, and collaborative learning experiences.",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      title: "Career Center",
      description:
        "Guidance for job placements, interview preparation, and career counseling by industry professionals.",
    },
  ]

  const achievements = [
    "Recognized as the Best Computer Training Institute by Education Excellence Awards 2022",
    "ISO 9001:2015 certified for quality management systems",
    "Trained over 25,000 students with a 90% placement record",
    "Partnerships with 100+ companies for internships and job placements",
    "Faculty members with an average of 12+ years of industry experience",
    "Authorized training partner for Microsoft, Oracle, and Cisco certifications",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-teal-300/30 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Our Journey of{" "}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="mb-8 text-lg text-slate-700 md:text-xl">
              Since 2017, Paradise Computer Institute has been at the forefront of technology education, empowering
              students with the skills they need to succeed in the digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-slate-900">Our Mission</h2>
              <p className="mb-6 text-lg text-slate-700">
                To provide high-quality, industry-relevant technology education that empowers individuals to achieve
                their career goals and contribute to the digital transformation of society.
              </p>
              <p className="text-lg text-slate-700">
                We are committed to creating a learning environment that fosters innovation, critical thinking, and
                practical skills development through hands-on training and personalized mentorship.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-slate-900">Our Vision</h2>
              <p className="mb-6 text-lg text-slate-700">
                To be the leading technology education institute recognized for excellence, innovation, and the success
                of our students in the global digital economy.
              </p>
              <p className="text-lg text-slate-700">
                We envision a future where our graduates are at the forefront of technological advancement, driving
                positive change and solving complex challenges through their expertise and leadership.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Our Story</h2>
            <p className="mx-auto max-w-3xl text-lg text-slate-600">
              From humble beginnings to becoming a leading technology education institute, our journey has been defined
              by a passion for excellence and innovation.
            </p>
          </motion.div>

          <div className="relative mx-auto max-w-4xl ">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-teal-600 to-cyan-600"></div>

            {/* Timeline Items */}
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`relative mb-12 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-1/2 "></div>
                <div className="absolute left-1/2 top-0 -mt-1 -translate-x-1/2 transform">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg">
                    <Calendar className="h-4 w-4" />
                  </div>
                </div>
                <div className="w-1/2 px-2 py-4 laptop:px-6 laptop:py-4">
                  <div
                    className={`rounded-lg bg-white p-3 laptop:p-6 shadow-md ${
                      index % 2 === 0 ? "ml-auto text-right" : "mr-auto text-left"
                    }`}
                  >
                    <span className="mb-2 inline-block rounded bg-gradient-to-r from-teal-600 to-cyan-600 px-3 py-1 text-sm font-semibold text-white">
                      {milestone.year}
                    </span>
                    <h3 className="mb-2 text-xl font-bold text-slate-900 text-left ">{milestone.title}</h3>
                    <p className="text-slate-600 text-left ">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Our Expert Team</h2>
            <p className="mx-auto max-w-3xl text-lg text-slate-600">
              Meet our dedicated faculty members who bring years of industry experience and academic excellence to
              provide you with the best learning experience.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 laptop:px-20 ">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="h-full "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">World-Class Facilities</h2>
            <p className="mx-auto max-w-3xl text-lg text-slate-600">
              We provide state-of-the-art infrastructure and resources to ensure an optimal learning environment for our
              students.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                className="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">{facility.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{facility.title}</h3>
                <p className="text-slate-600">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Achievements</h2>
            <p className="mx-auto max-w-3xl text-lg text-teal-50">
              We take pride in our accomplishments and the recognition we have received for our commitment to excellence
              in education.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Award className="h-6 w-6 flex-shrink-0 text-teal-300" />
                <p className="text-lg">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
