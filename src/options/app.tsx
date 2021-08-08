import { ChangeEvent } from 'react';

import { useColor } from '@/hooks/useColor';

import styles from './app.module.less';

export const App = () => {
  const { color, allColor = [], changeColor } = useColor();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeColor(e.target.value);
  };

  return (
    <div>
      <div className={styles.title}>Options Page</div>
      {allColor.map(item => {
        return (
          <div className={styles.listItem} key={item}>
            <label className={styles.listItemLabel}>
              <input type="radio" value={item} checked={item === color} onChange={handleChange}></input>
              <div className={styles.listItemBadge} style={{ background: item }}></div>
            </label>
          </div>
        );
      })}
    </div>
  );
};
