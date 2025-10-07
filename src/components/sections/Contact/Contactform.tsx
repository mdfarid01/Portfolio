"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from "@/lib/Schema"
import z from "zod"
import { send } from "@/lib/email"
import { Loader2, Send } from "lucide-react"
import { useState } from "react"

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { fullName: "", phoneNo: "", email: "", message: "" },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setStatus(null)
    try {
      await send(values)
      setStatus({ type: "success", text: "Message sent — I will reply soon." })
      await new Promise(res => setTimeout(res, 1200))
      form.reset()
    } catch (error: unknown) {
        console.error("Error sending message:", error)
        const message = error instanceof Error ? error.message : String(error) || "Failed to send message"
        setStatus({ type: "error", text: message })
      }
  }

  const [status, setStatus] = useState<null | { type: "success" | "error"; text: string }>(null)

  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardHeader className="text-left">
        <CardTitle>Send me a message</CardTitle>
        <CardDescription>
          Fill out the form below and I will get back to you as soon as possible.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone *</FormLabel>
                    <FormControl>
                      <Input placeholder="+91 -----" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell me about your project or just say hello..."
                      className="min-h-[120px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button type="submit" className="w-fit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 start-0 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>

            {status ? (
              <p className={`mt-2 text-sm ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
                {status.text}
              </p>
            ) : null}
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default ContactForm
