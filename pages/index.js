// pages/index.js
import { SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs';

export default function HomePage() {
  return (
    <div style={{ padding: '20px' }}>
      <SignedIn>
        <h1>Welcome Back!</h1>
        <SignOutButton />
      </SignedIn>

      <SignedOut>
        <h1>Please login</h1>
        <a href="/signin">Login</a>
      </SignedOut>
    </div>
  );
}
