export default [
  {
    title: 'Settings',
    icon: { icon: 'tabler-settings' },
    children: [
      { title: 'Categories', to: 'admin-settings-categories', action: 'admin-view-categories', subject: 'View Categories' },
      { title: 'Category Builders', to: 'admin-settings-category-builders', action: 'admin-view-category-builders', subject: 'View Category Builders' },
      { title: 'Certifications', to: 'admin-settings-certifications', action: 'admin-view-certifications', subject: 'View Certifications' },
      { title: 'Package Types', to: 'admin-settings-packagetypes', action: 'admin-view-packagetypes', subject: 'View Package Types' },
      { title: 'Quantity Types', to: 'admin-settings-quantitytypes', action: 'admin-view-quantitytypes', subject: 'View Quantity Types' },
      { title: 'Sub Categories', to: 'admin-settings-sub-categories', action: 'admin-view-sub-categories', subject: 'View Sub Categories' },
      { title: 'Tags', to: 'admin-settings-tags', action: 'admin-view-tags', subject: 'View Tags' },
    ],
  },
]
