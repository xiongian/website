export function getRootElement(): HTMLElement {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Root element not found. Make sure index.html has an element with id="root"');
  }
  return rootElement;
}
