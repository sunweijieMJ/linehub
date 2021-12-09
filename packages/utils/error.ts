class LinehubError extends Error {
  constructor(m: string) {
    super(m);
    this.name = 'LinehubError';
  }
}

export function throwError(scope: string, m: string): never {
  throw new LinehubError(`[${scope}] ${m}`);
}

export function debugWarn(scope: string, message: string): void {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(new LinehubError(`[${scope}] ${message}`));
  }
}
