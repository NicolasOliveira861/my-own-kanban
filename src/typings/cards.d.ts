export interface CardProps {
  title: string;
  description: string;
  tags?: string[];
  state: 'to do' | 'doing' | 'done';
}
