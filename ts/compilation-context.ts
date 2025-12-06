class CompilationContext {
	private source: string;
	private index: number = 0;

	constructor(source: string) {
		this.source = source;
	}

	nextChar(): string {
		return this.source[this.index] ?? '';
	}
	skip(count: number) {
		this.index += count;
	}
	end(): boolean {
		return this.index >= this.source.length;
	}

	// Returns the remaining source code that wasn't consumed already
	// This isn't optimal, it's here for now to help regex-based parsing
	// but regex should eventually be replaced by hand written code
	// TODO: Replace regex by functions and remove this
	remaining(): string {
		return this.source.slice(this.index);
	}
}

export default CompilationContext;
