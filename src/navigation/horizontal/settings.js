export default [
  {
    title: 'Settings',
    icon: { icon: 'tabler-settings' },
    children: [
      { title: 'Categories', to: 'admin-settings-categories', action: 'admin-view-categories', subject: 'View Categories' },
      { title: 'Sub Categories', to: 'admin-settings-sub-categories', action: 'admin-view-sub-categories', subject: 'View Sub Categories' },
    ],
  },
]
