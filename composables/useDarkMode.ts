import { ref, watchEffect } from 'vue';

const STORAGE_KEY = 'theme-dark';

export function useDarkMode() {
  const isDark = ref(false);

  // Initialize from localStorage
  if (typeof window !== 'undefined') {
    isDark.value = localStorage.getItem(STORAGE_KEY) === 'true';
    document.documentElement.classList.toggle('dark', isDark.value);
  }

  const toggle = () => {
    isDark.value = !isDark.value;
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, isDark.value ? 'true' : 'false');
      document.documentElement.classList.toggle('dark', isDark.value);
    }
  };

  // Keep in sync
  watchEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', isDark.value);
    }
  });

  return { isDark, toggle };
}
