import path from 'path';
import helper from 'components-helper';
import type { TaskFunction } from 'gulp';
import { epPackage, epOutput, projRoot } from './utils/paths';
import { getPackageManifest } from './utils/pkg';

const reComponentName = (title: string) =>
  `line-${title
    .replace(/\B([A-Z])/g, '-$1')
    .replace(/[ ]+/g, '-')
    .toLowerCase()}`;

const reDocUrl = (fileName, header) => {
  const docs = 'https://linehub.org/en-US/component/';
  const newHeader = header ? header.replaceAll(/\s+/g, '-').toLowerCase() : '';

  return `${docs}${fileName}.html${newHeader ? '#' : ''}${newHeader}`;
};

const reWebTypesSource = (title) => {
  const symbol = `Line${title
    .replaceAll(/-/g, ' ')
    .replaceAll(/^\w|\s+\w/g, (item) => {
      return item.trim().toUpperCase();
    })}`;

  return { symbol };
};

const reAttribute = (value, key) => {
  const newValue = value.match(/^\*\*(.*)\*\*$/);
  const str = newValue ? newValue[1] : value;

  if (key === 'Name' && /^(-|—)$/.test(str)) {
    return 'default';
  } else if (str === '' || /^(-|—)$/.test(str)) {
    return undefined;
  } else if (key === 'Attribute' && /v-model:(.+)/.test(str)) {
    const newStr = str.match(/v-model:(.+)/);
    return newStr ? newStr[1] : undefined;
  } else if (key === 'Attribute' && /v-model/.test(str)) {
    return 'model-value';
  } else if (key === 'Attribute') {
    return str.replace(/\B([A-Z])/g, '-$1').toLowerCase();
  } else if (key === 'Type') {
    return str
      .replace(/\s*\/\s*/g, '|')
      .replace(/\s*,\s*/g, '|')
      .replace(/\(.*\)/g, '')
      .toLowerCase();
  } else if (key === 'Accepted Values') {
    return /\[.+\]\(.+\)/.test(str) || /^\*$/.test(str)
      ? undefined
      : str.replace(/`/g, '');
  } else if (key === 'Subtags') {
    return str
      ? `line-${str
          .replaceAll(/\s*\/\s*/g, '/line-')
          .replaceAll(/\B([A-Z])/g, '-$1')
          .replaceAll(/\s+/g, '-')
          .toLowerCase()}`
      : undefined;
  }
  return str;
};

export const buildHelper: TaskFunction = (done) => {
  const { name, version } = getPackageManifest(epPackage);

  const tagVer = process.env.TAG_VERSION as string;
  const tagVerStr = tagVer?.startsWith('v') ? tagVer.slice(1) : tagVer;
  const newVersion = tagVer ? tagVerStr : version!;

  helper({
    name: name!,
    version: newVersion,
    entry: `${path.resolve(
      projRoot,
      'docs/en-US/component'
    )}/!(datetime-picker|message-box|message).md`,
    outDir: epOutput,
    reComponentName,
    reDocUrl,
    reWebTypesSource,
    reAttribute,
    props: 'Attributes',
    propsName: 'Attribute',
    propsOptions: 'Accepted Values',
    eventsName: 'Event Name',
    tableRegExp:
      '#+\\s+(.*\\s*Attributes|.*\\s*Events|.*\\s*Slots|.*\\s*Directives)\\s*\\n+(\\|?.+\\|.+)\\n\\|?\\s*:?-+:?\\s*\\|.+((\\n\\|?.+\\|.+)+)',
  });

  done();
};
