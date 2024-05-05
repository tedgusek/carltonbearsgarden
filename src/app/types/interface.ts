import { RefObject } from 'react';

export interface WelcomeModalProps {
  onClose: () => void;
}

export interface WelcomePageProps {
  content: string;
}

export interface ContentWindowProps {
  content: string;
  contentRef: RefObject<HTMLDivElement>;
}

export interface HistoryPageProps {
  content: string;
}

export interface NavbarProps {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  scrollToTop: () => void;
}

export interface BAMPageProps {
  content: string;
}

export interface AboutPageProps {
  content: string;
}

export interface SuggestedDuesPageProps {
  content: string;
}
