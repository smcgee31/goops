import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DataContext from './data_context';
import getData from './utils/data';
import { JSONValue } from './types';
import './index.css';

import AppInner from './AppInner';
import BadMerge from './BadMerge';
import BadRebase from './BadRebase';
import Bfg from './Bfg';
import BranchOverlayMerge from './BranchOverlayMerge';
import ChangeSingleDeepMerge from './ChangeSingleDeepMerge';
import ChangeSingleDeepSimple from './ChangeSingleDeepSimple';
import ChoiceCard from './components/choice_card';
import Copyright from './Copyright';
import Credits from './Credits';
import DiscardAllUnpushed from './DiscardAllUnpushed';
import Disclaimer from './Disclaimer';
import ErrorPage from './error-page';
import FilterBranch from './FilterBranch';
import LostNFound from './LostNFound';
import MoveCommit from './MoveCommit';
import PushedFixit from './PushedFixit';
import PushedNewMerge from './PushedNewMerge';
import PushedNewSimple from './PushedNewSimple';
import PushedOld from './PushedOld';
import PushedRestoreFile from './PushedRestoreFile';
import RemoveDeep from './RemoveDeep';
import RemoveLast from './RemoveLast';
import ReplaceAllUnpushed from './ReplaceAllUnpushed';
import ReworkLast from './ReworkLast';
import UncommittedCommit from './UncommittedCommit';
import UncommittedEverything from './UncommittedEverything';
import UncommittedSomethings from './UncommittedSomethings';
import UndoTip from './UndoTip';
import UpdateLast from './UpdateLast';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppInner />,
    errorElement: <ErrorPage />,
  },
  { path: '/start', element: <ChoiceCard cardName="start" /> },
  { path: '/committedp', element: <ChoiceCard cardName="committedp" /> },
  { path: '/committed', element: <ChoiceCard cardName="committed" /> },
  { path: '/uncommitted', element: <ChoiceCard cardName="uncommitted" /> },
  { path: '/committed_really', element: <ChoiceCard cardName="committed_really" /> },
  { path: '/pushed', element: <ChoiceCard cardName="pushed" /> },
  { path: '/unpushed', element: <ChoiceCard cardName="unpushed" /> },
  { path: '/fix_unpushed', element: <ChoiceCard cardName="fix_unpushed" /> },
  { path: '/change_last', element: <ChoiceCard cardName="change_last" /> },
  { path: '/change_deep', element: <ChoiceCard cardName="change_deep" /> },
  { path: '/modify_deep', element: <ChoiceCard cardName="modify_deep" /> },
  { path: '/bulk_rewrite_history', element: <ChoiceCard cardName="bulk_rewrite_history" /> },
  { path: '/change_single_deep', element: <ChoiceCard cardName="change_single_deep" /> },

  { path: '/badmerge', element: <BadMerge /> },
  { path: '/badrebase', element: <BadRebase /> },
  { path: '/bfg', element: <Bfg /> },
  { path: '/branch_overlay_merge', element: <BranchOverlayMerge /> },
  { path: '/change_single_deep_merge', element: <ChangeSingleDeepMerge /> },
  { path: '/change_single_deep_simple', element: <ChangeSingleDeepSimple /> },
  { path: '/copyright', element: <Copyright /> },
  { path: '/credits', element: <Credits /> },
  { path: '/discard_all_unpushed', element: <DiscardAllUnpushed /> },
  { path: '/disclaimer', element: <Disclaimer /> },
  { path: '/filterbranch', element: <FilterBranch /> },
  { path: '/lostnfound', element: <LostNFound /> },
  { path: '/move_commit', element: <MoveCommit /> },
  { path: '/pushed_fixit', element: <PushedFixit /> },
  { path: '/pushed_new_merge', element: <PushedNewMerge /> },
  { path: '/pushed_new_simple', element: <PushedNewSimple /> },
  { path: '/pushed_old', element: <PushedOld /> },
  { path: '/pushed_restore_file', element: <PushedRestoreFile /> },
  { path: '/remove_deep', element: <RemoveDeep /> },
  { path: '/remove_last', element: <RemoveLast /> },
  { path: '/replace_all_unpushed', element: <ReplaceAllUnpushed /> },
  { path: '/rework_last', element: <ReworkLast /> },
  { path: '/uncommitted_commit', element: <UncommittedCommit /> },
  { path: '/uncommitted_everything', element: <UncommittedEverything /> },
  { path: '/uncommitted_somethings', element: <UncommittedSomethings /> },
  { path: '/undo_tip', element: <UndoTip /> },
  { path: '/update_last', element: <UpdateLast /> },
]);

const App = () => {
  const [data, setData] = useState<JSONValue>({});

  useEffect(() => {
    const fetchData = async () => {
      const results = await getData();
      setData(results);
    };
    fetchData().catch((e) => console.error(e));
  }, []);

  return (
    <DataContext.Provider value={data}>
      <RouterProvider router={router} />
    </DataContext.Provider>
  );
};

export default App;
