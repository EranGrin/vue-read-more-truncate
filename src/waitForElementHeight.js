export const waitForElementHeight = {
  /**
   * @description
   * - This mixin is used to wait for an element's clientHeight to be available,
   *   before executing a function.
   * - ResizeObserver will be resolved into a Promise, which then can be used to access the height.
   * @example
   *  this.waitForElementHeight(this.$refs.myCustomRef).then((element) => {
   *      ... do stuff with the element's height
   *  }).catch(() => {
   *      console.warn(
   *          'Could not get clientHeight of element with ref: myCustomRef',
   *      );
   *  });
   */
  methods: { async waitForElementHeight(element, timeout = 3000) {
      return new Promise((resolve, reject) => {
        if (element.clientHeight) {
          resolve(element.clientHeight);
        }
        const observer = new ResizeObserver(() => {
          if (element.clientHeight) {
            resolve(element.clientHeight);
            observer.disconnect();
          }
        });
        observer.observe(element, {
          childList: true,
          subtree: true,
          attribute: true,
        });
    
        setTimeout(() => {
          reject();
          observer.disconnect();
        }, timeout);
      });
    }
  }}