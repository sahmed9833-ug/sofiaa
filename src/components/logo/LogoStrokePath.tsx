type Props = {
  d: string;
};

export default function LogoStrokePath({ d }: Props) {
  return (
    <path
      d={d}
      className="fill-periwinkle-regular dark:fill-periwinkle marker:dark:fill-slate-300"
    />
  );
}
