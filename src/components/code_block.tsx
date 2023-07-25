const CodeBlock = (props: { children: string }) => {
  return (
    <pre className="bg-gray-200 text-red-800 p-1 text-sm rounded-md">
      <code>{props.children}</code>
    </pre>
  );
};

export default CodeBlock;
