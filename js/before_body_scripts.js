document.body.onload = firstBodyElem;

function firstBodyElem(){
    let firstElem = document.createElement('div');
    firstElem.insertAdjacentHTML('afterbegin', '<p>Hello Ad</p>')
    firstElem.insertAdjacentHTML('afterbegin', '<span id="close"> &times;</ </span>');
    firstElem.className = 'beforeBody';
    document.body.before(firstElem);    
    
    document.getElementById('close').addEventListener("click", function(){
        this.parentElement.style.display = 'none';
    })

    // Inject favicon into head
    var favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    favicon.sizes = '32x32';
    favicon.href = 'https://www.clpalacios.in/favicon/favicon-32x32.png';
    document.head.appendChild(favicon);
}

setTimeout(function() {
    try {
        // Python highlighting
        document.querySelectorAll("pre > code").forEach(function(block) {
            if (block.hasAttribute("id")) return;

            let lines = block.innerHTML.split('\n');
            lines = lines.map(function(line) {
                let trimmed = line.trimStart();

                // If line is a comment, wrap whole line and skip everything else
                if (trimmed.startsWith('#')) {
                    return '<span class="py-comment">' + line + '</span>';
                }

                // Keywords
                line = line.replace(/(<[^>]+>)|(\b(?:def|return|if|elif|else|for|while|in|import|from|as|try|except|finally|with|pass|break|continue|lambda|and|or|not|is|None|True|False|yield|del|raise)\b)/g,
                    function(match, tag, keyword) {
                        if (tag) return tag;
                        return '<span class="py-keyword">' + keyword + '</span>';
                    });

                // Builtins
                line = line.replace(/(<[^>]+>)|(\b(?:print|len|range|int|str|float|list|dict|set|tuple|type|input|open|sum|max|min|sorted|enumerate|zip|map|filter)\b)/g,
                    function(match, tag, builtin) {
                        if (tag) return tag;
                        return '<span class="py-builtin">' + builtin + '</span>';
                    });

                // Strings
                line = line.replace(/(<[^>]+>)|(&quot;.*?&quot;|'.*?')/g,
                    function(match, tag, str) {
                        if (tag) return tag;
                        return '<span class="py-string">' + str + '</span>';
                    });

                // Numbers
                line = line.replace(/(<[^>]+>)|(\b\d+\.?\d*\b)/g,
                    function(match, tag, num) {
                        if (tag) return tag;
                        return '<span class="py-number">' + num + '</span>';
                    });

                return line;
            });

            block.innerHTML = lines.join('\n');
        });
        console.log("Python highlighting applied");

    } catch(e) {
        console.log("Highlighting error:", e);
    }

    // Markdown highlighting
    document.querySelectorAll("pre.md-code > code").forEach(function(block) {
        if (block.hasAttribute("id")) return;
        let html = block.innerHTML;

        // Headings
        html = html.replace(/(<[^>]+>)|(#{1,6} .+)/g, function(match, tag, heading) {
            if (tag) return tag;
            return '<span class="md-heading">' + heading + '</span>';
        });

        // Bold
        html = html.replace(/(<[^>]+>)|(\*\*.*?\*\*)/g, function(match, tag, bold) {
            if (tag) return tag;
            return '<span class="md-bold">' + bold + '</span>';
        });

        // Italic
        html = html.replace(/(<[^>]+>)|(\*.*?\*)/g, function(match, tag, italic) {
            if (tag) return tag;
            return '<span class="md-italic">' + italic + '</span>';
        });

        // Links
        html = html.replace(/(<[^>]+>)|(\[.*?\]\(.*?\))/g, function(match, tag, link) {
            if (tag) return tag;
            return '<span class="md-link">' + link + '</span>';
        });

        // Inline code
        html = html.replace(/(<[^>]+>)|(`.*?`)/g, function(match, tag, code) {
            if (tag) return tag;
            return '<span class="md-code">' + code + '</span>';
        });

        block.innerHTML = html;
    });

    // Copy button for all code blocks
    document.querySelectorAll("pre").forEach(function(pre) {
        let button = document.createElement("button");
        button.textContent = "Copy";
        button.style.cssText = "position:absolute; top:0.5em; right:0.5em; padding:0.2em 0.7em; font-size:0.8rem; cursor:pointer; border:1px solid #ddd; border-radius:3px; background:#fff;";

        button.addEventListener("click", function() {
            let code = pre.querySelector("code").innerText;
            navigator.clipboard.writeText(code).then(function() {
                button.textContent = "Copied!";
                setTimeout(function() { button.textContent = "Copy"; }, 2000);
            });
        });

        pre.style.position = "relative";
        pre.appendChild(button);
    });

}, 1000);