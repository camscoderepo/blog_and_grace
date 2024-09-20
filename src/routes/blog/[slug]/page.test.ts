import { render } from '@testing-library/svelte';
import '@testing-library/jest-dom'; // For extended assertions like toBeInTheDocument
import Page from './+page.svelte';

test('renders blog data when blog exists', () => {
  const mockData = {
    blog: {
      title: 'Test Blog Title',
      content: 'Test Blog Content',
      date: '2024-09-20',
      excerpt: 'This is a test blog excerpt.',
    },
  };

  const { getByText } = render(Page, { props: { data: mockData } });

  // Check if the blog title, content, and other data are rendered
  expect(getByText('Test Blog Title')).toBeInTheDocument();
  expect(getByText('Test Blog Content')).toBeInTheDocument();
  expect(getByText('2024-09-20')).toBeInTheDocument();
  expect(getByText('This is a test blog excerpt.')).toBeInTheDocument();
});

test('renders fallback message when no blog exists', () => {
  const { getByText } = render(Page, { props: { data: {} } });

  // Check if the fallback message is displayed
  expect(getByText('Blog will be here...')).toBeInTheDocument();
});
