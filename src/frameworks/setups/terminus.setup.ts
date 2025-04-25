import { createTerminus } from '@godaddy/terminus'
import http from 'http'
import { injectable } from 'inversify'
import { logger } from '../../utils/logger'

@injectable()
export class TerminusSetup {
  setup(server: http.Server): void {
    async function onSignal(): Promise<void>{
      logger.info("Server is starting cleanup")
    }

    async function onShutdown(): Promise<void> {
      logger.info("Cleanup finished, server is shutting down")
    }

    createTerminus(server, {
      onSignal,
      onShutdown,
      healthChecks: {
        "/healthcheck": async () => "OK",
      },
    })
  }
}