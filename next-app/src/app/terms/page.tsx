import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Terms of Service | Painters Dublin",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full flex flex-col items-center py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-3xl w-full px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-8 text-brand-dark dark:text-white">Terms of Service</h1>
          <div className="space-y-6 text-slate-600 dark:text-slate-400">
            <p>Welcome to Painters Dublin. By engaging our services or using our website, you agree to these clear and transparent terms.</p>
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mt-8">1. Quotations and Pricing</h2>
            <p>All quotes provided via our online estimator are approximate. Final fixed-price contracts are only established after an on-site visit by our project manager.</p>
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mt-8">2. Liability & Insurance</h2>
            <p>We hold full €2M Public Liability insurance. Any damage explicitly caused by our negligence will be rectified at our cost.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
