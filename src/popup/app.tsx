import { useColor } from '@/hooks/useColor';

const extensionVersion = chrome.runtime.getManifest().manifest_version;

export const App = () => {
  const { color } = useColor();

  const changeColor = (color?: string) => {
    if (color) {
      document.body.style.background = color;
    }
  };

  const handleClick = async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const curId = tabs[0].id;
      if (curId) {
        console.log(extensionVersion);
        if (extensionVersion === 3) {
          chrome.scripting.executeScript({ target: { tabId: curId }, func: changeColor, args: [color] });
        } else {
          chrome.tabs.executeScript(curId, { code: `document.body.style.background="${color}";` });
        }
      }
    });
  };

  if (!color) {
    return <div>Init color not found</div>;
  }

  return (
    <div>
      <div
        onClick={handleClick}
        style={{
          background: color,
          borderRadius: 4,
          fontSize: 16,
          padding: '10px 15px',
          color: 'white'
        }}
      >
        change background color
      </div>
    </div>
  );
};
