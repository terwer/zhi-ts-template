# Copyright (c) 2022 Landray Authors. All Rights Reserved.
# @author terwer on 2023/3/8
# ========================================================
import os

import scriptutils

if __name__ == "__main__":
    # 切换工作空间
    scriptutils.switch_workdir()

    os.system("pnpm ci")
    os.system("pnpm typings")

    # 文档
    scriptutils.cp_folder("./doc", "docs/doc", True)
    scriptutils.rm_folder("./doc")

    os.system("pnpm clean")
    os.system("pnpm coverage ")
    print("package finished.")
