import Link from 'next/link';

export default function Header() {
  return (
    <h2 className="mt-8 mb-20 text-2xl font-bold leading-tight tracking-tight  md:text-4xl md:tracking-tighter">
      <Link href="/blog">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="text-gray-300 hover:underline">Blog</a>
      </Link>
      .
    </h2>
  );
}
