<script setup lang="ts">
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  location: '',
  propertyType: '',
  bathrooms: '',
  bedrooms: '',
  budget: '',
  contactMethod: 'phone', // 'phone' or 'email'
  contactValue: '',
  message: '',
  termsAccepted: false,
})

const handleSubmit = () => {
  if (!form.termsAccepted) {
    return alert('Please accept the terms first.')
  }

  console.log('Submitting form:', form)
  // כאן תשלח ל־API או תבצע פעולה
}
</script>
