<script setup lang="ts">
  type SelectInputs = {
    label?: string;
    placeHolder?: string;
    options: string[] | (() => string[]);
    selectHead: string;
    modelValue?: string;
    extraStyle?: string;
  };

  const props = defineProps<SelectInputs>();
  const emit = defineEmits(['update:modelValue']);

  const selectedOption = ref(props.modelValue || '');
  const dropdownVisible = ref(false);
  const focusedIndex = ref(-1);

  const resolvedOptions = computed(() => {
    return typeof props.options === 'function' ? props.options() : props.options;
  });

  watch(
    () => props.modelValue,
    (val: any) => {
      selectedOption.value = val || '';
    },
  );

  const toggleDropdown = () => {
    dropdownVisible.value = !dropdownVisible.value;
  };

  const closeDropdown = () => {
    dropdownVisible.value = false;
    focusedIndex.value = -1;
  };

  const selectOption = (option: string) => {
    selectedOption.value = option;
    emit('update:modelValue', option);
    closeDropdown();
  };

  const onKeydown = (e: KeyboardEvent) => {
    if (!dropdownVisible.value) return;
    if (e.key === 'ArrowDown') {
      focusedIndex.value = (focusedIndex.value + 1) % resolvedOptions.value.length;
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      focusedIndex.value = (focusedIndex.value - 1 + resolvedOptions.value.length) % resolvedOptions.value.length;
      e.preventDefault();
    } else if (e.key === 'Enter') {
      if (focusedIndex.value >= 0) {
        selectOption(resolvedOptions.value[focusedIndex.value]);
      }
    } else if (e.key === 'Escape') {
      closeDropdown();
    }
  };
</script>

<template>
  <div class="relative mx-auto w-11/12 my-6" :class="extraStyle">
    <label class=" font-sans text-base font-semibold text-white">
      {{ selectHead }}
    </label>
    <div
      class="flex items-center my-6 justify-between rounded-2xl border border-[#262626] bg-[#141414] p-4 cursor-pointer"
      role="combobox"
      aria-haspopup="listbox"
      :aria-expanded="dropdownVisible.toString()"
      tabindex="0"
      @click="toggleDropdown"
      @keydown="onKeydown"
    >
      <span class="text-sm font-medium text-[#666666] font-sans">
        {{ selectedOption || placeHolder || 'Select an option' }}
      </span>
      <svg
        class="ml-2 h-5 w-5 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          :d="dropdownVisible ? 'M19 15l-7-7-7 7' : 'M19 9l-7 7-7-7'"
        />
      </svg>
    </div>

    <ul
      v-show="dropdownVisible"
      role="listbox"
      class="absolute z-10 max-h-60 w-full overflow-auto rounded-2xl border border-[#262626] bg-[#1a1a1a] shadow-lg"
    >
      <li
        v-for="(option, index) in resolvedOptions"
        :key="option"
        class="px-4 py-2 text-white cursor-pointer hover:bg-[#333] transition"
        :class="{ 'bg-[#444]': index === focusedIndex }"
        role="option"
        :aria-selected="selectedOption === option"
        @click="selectOption(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>
