import { Suspense } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import InlineCode from './components/inline_code';
import Title from './components/title';

const FilterBranch = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>Arbitrarily changing all commits during all of git's history</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              <InlineCode>git filter-branch</InlineCode> is a powerful, complex command that allows
              you to perform arbitrary scriptable operations on all commits in git repository
              history. This flexibility can make it quite slow on big repos, and makes using the
              command quite difficult, so I will simply point you at the{' '}
              <a href="https://gitirc.eu/git-filter-branch.html" target="_blank">
                manual page
              </a>{' '}
              and remind you that{' '}
              <a href="https://sethrobertson.github.io/GitBestPractices/" target="_blank">
                best practice
              </a>{' '}
              is to always use "--tag-name-filter cat -- --all" unless you are really sure you know
              what you are doing.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              BTW, this is the one command I referred to earlier which will update all tags and
              branches, at least if you use the best practice arguments.
            </Typography>
          </ListItem>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default FilterBranch;
