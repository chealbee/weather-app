type buttonType = "search" | null;
export interface IButon {
   text: string;
   type?: buttonType;
   onClick?: () => void;
}

export interface IInput {
   placeholder: string;
   value?: string;
   changeValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
