import { ColumnTitle } from "../ColumnTitle";
import { ColumnAction } from "../ColumnActions";

const ColumnHeader = ({ title }: { title: string }) => (
  <div className="flex w-full items-center justify-between">
    <ColumnTitle title={title} />
    <ColumnAction id={title} />
  </div>
);

export default ColumnHeader;
