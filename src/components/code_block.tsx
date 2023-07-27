const CodeBlock = (props: { children: string }) => {
  return (
    <p className="bg-gray-200 text-red-800 p-1 text-sm rounded-md">
      <code>{props.children}</code>
    </p>
  );
};

export default CodeBlock;
