export interface HeaderProgressProps {
  progress: number;
  onCloseAction?(): void;
  onOptionsClick?(): void;
}

export interface ConversationOneProps {
  header: string;
  translation: string;
}

export interface ConversationResponseProps extends ConversationOneProps {
  speaking: boolean;
  onMicPress(): void
}
