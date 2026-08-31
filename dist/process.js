export const process = (input) => input.data.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
