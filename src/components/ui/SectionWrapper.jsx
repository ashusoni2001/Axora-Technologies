export default function SectionWrapper({ id, className = "", children }) {
  return (
    <section
      id={id}
      className={`py-24 lg:py-32 px-6 lg:px-8 scroll-mt-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
