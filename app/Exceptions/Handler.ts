import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'

export default class ExceptionHandler extends HttpExceptionHandler {
  protected disableStatusPagesInDevelopment = false

  protected statusPages = {
    // '402': 'E_ROW_NOT_FOUND',
    // '500..599': 'errors/server-error',
  }

  constructor() {
    super(Logger)
  }
}
