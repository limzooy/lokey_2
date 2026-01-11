'use server'

import { z } from 'zod'

const schema = z.object({
  email: z.string().email({ message: "유효한 이메일 주소를 입력해주세요." }),
  name: z.string().min(1, { message: "이름을 입력해주세요." }),
  message: z.string().min(1, { message: "메시지를 입력해주세요." }),
})

export async function saveEmail(prevState: any, formData: FormData) {
  /*
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: '입력 내용을 다시 확인해주세요.',
    }
  }
  
  try {
    // 데이터를 데이터베이스에 저장하거나 이메일을 보내는 로직이 여기에 들어갑니다.
    // 현재는 성공을 시뮬레이션합니다.
    console.log("문의 폼 제출 받음:", validatedFields.data);
    
    return { message: '메시지를 보내주셔서 감사합니다! 곧 회신드리겠습니다.', errors: null }
  } catch (error) {
    return {
      message: '예상치 못한 오류가 발생했습니다. 나중에 다시 시도해주세요.',
      errors: null,
    }
  }
  */
 return { message: '현재 문의 기능을 점검 중입니다. 죄송합니다.', errors: null }
}
