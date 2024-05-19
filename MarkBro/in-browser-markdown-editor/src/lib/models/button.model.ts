export interface ButtonModel {
callback: () => void;
disabled?: boolean;
loading?: boolean;
type?: string;
variant?: 'button' | 'toggle';
text?: string;
}