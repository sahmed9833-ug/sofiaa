type Props = {
  d: string;
};

export default function LogoTextPath({ d }: Props) {
  return (
    <path
      d={d}
      className="fill-periwinkle-dark dark:fill-periwinkle-regular marker:dark:fill-slate-300 stroke-periwinkle-light"
    />
  );
}
