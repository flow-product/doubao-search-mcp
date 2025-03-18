export interface SearchResult {
  title: string;
  link: string;
  snippet: string;
}

export interface SearchResponse {
  searchParameters: {
    query: string;
    search_service: string;
    max_results: number;
    crawl_results: number;
    gl: string;
    hl: string;
    image: boolean;
  };
  results: SearchResult[];
  images:any[];
}

export interface SearchArgs {
  query: string;
  max_results?: number;
  search_service?: string;
  crawl_results?: number;
}

export function isValidSearchArgs(args: unknown): args is SearchArgs {
  if (typeof args !== 'object' || args === null) {
    return false;
  }

  const { query, max_results, search_service, crawl_results } = args as SearchArgs;

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

export interface CrawlResult {
  title: string;
  link: string;
  content: string;
}

export interface CrawlResponse {
  crawlParameters: {
    url: string;
  };
  results: CrawlResult;
}

export interface CrawlArgs {
  url: string;
}

export function isValidCrawlArgs(args: unknown): args is CrawlArgs {
  if (typeof args !== 'object' || args === null) {
    return false;
  }

  const { url } = args as CrawlArgs;

  if (typeof url !== 'string' || url.trim().length === 0) {
    return false;
  }

  return true;
}

export interface SitemapResponse {
  links: string[];
}

export interface SitemapArgs {
  url: string;
}

export function isValidSitemapArgs(args: unknown): args is SitemapArgs {
  if (typeof args !== 'object' || args === null) {
    return false;
  }

  const { url } = args as SitemapArgs;

  if (typeof url !== 'string' || url.trim().length === 0) {
    return false;
  }

  return true;
}

export interface NewsResult {
  title: string;
  link: string;
  snippet: string;
}

export interface NewsResponse {
  searchParameters: {
    query: string;
    search_service: string;
    max_results: number;
    crawl_results: number;
    gl: string;
    hl: string;
    image: boolean;
  };
  results: NewsResult[];
}

export interface NewsArgs {
  query: string;
  max_results?: number;
  search_service?: string;
}

export function isValidNewsArgs(args: unknown): args is NewsArgs {
  if (typeof args !== 'object' || args === null) {
    return false;
  }

  const { query, max_results, search_service } = args as NewsArgs;

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

export interface ReasoningArgs {
  content: string;
}

export interface ReasoningResponse {
  choices: [{
    message: {
      content: string;
      role: string;
    };
    finish_reason: string;
    index: number;
  }];
}

export function isValidReasoningArgs(args: unknown): args is ReasoningArgs {
  if (typeof args !== 'object' || args === null) {
    return false;
  }

  const { content } = args as ReasoningArgs;

  if (typeof content !== 'string' || content.trim().length === 0) {
    return false;
  }

  return true;
}