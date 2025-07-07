export default [
  {
    title: 'Settings',
    icon: { icon: 'tabler-settings' },
    children: [
      { title: 'Categories', to: 'admin-settings-categories', action: 'admin-view-categories', subject: 'View Categories' },
      { title: 'Certifications', to: 'admin-settings-certifications', action: 'admin-view-certifications', subject: 'View Certifications' },
      { title: 'Package Types', to: 'admin-settings-packagetypes', action: 'admin-view-packagetypes', subject: 'View Package Types' },
      { title: 'Quantity Types', to: 'admin-settings-quantitytypes', action: 'admin-view-quantitytypes', subject: 'View Quantity Types' },
      { title: 'Tags', to: 'admin-settings-tags', action: 'admin-view-tags', subject: 'View Tags' },
    ],
  },
]
