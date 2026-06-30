const SectionTitle = ({
  title,
  subtitle,
  center = true,
}) => {
  return (
    <div className={`${center ? "text-center" : "text-left"} mb-12`}>
      {subtitle && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          {subtitle}
        </p>
      )}

      <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;