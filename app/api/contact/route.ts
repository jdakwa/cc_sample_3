import { NextRequest, NextResponse } from "next/server"
import { submitInquiry } from "@/lib/repliers"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, propertyId, type } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      )
    }

    // Submit to Repliers API (if configured)
    // For now, we'll just log it and return success
    // In production, you'd want to:
    // 1. Store in a database
    // 2. Send email notification
    // 3. Submit to Repliers API if they support inquiries
    // 4. Send to CRM system

    console.log("New inquiry received:", {
      name,
      email,
      phone,
      message,
      propertyId,
      type,
      timestamp: new Date().toISOString(),
    })

    // Try to submit to Repliers API if configured
    try {
      await submitInquiry({
        name,
        email,
        phone,
        message,
        propertyId,
        type,
      })
    } catch (error) {
      // Log error but don't fail the request
      console.error("Failed to submit to Repliers API:", error)
    }

    // In a real application, you would:
    // - Save to database
    // - Send email notification
    // - Integrate with CRM

    return NextResponse.json({
      success: true,
      message: "Thank you for your inquiry. We'll be in touch soon!",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { success: false, message: "Failed to process your request" },
      { status: 500 }
    )
  }
}
