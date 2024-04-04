import FeatureOne from "@/components/FeatureOne";
import Store from "@/components/store";

export default function Home() {
  return (
    <main className="mx-auto my-10 flex max-w-xs flex-wrap items-center justify-center sm:my-12 sm:max-w-sm md:my-20 md:max-w-lg lg:my-24 lg:max-w-3xl">
      <FeatureOne />
      <Store />
    </main>
  );
}
