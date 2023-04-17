// vue-truncate-readmore.d.ts
declare module 'vue-truncate-readmore' {
    import { App } from 'vue';
  
    interface TruncateReadmoreOptions {
      truncateValue?: number;
      onlyIfMoreThanValue?: number;
      readMoreButtonText?: string;
      readLessButtonText?: string;
    }
  
    const TruncateReadmore: {
      install: (app: App, options?: TruncateReadmoreOptions) => void;
    };
  
    export default TruncateReadmore;
  }
  