## ProtonMail Header Display

### Description

A [Mozilla Thunderbird](https://www.thunderbird.net/) plugin to improve integration with [ProtonMail Bridge](https://protonmail.com/bridge/).
ProtonMail adds `X-PM-*` headers to your mail to indicate whether it was end-to-end (E2E) encrypted and whether it came from another ProtonMail address, but these aren't easily-visible in Thunderbird. This plugin shows you the encryption status of each email as you view it. There are four statuses:

![E2E encrypted internal mail from other ProtonMail users, PGP-encrypted email from non ProtonMail users, encrypted mail stored encrypted by ProtonMail, and completely unencrypted mail such as stored locally in your Sent or Drafts folder](https://danq.me/wp-content/uploads/2020/10/x-pm-display.png)

### Building

To build from source, run e.g.

```
cd source
zip ../protonmail-header-display.xpi *
```

### License

Open source, licensed under the [GNU General Public License v3.0 or later](https://spdx.org/licenses/GPL-3.0-or-later.html).

Icons made by [DinosoftLabs](https://www.flaticon.com/authors/dinosoftlabs) from [Flaticon](https://www.flaticon.com/)), used under the [Flaticon License](https://www.freepikcompany.com/legal#nav-flaticon).
