import { OverlaySpinner } from './lib/OverlaySpinner.js';
import { Spinner } from './lib/Spinner.js';

declare global {
  interface HTMLElementTagNameMap {
    'azl-spinner': Spinner;
  }
  interface HTMLElementTagNameMap {
    'azl-overlay-spinner': OverlaySpinner;
  }
}
