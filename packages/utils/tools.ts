// 图片转换
const handleImage = (url: string, mode: Array<string> = []): string => {
  if (!url) return url;
  if (Object.prototype.toString.call(url) !== '[object String]') {
    return url;
  }

  if (!url.includes('?x-oss-process=image')) {
    url += '?x-oss-process=image';
  }
  if (mode.length) {
    mode.forEach((item) => {
      url += `/${item}`;
    });
  }

  // 支持webp
  if (localStorage.getItem('isWebp') === 'true') {
    url = `${url}/format,webp`;
  } else {
    url = `${url}/quality,Q_80`;
  }

  return url;
};

export { handleImage };
