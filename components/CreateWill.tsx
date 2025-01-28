"use client"

import React, { useEffect, useState } from "react"
import { isAddress } from "ethers"
import { useSmartWill } from "@/context/SmartWillContext"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Users, ScrollText, Coins, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function CreateWill() {
  const [formData, setFormData] = useState({
    beneficiary: "",
    assets: "",
    amount: "",
  })
  const [validationError, setValidationError] = useState("")

  const { account, connectWallet, createWill, loading, error, isConnected } = useSmartWill()

  useEffect(() => {
    if (!isConnected) {
      connectWallet()
    }
  }, [isConnected, connectWallet])

  const validateForm = () => {
    if (formData.assets.length < 50) {
      setValidationError("Description must be at least 50 characters long")
      return false
    }
    if (!formData.amount || Number.parseFloat(formData.amount) <= 0) {
      setValidationError("Initial deposit amount is required")
      return false
    }
    if (!isAddress(formData.beneficiary)) {
      setValidationError("Invalid beneficiary address")
      return false
    }
    setValidationError("")
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!isConnected) {
      await connectWallet()
    }

    if (!validateForm()) return

    try {
      const success = await createWill(formData.beneficiary, formData.assets, formData.amount)

      if (success) {
        setFormData({
          beneficiary: "",
          assets: "",
          amount: "",
        })
      }
    } catch (err) {
      console.error("Error submitting form:", err)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setValidationError("")
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {(error || validationError) && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error || validationError}</AlertDescription>
        </Alert>
      )}

      <Card className="border-primary/20 bg-card/60 backdrop-blur-xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-display text-center text-primary">Create Your Digital Will</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <Label htmlFor="beneficiary" className="text-lg text-foreground flex items-center gap-2">
                  <Users className="w-4 h-4" /> Beneficiary Address
                </Label>
                <Input
                  type="text"
                  id="beneficiary"
                  name="beneficiary"
                  value={formData.beneficiary}
                  onChange={handleChange}
                  className="bg-input border-input text-foreground 
                    focus:ring-2 focus:ring-ring focus:border-ring
                    placeholder:text-muted-foreground mt-2"
                  placeholder="0x..."
                  required
                />
              </div>

              <div className="relative">
                <Label htmlFor="amount" className="text-lg text-foreground flex items-center gap-2">
                  <Coins className="w-4 h-4" /> Initial Deposit (TLOS)
                </Label>
                <Input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="bg-input border-input text-foreground 
                    focus:ring-2 focus:ring-ring focus:border-ring
                    placeholder:text-muted-foreground mt-2"
                  placeholder="0.1"
                  step="0.000001"
                  min="0"
                  required
                />
              </div>

              <div className="relative">
                <Label htmlFor="assets" className="text-lg text-foreground flex items-center gap-2">
                  <ScrollText className="w-4 h-4" /> Assets Description
                </Label>
                <Textarea
                  id="assets"
                  name="assets"
                  value={formData.assets}
                  onChange={handleChange}
                  className="bg-input border-input text-foreground 
                    focus:ring-2 focus:ring-ring focus:border-ring
                    placeholder:text-muted-foreground mt-2 min-h-[120px]
                    transition-all duration-300 hover:bg-input/70"
                  placeholder="Describe your digital assets (minimum 50 characters)..."
                  required
                />
                <div className="mt-1 text-sm text-muted-foreground">{formData.assets.length}/50 characters</div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground 
                border border-primary/30 rounded-xl px-6 py-6
                shadow-lg transition-all duration-300 
                hover:shadow-xl hover:scale-[1.02] 
                active:scale-95 disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Will"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

