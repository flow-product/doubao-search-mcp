export function isValidSearchArgs(args) {
    if (typeof args !== 'object' || args === null) {
        return false;
    }
    const { query, max_results, search_service, crawl_results } = args;
    if (typeof query !== 'string' || query.trim().length === 0) {
        return false;
    }
    if (max_results !== undefined && (typeof max_results !== 'number' || max_results < 1 || max_results > 50)) {
        return false;
    }
    if (search_service !== undefined && typeof search_service !== 'string') {
        return false;
    }
    if (crawl_results !== undefined && (typeof crawl_results !== 'number' || crawl_results < 0 || crawl_results > 10)) {
        return false;
    }
    return true;
}
export function isValidCrawlArgs(args) {
    if (typeof args !== 'object' || args === null) {
        return false;
    }
    const { url } = args;
    if (typeof url !== 'string' || url.trim().length === 0) {
        return false;
    }
    return true;
}
export function isValidSitemapArgs(args) {
    if (typeof args !== 'object' || args === null) {
        return false;
    }
    const { url } = args;
    if (typeof url !== 'string' || url.trim().length === 0) {
        return false;
    }
    return true;
}
export function isValidNewsArgs(args) {
    if (typeof args !== 'object' || args === null) {
        return false;
    }
    const { query, max_results, search_service } = args;
    if (typeof query !== 'string' || query.trim().length === 0) {
        return false;
    }
    if (max_results !== undefined && (typeof max_results !== 'number' || max_results < 1 || max_results > 50)) {
        return false;
    }
    if (search_service !== undefined && typeof search_service !== 'string') {
        return false;
    }
    return true;
}
export function isValidReasoningArgs(args) {
    if (typeof args !== 'object' || args === null) {
        return false;
    }
    const { content } = args;
    if (typeof content !== 'string' || content.trim().length === 0) {
        return false;
    }
    return true;
}
