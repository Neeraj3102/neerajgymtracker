# Neeraj Tracker

This repository contains the complete deploy-ready static build of the Neeraj Tracker gym exercise application.

## Included features

- Seven-day editable PPL routine
- WarmUp, Main, Cardio, and Ab & Core Exercise sections
- Cardio and Stretching exercise library categories
- Custom workout sessions and custom routines
- Browser-local workout history and preferences

## Run locally

No installation or build command is required. From this folder, run:

```powershell
python -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Push to GitHub manually

Create an empty repository on GitHub, then run these commands from this folder:

```powershell
git init
git add .
git commit -m "Add Neeraj Tracker website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with your GitHub details.

## Deploy from GitHub with Netlify

Connect the repository in Netlify. Leave the build command empty and use `.` as the publish directory. The included `netlify.toml` already declares this publish directory.

## Source note

The original development source was not available, so this repository contains the recovered, production-ready website bundle currently used by the live site. It can be hosted directly and edited, though the main JavaScript and CSS bundles are compiled assets.
