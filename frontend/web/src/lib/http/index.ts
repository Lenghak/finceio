import { isServer } from "@tanstack/react-query"
import { http as clientHttp } from "./client"
import { http as serverHttp } from "./server"

export const http = isServer ? serverHttp : clientHttp
