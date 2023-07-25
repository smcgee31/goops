const InlineCode = (props: { children: string }) => {
  return <code className="bg-gray-200 text-red-800 p-1 text-sm">{props.children}</code>;
};

export default InlineCode;
