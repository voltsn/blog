import { createFileRoute } from '@tanstack/react-router';
import Post  from '../pages/post';

export const Route = createFileRoute('/post/$postId')({
  component: Post,
})


