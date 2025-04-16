export interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    liveUrl: string;
    githubUrl?: string;
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}

export interface HeaderProps {
    title: string;
    subtitle?: string;
}