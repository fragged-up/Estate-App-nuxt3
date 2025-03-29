<script setup lang="ts">
defineProps<{ propertyName: string }>()

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  termsAccepted: false,
})

const handleSubmit = () => {
  if (!form.termsAccepted) {
    return alert('Please accept the terms.')
  }

  console.log('Inquiry for property:', form)
}
</script>
