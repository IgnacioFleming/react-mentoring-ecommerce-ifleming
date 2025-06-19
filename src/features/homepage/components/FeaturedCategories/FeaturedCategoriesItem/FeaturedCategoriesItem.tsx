type FeaturedCategoriesProps = {
  className: string;
  imagePath: string;
  alt: string;
  title: string;
  caption: string;
  link?: string;
};

export const FeaturedCategoriesItem = ({
  className,
  imagePath,
  alt,
  title,
  caption,
}: FeaturedCategoriesProps) => {
  return (
    <figure>
      <img className={className} src={imagePath} alt={alt} title={title} />
      <figcaption>
        <h5>{caption}</h5>
      </figcaption>
    </figure>
  );
};
