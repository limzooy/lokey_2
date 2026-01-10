
'use server'

import { z } from 'zod'

const schema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  name: z.string().min(1, { message: "Name is required." }),
  message: z.string().min(1, { message: "Message is required." }),
})

export async function saveEmail(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check your input.',
    }
  }
  
  try {
    // Here you would typically save the data to a database
    // or send an email. For this example, we'll just simulate success.
    console.log("Received contact form submission:", validatedFields.data);
    
    return { message: 'Thank you for your message! We will get back to you soon.', errors: null }
  } catch (error) {
    return {
      message: 'An unexpected error occurred. Please try again later.',
      errors: null,
    }
  }
}
