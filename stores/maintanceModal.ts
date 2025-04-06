export const useMaintanceModal = defineStore('maintainceModal', () => {
  const isOpen = ref<boolean>(false);
  const openModal = () => {
    isOpen.value = true;
  };

  const closeModal = () => {
    isOpen.value = false;
  };
  const toggleModal = () =>{
    isOpen.value = !isOpen.value
  }

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
  };
});
