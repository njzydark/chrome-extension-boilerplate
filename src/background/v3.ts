import { test } from '@/utils/test';

test();

console.log('%c bckground script ', 'background:#41b883 ; padding: 1px; border-radius: 3px;  color: #fff');

const allColor = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ allColor });
  chrome.storage.sync.get('color', ({ color }) => {
    if (!color) {
      chrome.storage.sync.set({ color: allColor[0] });
      console.log('Default background color set to %cgreen', `color: ${allColor[0]}`);
    }
  });
});
