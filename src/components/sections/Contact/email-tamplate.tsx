import * as React from 'react'

interface EmailTemplateProps {
  fullName: string
  email: string
  phoneNo: string
  message: string
}

export function EmailTemplate({ fullName, email, phoneNo, message }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', lineHeight: '1.6' }}>
<h2>
  📬 Contact Form Submission via Md Farid&apos;s Portfolio: <a href="https://www.thefarid.xyz/" style={{ color: '#1a0dab', textDecoration: 'none' }}>www.thefarid.xyz</a>
</h2>
      <p><strong>Full Name:</strong> {fullName}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone Number:</strong> {phoneNo}</p>
      <p><strong>Message:</strong><br />{message}</p>
    </div>
  )
}
