// Cada “mensaje” puede ser texto libre o un objeto de llamada a función
export type ChatMessage =
  | { finalText: { text: string[] } }
  | {
      functionCall?: funcionCall;
    };

// Payload final
export interface LlmResponse {
  messages: ChatMessage;
  role: "assitent";
}

export interface funcionCall {
  args?: Record<string, unknown>;
  name?: string[];
}
