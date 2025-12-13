type Props = {
  d: string;
};

export default function LogoCirclePath({ d }: Props) {
  return (
    <path
      d={d}
      className="fill-periwinkle-dark dark:fill-dark-periwinkle"
      fillRule="nonzero"
      opacity={1}
      stroke="none"
    />
  );
}
