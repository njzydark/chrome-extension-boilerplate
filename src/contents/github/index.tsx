import './index.less';

import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

const Btn = (props: { children: ReactNode }) => {
  const handleClick = () => {
    const newUrl = location.href.replace('github.com', 'github1s.com');
    location.href = newUrl;
  };

  return (
    <div className="btn btn-sm" onClick={handleClick}>
      {props.children}
    </div>
  );
};

const App = () => {
  return <Btn>Github1s</Btn>;
};

const RootEl = document.createElement('li');

const githubActionEl = document.querySelector('ul.pagehead-actions');
if (githubActionEl) {
  githubActionEl.appendChild(RootEl);
  ReactDOM.render(<App />, RootEl);
}
