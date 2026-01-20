"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Loader2 } from "lucide-react"

const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  propertyId: z.string().optional(),
  propertyAddress: z.string().optional(),
  type: z.enum(["buyer", "seller"]),
})

type LeadFormData = z.infer<typeof leadFormSchema>

interface LeadFormProps {
  propertyId?: string
  propertyAddress?: string
  type: "buyer" | "seller"
  trigger?: React.ReactNode
}

export function LeadForm({
  propertyId,
  propertyAddress,
  type,
  trigger,
}: LeadFormProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      propertyId,
      propertyAddress,
      type: type as "buyer" | "seller",
    },
  })

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, type }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Thank you! We'll be in touch soon.",
        })
        reset()
        setTimeout(() => {
          setOpen(false)
          setSubmitStatus(null)
        }, 2000)
      } else {
        setSubmitStatus({
          success: false,
          message: result.message || "Something went wrong. Please try again.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Failed to submit. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button>
            {type === "buyer" ? "Inquire About This Property" : "Request Valuation"}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {type === "buyer"
              ? "Inquire About This Property"
              : "Request Home Valuation"}
          </DialogTitle>
          <DialogDescription>
            {type === "buyer"
              ? "Fill out the form below and we'll get back to you soon."
              : "Get an estimate of your home's value. We'll contact you shortly."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="(555) 123-4567"
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          {propertyAddress && (
            <div className="space-y-2">
              <Label>Property</Label>
              <Input value={propertyAddress} disabled />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              {...register("message")}
              placeholder={
                type === "buyer"
                  ? "Tell us about your interest in this property..."
                  : "Tell us about your property..."
              }
              rows={4}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          {submitStatus && (
            <div
              className={`p-3 rounded-md text-sm ${
                submitStatus.success
                  ? "bg-green-50 text-green-800"
                  : "bg-red-50 text-red-800"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
