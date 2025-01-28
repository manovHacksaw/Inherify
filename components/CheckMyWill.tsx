"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useSmartWill } from "../context/SmartWillContext"
import { Loader2, Edit, PlusCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const CheckMyWill = () => {
  const [willDetails, setWillDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const { account, connectWallet, getWillDetails } = useSmartWill()
  const router = useRouter()

  useEffect(() => {
    if (!account) {
      connectWallet()
    } else {
      const fetchWill = async () => {
        try {
          const details = await getWillDetails(account)
          setWillDetails(details)
        } catch (err) {
          setError("Error fetching will details.")
        } finally {
          setLoading(false)
        }
      }

      fetchWill()
    }
  }, [account, connectWallet, getWillDetails])

  const handleEditWill = () => {
    router.push("/create-will")
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="w-12 h-12 text-primary animate-spin" />
        </div>
      ) : error ? (
        <div className="bg-destructive text-destructive-foreground p-4 rounded-xl text-sm">{error}</div>
      ) : willDetails ? (
        <Card className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl font-display text-primary mb-6">Will Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-left">
              <p className="text-muted-foreground">
                <span className="text-foreground">Beneficiary:</span> {willDetails[3]}
              </p>
              <p className="text-muted-foreground">
                <span className="text-foreground">Instructions:</span> {willDetails[4]}
              </p>
              <p className="text-muted-foreground">
                <span className="text-foreground">Date Created:</span>{" "}
                {new Date(Number(willDetails[2])).toLocaleDateString()}
              </p>
            </div>
            <div className="mt-8">
              <Button
                onClick={handleEditWill}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl shadow-lg flex items-center gap-2 transform hover:bg-primary/90 hover:scale-105 transition-transform"
              >
                <Edit className="w-5 h-5" /> Edit Will
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div>
          <p className="text-xl mb-6">You haven't created a will yet.</p>
          <Button
            onClick={() => router.push("/create-will")}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl shadow-lg flex items-center gap-2 transform hover:bg-primary/90 hover:scale-105 transition-transform"
          >
            <PlusCircle className="w-5 h-5" /> Create Will
          </Button>
        </div>
      )}
    </div>
  )
}

export default CheckMyWill

