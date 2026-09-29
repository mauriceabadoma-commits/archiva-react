# Archiva – version React + Bootstrap

Réécriture de la plateforme d'archivage de CERs en **React** (via **Vite**), avec **Bootstrap 5** pour le style et **React Router DOM** pour la navigation entre les pages.

## Installer et lancer en local

```bash
npm install
npm run dev
```

Le site s'ouvre sur `http://localhost:5173`. Les modifications de code se rechargent automatiquement dans le navigateur.

## Construire la version de production

```bash
npm run build
```

Génère le dossier `dist/`, prêt à être déployé (Vercel le fait automatiquement à chaque `push`).

## Structure du projet

```
archiva-react/
├── public/
│   ├── assets/images/      images du site (logo, illustrations, CERs)
│   └── data/cers.json      données des CERs, récupérées via fetch()
├── src/
│   ├── components/         Header, Footer, CerCard, WelcomeBanner
│   ├── context/            FavoritesContext, MyCersContext (Context API)
│   ├── hooks/               useCers.js (fetch des CERs)
│   ├── pages/               une page par route (Home, Cers, Contact, ...)
│   ├── App.jsx              toutes les routes + code splitting
│   ├── main.jsx              point d'entrée, charge Bootstrap
│   └── index.css             variables Bootstrap personnalisées (couleurs Archiva)
├── index.html                page HTML unique de l'application (SPA)
├── vercel.json                redirige toutes les routes vers index.html
└── package.json
```

## Notions React utilisées, et où les retrouver

| Notion | Fichier |
|---|---|
| Composants fonctionnels + props | `components/CerCard.jsx` |
| useState (formulaires contrôlés) | `pages/Contact.jsx`, `pages/Connexion.jsx`, `pages/AjouterCer.jsx` |
| useEffect (cycle de vie) | `context/FavoritesContext.jsx` (synchronisation avec localStorage) |
| Context API | `context/FavoritesContext.jsx`, `context/MyCersContext.jsx` |
| Gestion d'événements | `onClick`, `onChange`, `onSubmit` dans tous les formulaires |
| Rendu conditionnel | États de chargement, erreurs, favoris vides, formulaire envoyé |
| React Router DOM | `App.jsx` (routes), `Header.jsx` (NavLink) |
| fetch | `hooks/useCers.js` |
| Code splitting / lazy loading | `App.jsx` (`React.lazy` + `Suspense`) |

## Déployer sur Vercel

Ce projet n'est plus un simple site statique : c'est une application qui a besoin d'être **compilée** (`npm run build`) avant d'être servie. Vercel sait le faire automatiquement, mais il faut vérifier son réglage :

1. Poussez ce projet sur votre dépôt GitHub (voir la procédure Git habituelle).
2. Dans Vercel, ouvrez le projet, **Settings, General**.
3. Vérifiez que **Framework Preset** est bien détecté sur **Vite** (sinon, changez-le manuellement).
4. **Build Command** doit être `npm run build` (valeur par défaut de Vite, à ne pas changer).
5. **Output Directory** doit être `dist` (valeur par défaut de Vite).
6. Redéployez.

Le fichier `vercel.json` inclus dans ce projet garantit que naviguer directement vers une URL comme `/cers` ou `/contact` fonctionne, même en tapant l'adresse directement dans le navigateur (ce qui n'est pas automatique pour une application React).
