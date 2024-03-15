type AbbrProps = {
  title?: string;
  dataValue?: string;
  children: React.ReactNode;
};

export default function Abbr({
  title,
  dataValue,
  children,
}: AbbrProps) {
  return (
    <data value={dataValue}>
      <dfn>
        <abbr title={title}>{children}</abbr>
      </dfn>
    </data>
  );
}
