# Pass Manage

Pass Manage is a local password manager app. It is not designed to deploy on the cloud.

## How To Run

Firstly add the an .env file to the root of the project. Then add these variables and set them accordingly

- `MONGODB_URI`
- `SECRET_KEY`

## IMPORTANT NOTE

the `SECRET_KEY` is supposed to be randomly generated

```js
import crypto from "crypto";

function deriveSecretKey(masterPassword: string): string {
  return crypto
    .pbkdf2Sync(masterPassword, "your-app-salt", 100000, 32, "sha256")
    .toString("hex");
}

const secretKey = deriveSecretKey("user-master-password");
```

# Deploy

`npm install` - Install all the packages
`npm build` - Build the production app
`npm start` - Start the app
