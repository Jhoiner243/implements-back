export interface NotificationsEntity {
  user: string
  message: {
    message: string
    sent: boolean
    tokens: string[]
  };
  is_read?: boolean
  error?: string
}
