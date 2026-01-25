/*
 *            GNU GENERAL PUBLIC LICENSE
 *               Version 3, 29 June 2007
 *
 *  Copyright (C) 2022-2025 Terwer, Inc. <https://terwer.space/>
 *  Everyone is permitted to copy and distribute verbatim copies
 *  of this license document, but changing it is not allowed.
 */

/**
 * 常量定义
 *
 * @author terwer
 * @version 0.0.1
 * @since 0.0.1
 */
export const workspaceDir = `${(window as any).siyuan.config.system.workspaceDir}`
export const dataDir = `${(window as any).siyuan.config.system.dataDir}`
// @ts-ignore
export const isDev = process.env.DEV_MODE === "true"
