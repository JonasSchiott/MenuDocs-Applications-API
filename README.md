# The MenuDocs Application API

The MenuDocs Applications API is available to check the status of the MenuDocs Applications.

## How to use it -

It's just as simple as importing the package and then our functions.

### Websites -
Import the Package and use our basic response functions listed below.

Functions -
- webProfStatus
- webStaffStatus
- webContentStatus
- webBanStatus

They all require a User ID to be passed. To do this use the code below.

```js
const userInfo = /* User ID Here */;
webProfStatus(userInfo)
```

Then handle your response with a .then() like this.

```js
const userInfo = /* User ID Here */;
webProfStatus(userInfo).then(/* Handle Response Here */)
```

You can replace webProfStatus with any of the Functions listed above.

### Discord.js Bots -
Import the Package and use our Bot Functions listed below.

Functions -
- botProfStatus
- botStaffStatus
- botContentStatus
- botBanStatus

We build the Embeds for you so all you need to do is pass a User ID and then send the function response.
```js
const userInfo = message.author.id;
botProfStatus(userInfo).then(response => message.channel.send(response));
```

And it will send the embed to the channel that the command was sent in.

And that's it, Enjoy the Package

-Vixel