function NovelTitle(props: { title: string }) {
  const { title } = props;
  return (
    <div className="basis-9/12">
      <h3 className="text-2xl font-bold text-center">{title}</h3>
    </div>
  );
}

export default NovelTitle;
