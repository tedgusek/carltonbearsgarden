export interface WelcomeModalProps {
  onClose: () => void;
}

// export interface GmailIconProps {
//     body: string;
// }

export interface GmailIconProps {
  //   initialBody?: string;
  isFormOpen: boolean;
  handleForm: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  setBody: (arg0: string) => void;
  body: string;
}
