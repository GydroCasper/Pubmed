export type Article = {
    id: string;
    name: string;
    type: 'pubmed' | 'omim' | 'hgmd' | undefined;
}