type Props = {
  d: string;
};

export default function LogoTextPath({ d }: Props) {
  return (
    <path
      d={d}
      className="fill-periwinkle-dark dark:fill-periwinkle-regular  stroke-periwinkle-light"
    />
  );
}
