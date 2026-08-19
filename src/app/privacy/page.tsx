import { Metadata } from 'next'
import { BreadcrumbListSchema, WebPageSchema } from '@/components/seo/structured-data'

const BASE_URL = 'https://returnflow.github.io/home-project-calculator'

export const metadata: Metadata = {
  title: 'Privacy Policy — Home Project Calculator',
  description:
    'Privacy policy for Home Project Calculator. Learn how we handle your data, cookies, and analytics.',
  alternates: {
    canonical: `${BASE_URL}/privacy`,
  },
  openGraph: {
    title: 'Privacy Policy — Home Project Calculator',
    description:
      'Privacy policy for Home Project Calculator. Learn how we handle your data, cookies, and analytics.',
    url: `${BASE_URL}/privacy`,
    type: 'website',
  },
}

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: 'Home', item: `${BASE_URL}/` },
          { name: 'Privacy Policy', item: `${BASE_URL}/privacy` },
        ]}
      />
      <WebPageSchema
        name="Privacy Policy"
        description="Privacy policy for Home Project Calculator."
        url={`${BASE_URL}/privacy`}
      />
      <div className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
        <p className="text-gray-500">Last updated: August 12, 2026</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Introduction</h2>
        <p className="text-gray-700">
          Home Project Calculator ("we", "us", or "our") operates the
          website at <strong>returnflow.github.io/home-project-calculator</strong> (the
          "Site"). This Privacy Policy explains how we collect, use, and protect your
          information when you use our Site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Information We Collect</h2>
        <p className="text-gray-700">
          <strong>Calculator inputs:</strong> The dimensions, material selections, and preferences
          you enter into our calculators are processed locally in your browser. We do not store or
          transmit this data to our servers.
        </p>
        <p className="text-gray-700">
          <strong>Analytics data:</strong> We use Google Analytics to understand how visitors use
          our Site. This includes anonymized information such as pages visited, time spent on the
          Site, and general geographic location. No personally identifiable information is collected.
        </p>
        <p className="text-gray-700">
          <strong>Technical data:</strong> Standard server logs may include your IP address, browser
          type, operating system, and referring URL. This data is used for security and performance
          monitoring.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Cookies</h2>
        <p className="text-gray-700">
          We use cookies and similar technologies for analytics and to improve your experience.
          These include:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-gray-700">
          <li>
            <strong>Essential cookies:</strong> Required for the Site to function properly.
          </li>
          <li>
            <strong>Analytics cookies:</strong> Help us understand how visitors interact with the
            Site (e.g., Google Analytics).
          </li>
        </ul>
        <p className="text-gray-700">
          You can manage cookie preferences through your browser settings. For more information,
          visit{' '}
          <a
            href="https://www.aboutcookies.org"
            className="text-primary-700 underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            aboutcookies.org
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Third-Party Services</h2>
        <p className="text-gray-700">We use the following third-party services:</p>
        <ul className="list-disc space-y-1 pl-5 text-gray-700">
          <li>
            <strong>Google Analytics:</strong> For website traffic analysis. Google's privacy
            policy applies:{' '}
            <a
              href="https://policies.google.com/privacy"
              className="text-primary-700 underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              policies.google.com/privacy
            </a>
          </li>
          <li>
            <strong>GitHub Pages:</strong> For hosting the Site. GitHub's privacy policy
            applies.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Data Security</h2>
        <p className="text-gray-700">
          We take reasonable measures to protect your information. However, no internet transmission
          is completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Children's Privacy</h2>
        <p className="text-gray-700">
          Our Site is not intended for children under 13. We do not knowingly collect personal
          information from children under 13.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Changes to This Policy</h2>
        <p className="text-gray-700">
          We may update this Privacy Policy from time to time. Changes will be posted on this page
          with an updated "Last updated" date.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Contact</h2>
        <p className="text-gray-700">
          If you have questions about this Privacy Policy, please contact us through the GitHub
          repository at{' '}
          <a
            href="https://github.com/returnflow/home-project-calculator"
            className="text-primary-700 underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/returnflow/home-project-calculator
          </a>
          .
        </p>
      </section>
    </div>
    </>
  )
}
