import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Building Quick Subscribe — Amazon IAP Integration at Scale",
  description:
    "How we implemented a seamless Amazon In-App Purchase flow on Peacock that increased subscription rates by 40%.",
};

export default function QuickSubscribePost() {
  return (
    <div className='px-6 max-w-3xl mx-auto py-24'>
      {/* Back link */}
      <Link
        href='/blog'
        className='inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors mb-12 font-mono text-sm'
      >
        ← Back to Blog
      </Link>

      <article>
        {/* Header */}
        <header className='mb-12'>
          <div className='flex flex-wrap gap-2 mb-6' role='list'>
            {["React", "TypeScript", "Amazon IAP", "Streaming"].map((tag) => (
              <div key={tag} role='listitem'>
                <Badge variant='accent'>{tag}</Badge>
              </div>
            ))}
          </div>
          <h1
            className='font-syne font-bold text-text-primary mb-6 leading-tight'
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Building Quick Subscribe — Amazon IAP Integration at Scale
          </h1>
          <div className='flex items-center gap-3 text-text-muted text-sm font-mono'>
            <span>15 March 2024</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </header>

        {/* Divider */}
        <div className='border-t border-border mb-12' />

        {/* Content */}
        <div className='space-y-6 text-text-muted leading-relaxed'>
          <p>
            One of the most impactful features I worked on at Sky was the Quick
            Subscribe integration for Peacock on Amazon Fire devices. The
            problem was straightforward — users landing on our app detail page
            on Amazon had no way to initiate a subscription without leaving
            Amazon&apos;s ecosystem. The solution changed our subscription rates
            dramatically.
          </p>

          <h2 className='font-syne font-bold text-text-primary text-2xl mt-10 mb-4'>
            The Problem
          </h2>
          <p>
            Amazon Fire device users would discover Peacock on the Amazon App
            Store, click through to our detail page, and hit a dead end. There
            was no call-to-action to subscribe — users had to download the app
            first, open it, and navigate to a subscription flow. The drop-off
            rate at this stage was significant.
          </p>

          <h2 className='font-syne font-bold text-text-primary text-2xl mt-10 mb-4'>
            The Solution — Amazon In-App Purchase API
          </h2>
          <p>
            Amazon provides an In-App Purchase (IAP) API that allows apps to
            trigger subscription flows directly from within the Amazon
            ecosystem. We decided to implement a Quick Subscribe button that
            would appear on our Amazon detail page and complete the entire
            subscription flow without the user ever leaving Amazon.
          </p>

          <h2 className='font-syne font-bold text-text-primary text-2xl mt-10 mb-4'>
            The Technical Challenge
          </h2>
          <p>
            The authentication flow was the most complex part. To subscribe a
            user via Amazon IAP, we needed to chain several dependent async
            calls:
          </p>

          <ul className='space-y-2 ml-4'>
            {[
              "Check for a pending transaction",
              "Retrieve the user's consent status",
              "Exchange an authorisation code for an access token",
              "Use the access token alongside our credentials to authenticate the user",
            ].map((point) => (
              <li key={point} className='flex gap-3'>
                <span className='text-accent shrink-0 mt-1'>▹</span>
                {point}
              </li>
            ))}
          </ul>

          <p>
            These calls had dependencies between them — you couldn&apos;t check
            consent without a pending transaction — but some could be
            parallelised safely. Mapping the dependency graph before writing any
            code was essential.
          </p>

          <div className='bg-surface border border-border rounded-xl p-6 font-mono text-sm text-text-primary overflow-x-auto my-8'>
            <pre>{`async function authenticateViaAmazonIAP(): Promise<User> {
  // Step 1 — Check for pending transaction
  const transaction = await checkPendingTransaction();
  if (!transaction) throw new PendingTransactionError();

  // Step 2 — Get consent (depends on transaction)
  const consent = await getUserConsent(transaction.id);

  // Steps 3 & 4 — Parallelise independent calls
  const [authCode, credentials] = await Promise.all([
    exchangeAuthorisationCode(consent.code),
    getPartnerCredentials(),
  ]);

  return authenticateUser(authCode, credentials);
}`}</pre>
          </div>

          <h2 className='font-syne font-bold text-text-primary text-2xl mt-10 mb-4'>
            The Result
          </h2>
          <p>
            After shipping Quick Subscribe, our subscription rate on Amazon Fire
            devices increased by{" "}
            <span className='text-accent font-semibold'>40%</span>. The feature
            is now part of the standard onboarding flow across all Amazon Fire
            device variants.
          </p>

          <h2 className='font-syne font-bold text-text-primary text-2xl mt-10 mb-4'>
            Key Learnings
          </h2>
          <ul className='space-y-2 ml-4'>
            {[
              "Always map async dependencies before writing code — some calls can be parallelised, others can't",
              "Amazon IAP has edge cases around token expiry that need explicit handling",
              "Test on real hardware — Fire TV Stick behaviour differs from the simulator in subtle ways",
            ].map((point) => (
              <li key={point} className='flex gap-3'>
                <span className='text-accent shrink-0 mt-1'>▹</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
