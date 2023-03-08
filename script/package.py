# Copyright (c) 2022 Landray Authors. All Rights Reserved.
# @author terwer on 2023/3/8
# ========================================================
import os

import scriptutils

if __name__ == "__main__":
    # 切换工作空间
    scriptutils.switch_workdir()

    os.system("pnpm template")
    os.system("pnpm install")
    os.system("pnpm build")
    os.system("pnpm typings")
    os.system("pnpm clean")
    os.system("pnpm coverage ")
    print("package finished.")