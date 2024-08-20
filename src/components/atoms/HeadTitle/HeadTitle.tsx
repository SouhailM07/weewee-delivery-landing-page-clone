export default function HeadTitle({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <div className="text-center font-bold">
      <h1 className="text-mainBlue uppercase text-[0.75rem] ">{title}</h1>
      <h2 className="text-txtBlue text-[1.9rem] ">{subTitle}</h2>
    </div>
  );
}
