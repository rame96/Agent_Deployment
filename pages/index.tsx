"use client"

import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-12">
          <h1 className="text-2xl font-bold text-orange-950 dark:text-orange-50">
            IdeaGen Pro
          </h1>
          <div>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center gap-4">
                <Link 
                  href="/product" 
                  className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  Go to App
                </Link>
                <UserButton showName={true} />
              </div>
            </SignedIn>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="text-center py-24">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-6">
            Generate Your Next
            <br />
            Big Business Idea
          </h2>
          <p className="text-xl text-orange-800 dark:text-orange-200 mb-8 max-w-2xl mx-auto">
            Harness the power of AI to discover innovative business opportunities tailored for the AI agent economy
          </p>
          
          {/* Pricing Preview */}
          <div className="bg-orange-50/90 dark:bg-orange-950/80 border border-orange-200/80 dark:border-orange-800/80 backdrop-blur-lg rounded-xl p-6 max-w-sm mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-2 text-orange-950 dark:text-orange-50">Premium Subscription</h3>
            <p className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">$10<span className="text-lg text-orange-800 dark:text-orange-300">/month</span></p>
            <ul className="text-left text-orange-800 dark:text-orange-200 mb-6">
              <li className="mb-2">✓ Unlimited idea generation</li>
              <li className="mb-2">✓ Advanced AI models</li>
              <li className="mb-2">✓ Priority support</li>
            </ul>
          </div>
          
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105">
                Start Your Free Trial
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Link href="/product">
              <button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105">
                Access Premium Features
              </button>
            </Link>
          </SignedIn>
        </div>
      </div>
    </main>
  );
}