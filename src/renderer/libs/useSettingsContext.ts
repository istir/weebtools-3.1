import React from 'react';

export type ValidSettings = { mainPath: string };

const defaultSettings: ValidSettings = {
  mainPath: '',
};

function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj;
}
function setSetting(key: string, value: string) {
  if (hasKey(defaultSettings, key)) defaultSettings[key] = value;
}

const useSettingsContext = React.createContext({
  defaultSettings,
  setSetting: setSetting.bind(this),
});

export default useSettingsContext;
