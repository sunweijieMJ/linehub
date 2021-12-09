import installer from './defaults';

export * from '@linehub/components';
export * from '@linehub/directives';
export * from '@linehub/hooks';

export { default as makeInstaller } from './make-installer';

/* eslint no-restricted-exports: off */
export { default } from './defaults';

export const install = installer.install;
export const version = installer.version;
