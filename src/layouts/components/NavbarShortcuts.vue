<script setup>
const shortcuts = [
  {
    icon: 'tabler-device-desktop-analytics',
    title: 'Dashboard',
    subtitle: 'Dashboard',
    to: { name: 'admin-dashboards' },
    action: 'read',
    subject: 'Dashboard',
  },
  {
    icon: 'tabler-settings',
    title: 'Settings',
    subtitle: 'Account Settings',
    to: {
      name: 'admin-profiles',
    },
  },
]
</script>

<template>
  <Shortcuts :shortcuts="shortcuts" />
</template>
