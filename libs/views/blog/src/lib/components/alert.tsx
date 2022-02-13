import Container from './container';
import cn from 'clsx';

export interface AlertProps {
  preview: boolean;
}

export default function Alert({ preview }: AlertProps) {
  return (
    <div className={cn('bg-accent-7 border-accent-7 border-b text-gray-400')}>
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is page is showing draft content.{' '}
              <a
                href="/api/exit-preview"
                className="text-white underline transition-colors duration-200 hover:text-teal-500"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              This is page is showing published content.{' '}
              <a
                href="/api/preview"
                className="text-white underline transition-colors duration-200 hover:text-teal-500"
              >
                Click here
              </a>{' '}
              to enter preview mode!
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
