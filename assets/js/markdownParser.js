document.addEventListener('DOMContentLoaded', function() {

    function parseDetailsBlock(html) {
        const detailsRegex = /\[~\{(.*?)\}\{(.*?)\}~\]/g;
        let match;
        while ((match = detailsRegex.exec(html)) !== null) {
            const summary = match[1].trim();
            let content = match[2].trim();
            content = parseDetailsBlock(content); // recursively parse nested details blocks [~{A}{[~{AA}{BBB}~]}~]
            const detailsBlock = `<details><summary>${summary}</summary>${content}</details>`;
            html = html.substring(0, match.index) + detailsBlock + html.substring(match.index + match[0].length);
        }
        return html;
    }

    const rules = [
        // Header rules
        [/#{6}\s?([^\n]+)/g, "<h6>$1</h6>"],
        [/#{5}\s?([^\n]+)/g, "<h5>$1</h5>"],
        [/#{4}\s?([^\n]+)/g, "<h4>$1</h4>"],
        [/#{3}\s?([^\n]+)/g, "<h3>$1</h3>"],
        [/#{2}\s?([^\n]+)/g, "<h2>$1</h2>"],
        [/#{1}\s?([^\n]+)/g, "<h1>$1</h1>"],
        
        // Bold, italics, and paragraph rules
        [/\*\*\s?([^\n]+)\*\*/g, "<b>$1</b>"],
        [/\*\s?([^\n]+)\*/g, "<i>$1</i>"],
        [/__([^_]+)__/g, "<b>$1</b>"],
        [/_([^_`]+)_/g, "<i>$1</i>"],
        [/([^\n]+\n?)/g, "<p>$1</p>"],
        
        // Links
        [
          /\[([^\]]+)\]\(([^)]+)\)/g,
          '<a href="$2" style="color:#2A5DB0;text-decoration: none;">$1</a>',
        ],
        
        // Highlights
        [
          /(`)(\s?[^\n,]+\s?)(`)/g,
          '<a style="background-color:grey;color:black;text-decoration: none;border-radius: 3px;padding:0 2px;">$2</a>',
        ],
      
        // Nested list rule
        [/^\s*(?!(?:\${1,2}[^$]*\${1,2}))([+*])\s+(?!(?:\${1,2}[^$]*\${1,2}))(.*)/gm, "<ul><li>$2</li></ul>"],
      
        // Shortcode rule
        [/\[~~\{(.*?)\}\{(.*?)\}~~\]/g, "<span>$1 - $2</span>"], // Modify this according to your shortcode's HTML representation
    ];

    // Helper function to determine the indentation level of a list item
    function getIndentationLevel(line) {
        return line.match(/^\s*/)[0].length;
    }

    function markdownParser(el) {
        let markdownText = el.value;
        markdownText = parseDetailsBlock(markdownText); // Process nested shortcodes first
    
        let lines = markdownText.split('\n');
        let html = '';
        let nestedListLevel = 0; // Track the level of nested list
        let nestedBlockquoteLevel = 0; // Track the level of nested blockquotes
    
        for (let line of lines) {
            if (!line.trim()) {
                html += '<br>'; // Handle empty lines
            } else if (line.trim().startsWith('+') || line.trim().startsWith('*')) {
                // Handle list items
                let listItemContent = line.trim().substring(1);
                let currentLevel = getIndentationLevel(line);
    
                if (currentLevel > nestedListLevel) {
                    // Start a nested list
                    html += '<ul>';
                    nestedListLevel = currentLevel;
                } else if (currentLevel < nestedListLevel) {
                    // End the nested list
                    html += '</ul>'.repeat(nestedListLevel - currentLevel);
                    nestedListLevel = currentLevel;
                }
    
                html += `<li>${listItemContent}</li>`;
            } else if (line.trim().startsWith('>')) {
                // Handle blockquotes
                let blockquoteContent = line.trim().replace(/^>+\s*/, ''); // Remove '>' symbols from the beginning of the line
                let currentLevel = getBlockquoteLevel(line);
    
                if (currentLevel > nestedBlockquoteLevel) {
                    // Start a nested blockquote
                    html += '<blockquote>';
                    nestedBlockquoteLevel = currentLevel;
                } else if (currentLevel < nestedBlockquoteLevel) {
                    // End the nested blockquote
                    html += '</blockquote>'.repeat(nestedBlockquoteLevel - currentLevel);
                    nestedBlockquoteLevel = currentLevel;
                }
    
                html += `<p>${blockquoteContent}</p>`;
            } else {
                // Process other markdown elements using your existing rules
                rules.forEach(([rule, template]) => {
                    line = line.replace(rule, template);
                });
                html += line; // Add line break after each line
            }
        }
    
        // Close any remaining nested lists and blockquotes
        html += '</ul>'.repeat(nestedListLevel);
        html += '</blockquote>'.repeat(nestedBlockquoteLevel);
    
        el.innerHTML = html;
    }
    
    // Helper function to determine the indentation level of a blockquote
    function getBlockquoteLevel(line) {
        return line.match(/^(\s*>)+/)[0].length;
    }
    
    
    
    

    var markdownInput = document.getElementById('markdownInput');
    var markdownOutput = document.getElementById('markdownOutput');

    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    markdownInput.addEventListener('input', function() {
        // Apply the parser on the input element
        markdownParser(markdownInput);
        console.log(markdownInput);

        // Get the converted HTML from the input element
        var htmlContent = markdownInput.innerHTML;

        // Decode the HTML content
        var decodedHtmlContent = decodeHtml(htmlContent);

        // Update the output element with the converted HTML
        console.log("Raspuns :" + markdownInput.value);
        //markdownOutput.innerHTML = markdownInput.value;
        markdownOutput.innerHTML = decodedHtmlContent;
        
        //Math with KaTeX
        renderMathInElement(document.body, {
            delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "$", right: "$", display: false}
            ],
            strict: false
        });
    });
});