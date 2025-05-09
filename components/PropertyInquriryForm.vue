<script setup>
import { ref } from 'vue';
import { z } from 'zod';
import { useRouter } from 'vue-router';

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  preferredLocation: '',
  propertyType: '',
  bathrooms: '',
  bedrooms: '',
  budget: '',
  contactMethod: '',
  contactValue: '',
  message: '',
  termsAccepted: false,
});

const fullInquirySchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(9, 'Invalid phone number'),
  preferredLocation: z.string().min(1, 'Please select a location'),
  propertyType: z.string().min(1, 'Please select a property type'),
  bathrooms: z.string().min(1, 'Please select the number of bathrooms'),
  bedrooms: z.string().min(1, 'Please select the number of bedrooms'),
  budget: z.string().min(1, 'Please select your budget'),
  contactMethod: z.enum(['phone', 'email'], {
    errorMap: () => ({ message: 'Please select a contact method' }),
  }),
  contactValue: z.string().min(5, 'Please enter your contact information'),
  message: z.string().min(10, 'Please enter your message'),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the terms and conditions' }),
  }),
});

// Define error state
const errors = ref({});

// Submit form handler
const submitForm = async () => {
  // Validate form data
  try {
    await fullInquirySchema.parseAsync(formData.value);
    errors.value = {}; // Clear errors on success
    alert('Form Submitted!');
    // Handle form submission (e.g., API call)
  } catch (err) {
    // Capture validation errors
    errors.value = err.errors.reduce((acc, curr) => {
      acc[curr.path[0]] = curr.message;
      return acc;
    }, {});
  }
};

// Disable submit while form is being processed
const isSubmitting = ref(false);
</script>
<template>
  <div>
    <h1>Inquiry Form</h1>

    <form @submit.prevent="submitForm">
      <div>
        <label for="firstName">First Name:</label>
        <input
          id="firstName"
          v-model="formData.firstName"
          type="text"
          placeholder="First name"
        >
        <span v-if="errors.firstName">{{ errors.firstName }}</span>
      </div>

      <div>
        <label for="lastName">Last Name:</label>
        <input
          id="lastName"
          v-model="formData.lastName"
          type="text"
          placeholder="Last name"
        >
        <span v-if="errors.lastName">{{ errors.lastName }}</span>
      </div>

      <div>
        <label for="email">Email:</label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          placeholder="Email"
        >
        <span v-if="errors.email">{{ errors.email }}</span>
      </div>

      <div>
        <label for="phone">Phone:</label>
        <input
          id="phone"
          v-model="formData.phone"
          type="text"
          placeholder="Phone"
        >
        <span v-if="errors.phone">{{ errors.phone }}</span>
      </div>

      <div>
        <label for="preferredLocation">Preferred Location:</label>
        <input
          id="preferredLocation"
          v-model="formData.preferredLocation"
          type="text"
          placeholder="Preferred Location"
        >
        <span v-if="errors.preferredLocation">{{ errors.preferredLocation }}</span>
      </div>

      <div>
        <label for="propertyType">Property Type:</label>
        <select id="propertyType" v-model="formData.propertyType">
          <option value="">Select Property Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
        </select>
        <span v-if="errors.propertyType">{{ errors.propertyType }}</span>
      </div>

      <div>
        <label for="bathrooms">Bathrooms:</label>
        <select id="bathrooms" v-model="formData.bathrooms">
          <option value="">Select Bathrooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <span v-if="errors.bathrooms">{{ errors.bathrooms }}</span>
      </div>

      <div>
        <label for="bedrooms">Bedrooms:</label>
        <select id="bedrooms" v-model="formData.bedrooms">
          <option value="">Select Bedrooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <span v-if="errors.bedrooms">{{ errors.bedrooms }}</span>
      </div>

      <div>
        <label for="budget">Budget:</label>
        <select id="budget" v-model="formData.budget">
          <option value="">Select Budget</option>
          <option value="100000">100,000</option>
          <option value="200000">200,000</option>
          <option value="300000">300,000</option>
        </select>
        <span v-if="errors.budget">{{ errors.budget }}</span>
      </div>

      <div>
        <label for="contactMethod">Preferred Contact Method:</label>
        <select id="contactMethod" v-model="formData.contactMethod">
          <option value="">Select Contact Method</option>
          <option value="phone">Phone</option>
          <option value="email">Email</option>
        </select>
        <span v-if="errors.contactMethod">{{ errors.contactMethod }}</span>
      </div>

      <div>
        <label for="contactValue">Contact Info:</label>
        <input
          id="contactValue"
          v-model="formData.contactValue"
          type="text"
          placeholder="Phone/Email"
        >
        <span v-if="errors.contactValue">{{ errors.contactValue }}</span>
      </div>

      <div>
        <label for="message">Message:</label>
        <textarea
          id="message"
          v-model="formData.message"
          placeholder="Enter your message"
        />
        <span v-if="errors.message">{{ errors.message }}</span>
      </div>

      <div>
        <label for="termsAccepted">
          <input
            id="termsAccepted"
            v-model="formData.termsAccepted"
            type="checkbox"
          >
          Accept Terms and Conditions
        </label>
        <span v-if="errors.termsAccepted">{{ errors.termsAccepted }}</span>
      </div>

      <div>
        <button type="submit" :disabled="isSubmitting">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>



<style scoped>
form {
  width: 300px;
  margin: 0 auto;
}
div {
  margin-bottom: 1rem;
}
input,
select,
textarea {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
}
button {
  width: 100%;
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
button:disabled {
  background-color: #cccccc;
}
span {
  color: red;
  font-size: 0.875rem;
}
</style>
