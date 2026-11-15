type SectionHeadingProps = {
  eyebrow: string;
  id: string;
  title: string;
};

export default function SectionHeading({ eyebrow, id, title }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}
