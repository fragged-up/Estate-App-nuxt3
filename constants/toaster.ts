import { toast } from 'vue-sonner'

type ToastOptions = {
  ToastMessage: string
  bgColor?: string
  textColor?: string
  borderColor?: string
  duration?: number
  position?: 'bottom-right' | 'top-right' | 'bottom-left' | 'top-left'
}

export function showToast({
  ToastMessage,
  bgColor,
  textColor,
  borderColor,
  position = 'top-right',
  duration = 5500
}: ToastOptions) {
  toast(ToastMessage, {
    position,
    duration,
    style: {
      height:'150px',
      fontSize:'20px',
      fontFamily:'font-sans',
      textAlign:'center',
      background: bgColor ?? '#1a1a1a',
      color: textColor ?? '#ffffff',
      border: `1px solid ${borderColor ?? '#262626'}`
    }
  })
}
