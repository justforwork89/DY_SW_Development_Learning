@echo off
setlocal
cd /d "%~dp0"

where git >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Git is not installed. Install from https://git-scm.com/download/win and run again.
  pause
  exit /b 1
)

if not exist ".git" git init -b main
git config core.quotepath false
git config core.autocrlf false
git config pull.rebase false
git config push.default current
git config push.autoSetupRemote true
git config remote.pushDefault origin

git remote get-url origin >nul 2>nul
if errorlevel 1 (
  git remote add origin https://github.com/justforwork89/DY_SW_Development_Learning.git
) else (
  git remote set-url origin https://github.com/justforwork89/DY_SW_Development_Learning.git
)

git config user.name >nul 2>nul || git config user.name "justforwork89"
git config user.email >nul 2>nul || git config user.email "chzhsea89@gmail.com"

git add -A
git commit -m "init: Notion to Obsidian vault"
git push -u origin main

echo.
echo Done. Obsidian Git will now commit / pull / push every 1 minute.
pause
