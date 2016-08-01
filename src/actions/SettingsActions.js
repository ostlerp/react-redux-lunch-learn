'use strict';

const namespace = 'settings/';

export const POPLULATE_SETTINGS = `${namespace}POPULATE_SETTINGS`;

export let populateSettings = (user) => {
  return {
    type: POPULATE_SETTINGS
  }
}
