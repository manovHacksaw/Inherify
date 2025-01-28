"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const steps = [
  {
    title: "Create Your Will",
    description: "Set up your digital will on Telos blockchain, specifying beneficiaries and asset distribution.",
  },
  {
    title: "Define Conditions",
    description: "Establish time-based or event-triggered conditions for asset release using smart contracts.",
  },
  {
    title: "Secure with Telos",
    description: "Your will is securely stored and executed on the fast and eco-friendly Telos blockchain.",
  },
  {
    title: "Easy Management",
    description: "Update your will anytime with our user-friendly interface, reflecting life changes instantly.",
  },
]

export default function WillInfo() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl font-display mb-6">
              Creating Your Will
              <br />
              on Telos Blockchain
            </h2>
            <p className="text-gray-400 mb-8">
              Secure your legacy with ease using our Telos-powered digital will platform. Our smart contract technology
              ensures your wishes are executed exactly as you intend, with the speed and efficiency of Telos blockchain.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full text-sm transition-colors">
              Start Your Will
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-black/50 border-gray-800">
              <div className="p-6">
                <ul className="space-y-4">
                  {steps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-emerald-400 mr-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">{step.title}</h3>
                        <p className="text-sm text-gray-400">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

