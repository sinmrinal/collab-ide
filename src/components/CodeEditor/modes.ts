export default [
    { name: "C", mime: "text/x-csrc", mode: "clike", ext: ["c", "h", "ino"] },
    { name: "C++", mime: "text/x-c++src", mode: "clike", ext: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"], alias: ["cpp"] },
    { name: "C#", mime: "text/x-csharp", mode: "clike", ext: ["cs"], alias: ["csharp"] },
    { name: "Clojure", mime: "text/x-clojure", mode: "clojure", ext: ["clj", "cljc", "cljx"] },
    { name: "Dart", mimes: ["application/dart", "text/x-dart"], mode: "dart", ext: ["dart"] },
    { name: "Erlang", mime: "text/x-erlang", mode: "erlang", ext: ["erl"] },
    { name: "Go", mime: "text/x-go", mode: "go", ext: ["go"] },
    { name: "Haskell", mime: "text/x-haskell", mode: "haskell", ext: ["hs"] },
    { name: "HTML", mime: "text/html", mode: "htmlmixed", ext: ["html", "htm", "handlebars", "hbs"], alias: ["xhtml"] },
    { name: "Java", mime: "text/x-java", mode: "clike", ext: ["java"] },
    {
      name: "JavaScript", mimes: ["text/javascript", "text/ecmascript", "application/javascript", "application/x-javascript", "application/ecmascript"],
      mode: "javascript", ext: ["js"], alias: ["ecmascript", "js", "node"]
    },
    { name: "Python", mime: "text/x-python", mode: "python", ext: ["BUILD", "bzl", "py", "pyw"], file: /^(BUCK|BUILD)$/ },
    { name: "R", mime: "text/x-rsrc", mode: "r", ext: ["r", "R"], alias: ["rscript"] },
    { name: "Rust", mime: "text/x-rustsrc", mode: "rust", ext: ["rs"] },
    { name: "TypeScript", mime: "application/typescript", mode: "javascript", ext: ["ts"], alias: ["ts"] },
    ];