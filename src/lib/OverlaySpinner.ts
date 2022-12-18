import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

export class OverlaySpinner extends LitElement {
  //
  static override get styles() {
    return [
      css`
        .overlay-container {
          z-index: 999;
        }
        .overlay-container.app-level {
          position: absolute;
          top: 0;
        }
        .overlay-container.app-level {
          width: var(--overlay-spinner-width, 100vw);
          height: var(--overlay-spinner-height, 100vh);
        }
        .spinner-overlay {
          width: 100%;
          height: 100%;
          background: var(--overlay-spinner-bg-color, rgba(255, 255, 255, 0.5));
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `,
    ];
  }

  /**
   * @attr app-level
   */
  @property({ type: Boolean, attribute: 'app-level' })
  appLevel!: boolean;

  /**
   * @attr width
   */
  @property({ type: String, attribute: 'width' })
  width: string = '100%';

  /**
   * @attr height
   */
  @property({ type: String, attribute: 'height' })
  height: string = '100%';

  /**
   * @attr position
   */
  @property({ type: String, attribute: 'position' })
  position!: string;

  //
  override render() {
    return html`
      <div
        class="overlay-container${classMap({
          'app-level': this.appLevel,
        })}"
        style=${styleMap({
          height: this.height ?? '100%',
          width: this.width ?? '100%',
          position: this.position ?? undefined,
        })}
      >
        <div class="spinner-overlay">
          <azl-spinner></azl-spinner>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'azl-overlay-spinner': OverlaySpinner;
  }
}
