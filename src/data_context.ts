import { createContext } from 'react';
import { JSONValue } from './types';

const DataContext = createContext<JSONValue>({});

export default DataContext;
