# Spinner web component

## Usage

```html
<script type="module">
  import '../dist/azl-overlay-spinner.js';
</script>

<azl-spinner class="spinner" size="small"> </azl-spinner>
<azl-spinner class="spinner" size="small" basic> </azl-spinner>
<azl-spinner class="spinner" size="medium"> </azl-spinner>
<azl-spinner class="spinner" size="medium" basic> </azl-spinner>
```

```html
<script type="module">
  import '../dist/azl-overlay-spinner.js';
</script>

<azl-overlay-spinner class="spinner" size="small"> </azl-overlay-spinner>
<azl-overlay-spinner class="spinner" size="small" basic> </azl-overlay-spinner>
<azl-overlay-spinner class="spinner" size="medium"> </azl-overlay-spinner>
<azl-overlay-spinner class="spinner" size="medium" basic> </azl-overlay-spinner>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
