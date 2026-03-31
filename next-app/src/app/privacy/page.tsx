import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Privacy Policy | Painters Dublin",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full flex flex-col items-center py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-3xl w-full px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-8 text-brand-dark dark:text-white">Privacy Policy</h1>
          <div className="space-y-6 text-slate-600 dark:text-slate-400">
            <p>Your privacy is important to us. This policy outlines how Painters Dublin handles your data.</p>
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mt-8">1. Information We Collect</h2>
            <p>When you request a quote, we collect your name, email address, property details, and phone number to fulfill your request.</p>
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mt-8">2. Analytics</h2>
            <p>We use Plausible Analytics, an open-source, privacy-first tracker. It does not use cookies and fully complies with GDPR.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
