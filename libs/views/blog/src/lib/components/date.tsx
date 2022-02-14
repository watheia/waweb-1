import { parseISO, format } from 'date-fns';

export interface DateProps {
  dateString: string;
}

export default function Date(props: DateProps) {
  const date = parseISO(props.dateString);
  return (
    <time className="text-gray-400" dateTime={props.dateString}>
      {format(date, 'LLLL	d, yyyy')}
    </time>
  );
}
