import { Suspense } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import InlineCode from './components/inline_code';
import Title from './components/title';
import CodeBlock from './components/code_block';

const Bfg = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>
          Use The BFG to remove unwanted data, like big files or passwords, from Git repository
          history.
        </Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              Disclaimer, the author of this document has not qualified this tool (including for
              safety or usability for any purpose), but recognizes the need which this tool fills
              for large repositories.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              <a href="https://rtyley.github.io/bfg-repo-cleaner/" target="_blank">
                The BFG
              </a>{' '}
              is a simpler, faster alternative to <InlineCode>git filter-branch</InlineCode>,
              specifically designed for cleansing bad data out of your Git repository history - it
              operates over all branches and tags in your project to purge data you don't want
              retained anywhere. Some{' '}
              <a href="https://rtyley.github.io/bfg-repo-cleaner/#examples" target="_blank">
                examples
              </a>
              :
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Remove all blobs bigger than 1 megabyte (to make your repo take up less space):
              <CodeBlock>$ bfg --strip-blobs-bigger-than 1M my-repo.git</CodeBlock>
              Replace all passwords listed in a file with ***REMOVED*** wherever they occur in your
              repository :<CodeBlock>$ bfg --replace-text passwords.txt my-repo.git</CodeBlock>
            </Typography>
          </ListItem>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default Bfg;
