<template>
  <div class="truncate-read-more">
      <div ref="scrollRef" />
      <div style="position:relative">
          <div
              ref="htmlRef"
              style="visibility:hidden; position:absolute; z-index: -1;"
              class="rte readmore__content readmore__content--htmlRef"
          >
              <slot name="html" />
          </div>
      </div>
      <div
          ref="contentBox"
          :style="displayHeight"
          class="rte readmore__content readmore__content--contentBox"
      >
          <div
              v-html="isExpanded ? htmlString : clippedHTML"
          />
      </div>
      <template v-if="readMoreButtonVisible">
          <div
            class="readmore-button-container"
            style="margin-top: 0.5rem;"
          >
              <div
                  v-if="isExpanded"
                  class="truncate-read-more__button"
                  @click="toggle"
              >
                  <svg viewBox="0 0 19 12" fill="currentColor" style="width: 9.3765px; height: 5.5855px; margin-right: 0.3rem; margin-bottom: 0.15rem;" >
                      <path d="M8.879.204a.702.702 0 0 1 1 0l8.672 8.6a.702.702 0 0 1 0 1l-1.16 1.16a.702.702 0 0 1-1 0L9.377 4.019l-7.014 6.943a.702.702 0 0 1-1 0l-1.16-1.16a.702.702 0 0 1 0-1L8.879.204z"/>
                  </svg>
                  {{ readLessButtonText }}
              </div>
              <div
                  v-if="!isExpanded"
                  class="truncate-read-more__button"
                  @click="toggle"
              >
              <svg viewBox="0 0 18.753 11.171" fill="currentColor" style="width: 9.3765px; height: 5.5855px; margin-right: 0.3rem; margin-bottom: 0.1rem;" >
                  <path d="M8.879 10.964a.7.7 0 0 0 1 0l8.672-8.6a.7.7 0 0 0 0-1l-1.16-1.16a.7.7 0 0 0-1 0L9.377 7.149 2.363.206a.7.7 0 0 0-1 0l-1.16 1.16a.7.7 0 0 0 0 1z"/>
              </svg>
                    {{ readMoreButtonText }}
              </div>
          </div>
      </template>
  </div>
</template>
<script>

/**
* @issues
* - If screen resize, then height value will be wrong,
*      therefore the first collapse after screen resize will be with height auto
*      and without transition and than collapse/expand height will be set *
*/

/**
* @example of use in parent component
*  <truncate-read-more
*          :truncate-value="200"
*          :only-if-more-than-value="275"
*      >
*          <template #html>
*              <div
*                  v-html="data.html"
*              />
*          </template>
*      </truncate-read-more>
*/

import clip from 'text-clipper';
import { waitForElementHeight }  from "./waitForElementHeight";

