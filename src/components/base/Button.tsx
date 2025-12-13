type ButtonProps = {
  title: string;
  path: string;
  target?: string;
};

export default function Button({ title, path, target = "_self" }: ButtonProps) {
  return (
    <a href={path} className="btn" target={target}>
      {title}
    </a>
  );
}
