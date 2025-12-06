# cts

In collage I created [this web tool](http://github.com/giovanirubim/quatiview) where you can kinda write C, create a couple of data structures (linked lists and binary trees, of ints specifically) and watch the memory blocks being allocated, linked and freed. But the code isn't great and the main issue is the mess that the C interpreter became. I hope to fix this with a new C interpreter written in typescript.

## How the compiler works

Even though I did like the compilers subject in university I don't usually learn things by the book and often unnecessarily rebuild the wheel. A wheel that is sometimes not very round, but rolls anyway. This might be the feeling you get by reading this compiler, I have no standards but the ones I end up creating.

### CompilationContext

`CompilationContext` will be an object that is used across the functions used for lexical, syntactic and semantic analysis.

It should contain:

- The source code
- Which part of the source code was already processed
- Declared macros, functions, variables, constants, scopes etc.
- Helper functions that the parsers can use
