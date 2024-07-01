import { ref } from 'vue'

export function whichButton() {
  const viewButtonText = ref('View All Properties')
  const viewAllTestimonials = ref('View All Testimonials')
  return {
    viewButtonText,
    viewAllTestimonials,
  }
}
