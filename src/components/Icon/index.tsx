const Icon = (props: {
  src: string;
  alt: string;
  size?: number;
  margin?: string;
}) => {
  const { src, alt, size = 24, margin = "0" } = props;
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: size, height: size, margin: margin }}
    />
  );
};

export default Icon;
