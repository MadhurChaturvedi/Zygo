# create a project ZYGO
CREATE folder
- frontend
- service

```js
mkdir backend/auth 
```

install typescript

```js
npm i -g typescript
```

intitillized the tsconfig.json

```js
npx tsc --init
```

create tsconfig.json

```js
npm install -g typescript
```

initillise the project

```js
npm init -y
```

install dependency

```js
npm i mongoose cors axios dotenv googleapis jsonwebtoken express 
```

install dev depencenvy dependency

```js
npm i -D @types/mongoose @types/cors @types/axios @types/dotenv  @types/jsonwebtoken @types/express concurrently typescript 
```

past on tsconfig.json

```js
{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    // File Layout
    "rootDir": "./src",
    "outDir": "./dist",

    // Environment Settings
    // See also https://aka.ms/tsconfig/module
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "target": "es2020",

    // For nodejs:
    "lib": ["es2020"],
    "types": ["node"],
    // and npm install -D @types/node

    // Other Outputs
    "sourceMap": false,
    "declaration": false,
    "declarationMap": false,

    // Style Options
    // "noImplicitReturns": true,
    // "noImplicitOverride": true,
    // "noUnusedLocals": true,
    // "noUnusedParameters": true,
    // "noFallthroughCasesInSwitch": true,
    // "noPropertyAccessFromIndexSignature": true,

    // Recommended Options
    "strict": true,
    "skipLibCheck": true,


    "esModuleInterop": true,
    "resolveJsonModule": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```
