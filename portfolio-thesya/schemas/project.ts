// sanity/schemas/project.js
export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string' },
      { name: 'year', title: 'Year', type: 'number' },
      { name: 'status', title: 'Status', type: 'string' },
      { name: 'image', title: 'Image', type: 'image' },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'link', title: 'Link', type: 'url' },
    ],
  };
  