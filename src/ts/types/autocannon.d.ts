declare module 'autocannon' {
  interface AutocannonOptions {
    url: string;
    connections?: number;
    duration?: number;
    requests?: Array<{
      method: string;
      path: string;
    }>;
  }

  export interface Result {
    requests: {
      average: number;
    };
    latency: {
      average: number;
    };
    throughput: {
      average: number;
    };
    errors: number;
    duration: number;
  }

  function autocannon(options: AutocannonOptions, callback?: (err: Error | null, result: Result) => void): any;
  
  namespace autocannon {
    function track(instance: any, options?: { renderProgressBar?: boolean; renderResultsTable?: boolean; renderLatencyTable?: boolean }): void;
  }
  
  export = autocannon;
} 