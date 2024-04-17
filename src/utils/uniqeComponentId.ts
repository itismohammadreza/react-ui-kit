var lastId = 0;

export function uniqueComponentId(prefix = 'uikit_') {
  lastId++;

  return `${prefix}${lastId}`;
}
