// vue-truncate-read-more.d.ts
declare module 'vue-truncate-read-more' {
    import { App } from 'vue';
  
    interface TruncateReadMoreOptions {
      truncateValue?: number;
      onlyIfMoreThanValue?: number;
      readMoreButtonText?: string;
      readLessButtonText?: string;
    }
  
    const TruncateReadMore: {
      install: (app: App, options?: TruncateReadMoreOptions) => void;
    };
  
    export default TruncateReadMore;
  }
  