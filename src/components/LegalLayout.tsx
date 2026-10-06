export default function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-white py-16 text-[#333]">
      <div className="mx-auto max-w-[1080px] px-5">
        <h1 className="mb-10 text-center font-serif text-4xl font-bold text-blue md:text-[56px] md:leading-tight">{title}</h1>
        <div className="legal">{children}</div>
      </div>
    </section>
  );
}
