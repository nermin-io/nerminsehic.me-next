
export type Article = {
    title: string;
    description: string;
    publishedAt: string;
    language: Language;
}

export type Language = 'typescript' | 'java' | 'scala';