import { Routes } from '@/shared/router/routes';
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div>
      <h2>Welcome!</h2>
      <p>
        Please <Link href={Routes.Login}>Sign In</Link> or{' '}
        <Link href={Routes.Registration}>Sign Up</Link>
      </p>
    </div>
  );
}
