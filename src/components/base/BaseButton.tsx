type BaseButtonProps = {
  title: string;
  path?: string;
  target?: string;
  classes?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export default function BaseButton({
  title,
  path,
  target = "_self",
  children,
  classes,
  onClick,
}: BaseButtonProps) {
  if (!path) {
    return (
      <a className={"btn " + classes} onClick={onClick}>
        {children || title}
      </a>
    );
  }
  return (
    <a
      href={path}
      className={"btn " + classes}
      target={target}
      onClick={onClick}
    >
      {title}
    </a>
  );
}
