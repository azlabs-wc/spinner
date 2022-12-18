import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

export class Spinner extends LitElement {
  //
  static override get styles() {
    return [
      css`
        .spinner {
          border-radius: 50%;
          position: relative;
          animation: rotate 1s linear infinite;
        }
        .spinner::before {
          content: '';
          box-sizing: border-box;
          position: absolute;
          inset: 0px;
          border-radius: 50%;
          border: solid var(--azl-spinner-color, #353535);
          animation: prixClipFix 2s linear infinite;
        }

        @keyframes rotate {
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes prixClipFix {
          0% {
            clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
          }
          25% {
            clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
          }
          50% {
            clip-path: polygon(
              50% 50%,
              0 0,
              100% 0,
              100% 100%,
              100% 100%,
              100% 100%
            );
          }
          75% {
            clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
          }
          100% {
            clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
          }
        }

        .spinner {
          width: 72px;
          height: 72px;
        }
        .spinner::before {
          border-width: 12px;
        }
        .spinner.medium {
          width: 48px;
          height: 48px;
        }
        .spinner.medium::before {
          border-width: 5px;
        }
        .spinner.small {
          width: 28px;
          height: 28px;
        }
        .spinner.small::before {
          border-width: 2.8px;
        }
      `,
      css`
        .spinner-basic {
          border: solid var(--azl-spinner-bg-color, #f3f3f3);
          border-bottom-color: var(--azl-spinner-color, #353535);
          border-radius: 50%;
          display: inline-block;
          box-sizing: border-box;
          animation: rotation 1s linear infinite;
        }

        @keyframes rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .spinner-basic {
          width: 72px;
          height: 72px;
          border-width: 8px;
        }
        .spinner-basic.medium {
          width: 48px;
          height: 48px;
          border-width: 5px;
        }
        .spinner-basic.small {
          width: 28px;
          height: 28px;
          border-width: 2.8px;
        }
      `,
    ];
  }

  /**
   * @attr
   */
  @property({ type: String, attribute: 'size' })
  size!: 'small' | 'medium';

  /**
   * @attr
   */
  @property({ type: Boolean, attribute: 'basic' })
  basic!: boolean;

  //
  override render() {
    return html`
      <div
        class="${classMap(
          this.size
            ? {
                [this.size]: true,
                'spinner-basic': !!this.basic,
                spinner: !this.basic,
              }
            : {
                'spinner-basic': !!this.basic,
                spinner: !this.basic,
              }
        )}"
      ></div>
    `;
  }
}
