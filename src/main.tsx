import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import ErrorPage from './error-page';
import ChoiceCard from './components/choice_card';
import LostNFound from './LostNFound';
import BadMerge from './BadMerge';
import BadRebase from './BadRebase';
import PushedRestoreFile from './PushedRestoreFile';
import PushedNewMerge from './PushedNewMerge';
import PushedNewSimple from './PushedNewSimple';
import PushedFixit from './PushedFixit';
import BranchOverlayMerge from './BranchOverlayMerge';
import PushedOld from './PushedOld';
import DiscardAllUnpushed from './DiscardAllUnpushed';
import ReplaceAllUnpushed from './ReplaceAllUnpushed';
import RemoveLast from './RemoveLast';
import UpdateLast from './UpdateLast';
import ReworkLast from './ReworkLast';
import UndoTip from './UndoTip';
import RemoveDeep from './RemoveDeep';
import FilterBranch from './FilterBranch';
import Bfg from './Bfg';
import MoveCommit from './MoveCommit';
import ChangeSingleDeepMerge from './ChangeSingleDeepMerge';
import ChangeSingleDeepSimple from './ChangeSingleDeepSimple';
import UncommittedEverything from './UncommittedEverything';
import UncommittedCommit from './UncommittedCommit';
import UncommittedSomethings from './UncommittedSomethings';
import Credits from './Credits';
import Disclaimer from './Disclaimer';
import Copyright from './Copyright';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
  { path: '/lostnfound', element: <LostNFound /> },
  { path: '/badmerge', element: <BadMerge /> },
  { path: '/badrebase', element: <BadRebase /> },
  { path: '/pushed_restore_file', element: <PushedRestoreFile /> },
  { path: '/pushed_new_merge', element: <PushedNewMerge /> },
  { path: '/pushed_new_simple', element: <PushedNewSimple /> },
  { path: '/pushed_fixit', element: <PushedFixit /> },
  { path: '/branch_overlay_merge', element: <BranchOverlayMerge /> },
  { path: '/pushed_old', element: <PushedOld /> },
  { path: '/discard_all_unpushed', element: <DiscardAllUnpushed /> },
  { path: '/replace_all_unpushed', element: <ReplaceAllUnpushed /> },
  { path: '/remove_last', element: <RemoveLast /> },
  { path: '/update_last', element: <UpdateLast /> },
  { path: '/rework_last', element: <ReworkLast /> },
  { path: '/undo_tip', element: <UndoTip /> },
  { path: '/remove_deep', element: <RemoveDeep /> },
  { path: '/filterbranch', element: <FilterBranch /> },
  { path: '/move_commit', element: <MoveCommit /> },
  { path: '/change_single_deep_merge', element: <ChangeSingleDeepMerge /> },
  { path: '/change_single_deep_simple', element: <ChangeSingleDeepSimple /> },
  { path: '/uncommitted_everything', element: <UncommittedEverything /> },
  { path: '/uncommitted_somethings', element: <UncommittedSomethings /> },
  { path: '/uncommitted_commit', element: <UncommittedCommit /> },
  { path: '/bfg', element: <Bfg /> },
  { path: '/credits', element: <Credits /> },
  { path: '/disclaimer', element: <Disclaimer /> },
  { path: '/copyright', element: <Copyright /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
