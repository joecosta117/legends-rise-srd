export function getPath(): string {
  return window.location.pathname.split("/").pop() as string;
}

export function getHash(): string {
 const hash = window.location.hash.split("#").pop() as string;
  return hash.charAt(0).toUpperCase() + hash.slice(1);
}

export function removeHash(): void {
  history.pushState(
    "",
    document.title,
    window.location.pathname + window.location.search
  );
}