import Link from 'next/link';

export default function LoginForm() {
  return (
    <Link
      href="/dashboard"
      className="flex h-10 w-full items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-500"
    >
      Log in
    </Link>
  );
}