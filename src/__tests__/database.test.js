import { createClient } from '@supabase/supabase-js';
import { beforeAll, afterAll, describe, it, expect } from 'vitest';
// Initialize your Supabase client
const supabaseUrl = 'https://your-project-ref.supabase.co';
const supabaseKey = 'your-anon-or-service-role-key';
const supabase = createClient(supabaseUrl, supabaseKey);

beforeAll(async () => {
  // Optional: Clear the blog_posts table if needed
  await supabase.from('blog_posts').delete().neq('id', null);
});

afterAll(async () => {
  // Optional: Clean up after tests if necessary
});

describe('Blog Posts Table', () => {
  it('should insert a new blog post', async () => {
    const title = 'Test Post';
    const content = 'This is a test blog post.';

    const { data, error } = await supabase
      .from('blog_posts')
      .insert([{ title, content }]);

    expect(error).toBeNull();
    expect(data).toHaveLength(1);
    expect(data[0]).toHaveProperty('id');
    expect(data[0].title).toBe(title);
    expect(data[0].content).toBe(content);
  });

  it('should retrieve a blog post by id', async () => {
    const postId = 1; // Use the ID of the inserted post

    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', postId);

    expect(error).toBeNull();
    expect(data).toHaveLength(1);
    expect(data[0]).toHaveProperty('id', postId);
  });

  it('should not allow duplicate titles', async () => {
    const title = 'Duplicate Post';
    const content = 'This post is a duplicate.';

    await supabase.from('blog_posts').insert([{ title, content }]);

    const { error } = await supabase.from('blog_posts').insert([{ title, content }]);

    expect(error).not.toBeNull();
    expect(error.message).toMatch(/duplicate key value violates unique constraint/);
  });
});