export default {
  props: {
      /**
       * TruncateValue are the characters-number that the text should be truncate to
       */
      truncateValue: { type: Number, default: null },

      /**
       * @prop onlyIfMoreThanValue define a condition to activate the truncate
       * only if characters count is greater than the given value
       *
       * @example Truncate will be active only if more than 700 characters are available
       * :only-if-more-than-value="700"
       */
      onlyIfMoreThanValue: { type: Number, default: null },
      readMoreButtonText: { type: String, default: 'Read more' },
      readLessButtonText: { type: String, default: 'Read less' },
  },
  mixins: [ waitForElementHeight ],

  data: () => ({
      clippedHTML: '',
      expandHeightValue: null,
      collapseHeightValue: null,
      isExpanded: false,
      readMoreButtonVisible: false,
      isResized: false,
      wrongContainerHeightValue: false,
  }),

  methods: {
      toggle() {
          this.isExpanded = !this.isExpanded;
          this.truncateMethod();
      },

      addReadMore() {
          this.matchTextLength().then((result) => {
              this.readMoreButtonVisible = result;
          });
      },

      async matchTextLength() {
          if (this.countCharacters() > this.onlyIfMoreThanValue
              && this.truncateValue < this.countCharacters()) {
              return true;
          } else {
              return false;
          }
      },

      countCharacters() {
          const renderedHtml = new DOMParser().parseFromString(this.htmlString, 'text/html');
          return renderedHtml.querySelector('body').innerText.length;
      },

      /**
       * @method truncateCharacters
       * Receive @argument truncateValue and based on this value will truncate
       */
      truncateCharacters(truncateValue) {
          this.clippedHTML = clip(this.htmlString, truncateValue, { html: true });
      },

      /**
       * @method truncateMethod
       * The main method that will truncate if collapse, or untruncate if expand
       *
       * @note Due to inconsistency window box height API there are several
       * conditional checks to reset the value incase of mismatch
       */
      truncateMethod() {

          // fallback reset height incase of inconsistency
          if ((this.expandHeightValue - this.collapseHeightValue) <= 15  && !this.initialTruncate) {
              this.resetHeight();
              this.wrongContainerHeightValue = true;
          }

          if (!this.isExpanded && this.truncateOnlyIfMoreThan) {
              if (!this.initialTruncate & !this.isInViewport(this.$refs.scrollRef)) {
                  this.$refs.scrollRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
              this.truncateCharacters(this.truncateValue);
          } else {
              this.truncateCharacters(1000000);
          }

          if (this.wrongContainerHeightValue) {
              this.wrongContainerHeightValue = false;
              this.expandHeight();
              setTimeout(() => {
                  this.collapseHeight();
              }, 500);
          }

          this.initialTruncate = false;
      },

      /**
       * @method resetHeight
       * In case of expand and than resize screen, we don't have the collapse height value
       * and therefore setting the height 'auto' and than only setting new collapse height
       */
      resetHeight() {
          this.expandHeightValue = 'auto';
          this.collapseHeightValue = 'auto';
      },

      onResizeMethod() {
          this.wrongContainerHeightValue = true;
          this.resetHeight();
      },

      expandHeight() {
          // Prevent cases where the element has no computed height in the browser yet
          this.waitForElementHeight(this.$refs.htmlRef)
              .then(() => {
                  this.expandHeightValue = this.$refs.htmlRef?.clientHeight;
              })
              .catch(() => {
                  console.warn('Could not get clientHeight of element with ref: htmlRef');
              });
      },

      collapseHeight() {
          // Prevent cases where the element has no computed height in the browser yet
          this.waitForElementHeight(this.$refs.contentBox)
              .then(() => {
                  this.collapseHeightValue = this.$refs.contentBox?.clientHeight;
              })
              .catch(() => {
                  console.warn('Could not get clientHeight of element with ref: contentBox');
              });
      },

      isInViewport(element) {
          const rect = element.getBoundingClientRect();
          return (
              rect.top >= 0
              && rect.left >= 0
              && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
              && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
      },

  },

  async mounted() {
      this.initialTruncate = true;
      this.truncateMethod();
      this.addReadMore();
      this.$nextTick(() => {
          window.addEventListener('resize', this.onResizeMethod);
      });
      this.expandHeight();
      this.collapseHeight();
  },

  beforeDestroy() {
      window.removeEventListener('resize', this.onResizeMethod);
  },

  computed: {
      htmlString() {
          return this.$refs.htmlRef.innerHTML;
      },

      /**
       * @method displayHeight
       * Will assign the height values of expand or collapse to the content parent container
       * and therefor the height transition will take place
       */
      displayHeight() {
          if (this.expandHeightValue === 'auto' || this.collapseHeightValue === 'auto') {
              return 'height: auto';
          } else {
              if (this.isExpanded && this.expandHeightValue !== 'auto') {
                  return `height: ${this.expandHeightValue}px`;
              } else {
                  return `height: ${this.collapseHeightValue}px`;
              }
          }
      },

      truncateOnlyIfMoreThan() {
          return (this.countCharacters() > this.onlyIfMoreThanValue);
      },
  },

  
};
</script>
<style lang="css" scoped>

  .readmore__content {
      hyphens: auto;
      word-break: break-word;
      transition: height .5s ease-in-out;
      overflow: hidden;
      overflow-anchor: none;
  }

  .truncate-read-more__button {
      display: inline-block;
      cursor: pointer;
  }

  .fade-enter-active, .fade-leave-active {
      transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
      opacity: 0;
  }
</style>
