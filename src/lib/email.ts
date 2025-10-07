"use server"

import { z } from "zod"
import { formSchema } from "./Schema"
import { Resend } from "resend"
import { EmailTemplate } from "@/components/sections/Contact/email-tamplate"



// recipients can be configured via RESEND_TO (comma-separated list)
const getRecipients = () => {
  const env = process.env.RESEND_TO
  if (!env) return ["mdfarid.0118@gmail.com"]
  return env.split(",").map(e => e.trim()).filter(Boolean)
}

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("RESEND_API_KEY is missing. Set RESEND_API_KEY in your environment variables.")
      throw new Error("Mail service not configured")
    }
    const resend = new Resend(apiKey)
    const fromAddress = "noreply@resend.dev"
    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: getRecipients(),
      subject: `New Contact Form Submission from ${emailFormData.fullName}`,
      replyTo: emailFormData.email,
      react: EmailTemplate({
        fullName: emailFormData.fullName,
        email: emailFormData.email,
        phoneNo: emailFormData.phoneNo,
        message: emailFormData.message,
      }),
    })

    if (error) {
      console.error("Resend API error:", error)
      throw new Error(typeof error === "string" ? error : JSON.stringify(error))
    }
    return { success: true, data }
  } catch (err) {
    console.error("Email send failed:", err)
    throw err
  }
}
