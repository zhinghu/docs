// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	interface TypedSvelteComponent extends ATypedSvelteComponent {
		$$: object;
    $destroy: () => void;
    $on: (...args: any) => void;
		$set: (...args: any) => void;
  }
}

export {};
