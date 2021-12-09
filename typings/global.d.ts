// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    LineSwitch: typeof import('linehub')['LineSwitch'];
    LineImage: typeof import('linehub')['LineImage'];
  }
}

export {};
