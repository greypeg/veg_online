export type TechnologyCardProps = {
    name: string;
    description: string;
    documentation: string;
    price?: string,
    list?: string[],
  };
  
  const TechnologyCard = ({
    name,
    description,
    documentation,
    price,
    list,
  }: TechnologyCardProps) => {
    return (
      <section className="flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
        <h2 className="text-lg text-gray-700">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <a
          className="m-auto mt-3 w-fit text-sm text-violet-500 underline decoration-dotted underline-offset-2"
          href={documentation}
          target="_blank"
          rel="noreferrer"
        >
          Documentation Hi
        </a>
      </section>
    );
  };

export default TechnologyCard;