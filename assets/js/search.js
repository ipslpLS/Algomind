document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    // Define the search JSON path based on the environment
    const isLocal = window.location.hostname === "localhost"; // Change to your local hostname
    const basePath = isLocal ? "" : "/Algomind"; // Adjust the base path for GitHub Pages

    const searchJsonPath = isLocal
        ? "/data/search-names.json" // Local path
        : "https://ipslpls.github.io/Algomind/search-names.json"; // GitHub Pages path

    fetch(searchJsonPath)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log("Data Loaded:", data);
            initializeSearch(data.posts);
        })
        .catch((error) => console.error("Fetch error:", error));

    function initializeSearch(posts) {
        const options = {
            keys: ["title", "tags"],
        };

        const fuse = new Fuse(posts, options);

        searchInput.addEventListener("input", function () {
            const searchTerm = searchInput.value.trim().toLowerCase();
            console.log("Search Term:", searchTerm);
            const results = fuse.search(searchTerm);
            console.log("Search Results:", results);
            displayResults(results);
        });

        function displayResults(results) {
            const searchTerm = searchInput.value.trim().toLowerCase();

            const partialMatches = results.filter((result) =>
                result.item.title.toLowerCase().includes(searchTerm)
            );

            const tagSearch = searchTerm.startsWith("#");

            searchResults.innerHTML =
                partialMatches.length > 0
                    ? partialMatches
                          .map(
                              (result) => `
                                <div class="SearchResultElement">
                                    <h2><a href="${basePath}${result.item.url}">${result.item.title}</a></h2>
                                    <p>Tags: ${result.item.tags
                                        .map(
                                            (tag) => `
                                                <a href="${basePath}/tags/${tag}/">#${tag.replace(/-/g, " ")}</a>
                                            `
                                        )
                                        .join(", ")}</p>
                                </div>
                            `
                          )
                          .join("")
                    : tagSearch
                    ? posts
                          .filter((post) => post.tags.includes(searchTerm.slice(1))) // remove '#' and search as tag
                          .map(
                              (post) => `
                                <div class="SearchResultElement">
                                    <h3><a href="${basePath}${post.url}">${post.title}</a></h3>
                                    <p>Tags: ${post.tags
                                        .map(
                                            (tag) => `
                                                <a href="${basePath}/tags/${tag}/">#${tag.replace(/-/g, " ")}</a>
                                            `
                                        )
                                        .join(", ")}</p>
                                </div>
                            `
                          )
                          .join("")
                    : "";
        }
    }
});