import Container from './container';
import cn from 'clsx';
import Link from 'next/link';

export interface AlertProps {
  preview: boolean;
}

export default function Alert({ preview }: AlertProps) {
  return preview ? null : (
    <div className={cn('bg-accent-7 border-accent-7 border-b text-gray-400')}>
      <Container>
        <div className="py-2 text-sm text-center">
          This is page is showing static content.{' '}
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="text-white underline transition-colors duration-200 hover:text-teal-500">
              Sign-in
            </a>
          </Link>{' '}
          to enter realtime mode!
        </div>
      </Container>
    </div>
  );
}
