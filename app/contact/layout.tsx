import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - IDX Pro",
  description: "Get in touch with IDX Pro. Contact us for property inquiries, home valuations, or general questions.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
