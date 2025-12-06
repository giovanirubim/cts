class CompilationContext {
    source;
    index = 0;
    constructor(source) {
        this.source = source;
    }
    nextChar() {
        return this.source[this.index] ?? '';
    }
    skip(count) {
        this.index += count;
    }
    end() {
        return this.index >= this.source.length;
    }
    remaining() {
        return this.source.slice(this.index);
    }
}
export default CompilationContext;
