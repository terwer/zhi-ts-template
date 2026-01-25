/*
 *            GNU GENERAL PUBLIC LICENSE
 *               Version 3, 29 June 2007
 *
 *  Copyright (C) 2022-2025 Terwer, Inc. <https://terwer.space/>
 *  Everyone is permitted to copy and distribute verbatim copies
 *  of this license document, but changing it is not allowed.
 */

import { App, type IObject, Plugin } from "siyuan"
import { simpleLogger, type ILogger } from "zhi-lib-base"

import "../index.styl"
import { isDev } from "./Constants"


/**
 * {{className}} 插件主类
 * {{description}}
 * 
 * @author {{githubAuthor}}
 * @version 0.0.1
 * @since 0.0.1
 */
export default class {{className}} extends Plugin {
  private logger: ILogger

  constructor(options: { app: App; id: string; name: string; i18n: IObject }) {
    super(options)

    this.logger = simpleLogger("index", "{{lowerClassName}}", isDev)
  }

  onload() {
    if(isDev){
      this.logger.info("{{className}} loaded")
    }
  }

  onunload() {
    if(isDev){
      this.logger.info("{{className}} unloaded")
    }
  }
}
