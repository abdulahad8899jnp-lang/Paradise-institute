import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const SignIn = () => {

  // Form states
  const [loginEmail, setLoginEmail] = useState("")
  const [dob, setDob] = useState("")

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log("Registration Number:", loginEmail)
    console.log("DOB:", dob)
  }

  return (
    <div className="h-screen bg-gradient-to-b from-slate-50 to-slate-100">

      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 h-full ">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-teal-300/30 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 mt-20 ">
          <motion.div
            className="mx-auto max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-none shadow-xl">
              <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-2xl font-bold">Welcome</CardTitle>
                <CardDescription>Add your registration details..</CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleLoginSubmit} className="space-y-4 pt-4">

                  {/* Registration Number */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Registration Number</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        type="text"
                        placeholder="1124XXW87ZW99"
                        className="pl-10"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* DOB Field */}
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        type="date"
                        className="pl-10"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
                    Sign In
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
