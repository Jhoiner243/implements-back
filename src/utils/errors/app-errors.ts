export class AppError extends Error {
  public timestamp: string = ""
  public message: string = ""
  public status: number = 200

  constructor(message: string, status: number ){
    super(message)
    this.message = message
    this.status = status
    this.timestamp = new Date().toISOString()
  }

  static success(message = "Exito en appError", status = 200){
    return new AppError(message, status)
  }

  static error(message = "Error en appError", status = 500){
    return new AppError(message, status)
  }
}