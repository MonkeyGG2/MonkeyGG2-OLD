# Eaglercraft

**Currently maintained by [ayunami2000](https://github.com/ayunami2000)**

### Client: [https://g.deev.is/eaglercraft/](https://g.deev.is/eaglercraft/)

### Offline Download: [Offline_Download_Version.html](https://github.com/lax1dude/eaglercraft/raw/main/stable-download/Offline_Download_Version.html)

### Note: we will be transitioning away from Eaglercraft being standalone 'free browser minecraft' to Eaglercraft being a bukkit/bungee plugin for servers to allow 'online access' to players who register with a command as their real online-mode Minecraft account on the server. Server owners can still elect to set `online-mode=false` in their server.properties to allow free login but now that's their legal screw up instead of mine

![eaglercraft](https://cdn.discordapp.com/attachments/378764518081429506/964047481849643018/new_github_screenshot.png)

### Official Demo URL: [https://g.deev.is/eaglercraft/](https://g.deev.is/eaglercraft/)

### Download Locally: [stable-download/Offline_Download_Version.html](https://github.com/lax1dude/eaglercraft/raw/main/stable-download/Offline_Download_Version.html)

(right click the link and press 'Save link as...' to download the file)

### Play Minecraft Beta Singleplayer: [https://g.deev.is/eaglercraft/beta/](https://g.deev.is/eaglercraft/beta/)

**For any questions you can join the discord server and hit us up there [https://discord.gg/Ekzcgs3DKZ](https://discord.gg/Ekzcgs3DKZ)**

## What is Eaglercraft?

Eaglercraft is real Minecraft 1.5.2 that you can play in any regular web browser. That includes school chromebooks, it works on all chromebooks. It supports both singleplayer and multiplayer.

### Ayonull's server list: [https://eagler.nully.tech/servers](https://eagler.nully.tech/servers)

### Ayonull's FAQ site: [https://eagler.nully.tech/](https://eagler.nully.tech/)

## Singleplayer?

### Eaglercraft now fully supports singleplayer!

### Simply press the 'Singleplayer' button on the main menu and you can create a regular vanilla minecraft and play it any time.

The worlds are stored in your browser's local storage, **you can export them as EPK files and import them again on all other Eaglercraft sites that also support singleplayer.** You can even copy an exported world to an entirely different computer, or send it to a friend, and import it and continue playing with all your progress saved.

**Link: [https://g.deev.is/eaglercraft/](https://g.deev.is/eaglercraft/)**

## LAN Worlds?

### Eaglercraft fully supports LAN worlds, you can share your world with any player and they can connect directly to it as if you are running a server in your browser.

**LAN worlds will work between any two devices connected to the internet, you are not limited to only players connected to your Wi-Fi network**

To open your world to LAN, go to the pause menu and click 'Open to LAN'. You can configure the gamemode and cheats and if you would like to hide your LAN world. **When you do not hide your LAN world, it will appear on the Multiplayer screen from the main menu to anybody else also on your Wi-Fi network.** Set the world hidden if you are at school or something and don't want everyone else in your class to join as well and start griefing.

### When you open the world to LAN it will give you a 'join code'. Simply share the code with your friends and they can visit the Multiplayer screen from the main menu and click 'Direct Connect' and enter the code and they will be able to join your world.

### Make sure they add the relay server your game opens the LAN world on to their "Network Settings" menu accessable from the Multiplayer screen. You simply must send them the URL indicated in the pause menu once the world is opened and they can use the "Add Relay" option to add the URL to their list.

### THIS IS A REQUIRED STEP FOR A PERSON TO JOIN YOUR WORLD, IF THEY DO NOT HAVE THE RELAY YOUR WORLD IS HOSTED ON ADDED TO THEIR "Network Settings" THE GAME WILL BE UNABLE TO LOCATE THE WORLD

### Here are some public relay servers you can use:

 - `wss://relay.deev.is/`
 - `wss://relay.lax1dude.net/`
 - `wss://relay.shhnowisnottheti.me/`

## Issues?

I got tired of closing duplicate 'how to maek sever' issues almost every day so I disabled it because honestly I don't really care anymore, [join discord](https://discord.gg/Ekzcgs3DKZ) if you've got an issue to report that you are confident can be backed up with source code

## How to make a server

### If replit is acceptable, you can use this:

### [https://replit.com/@ayunami2000/eaglercraft-server](https://replit.com/@ayunami2000/eaglercraft-server)

1. **Check if Java is installed.** You can download it from [https://www.java.com/en/download/](https://www.java.com/en/download/)
2. Download the [stable-download/stable-download.zip](https://github.com/lax1dude/eaglercraft/raw/main/stable-download/stable-download.zip) file from this repository
4. Extract the ZIP file you downloaded to a new folder
5. Open the new folder, go into the `java/bungee_command` folder
6. In Windows, double-click `run.bat`. It should open a new terminal window  
![run.bat](https://i.gyazo.com/2b0f6b3e5b2e5a5a102c62ea5b6fba3f.png)  
**Some computers may just say 'run' instead of 'run.bat', both are correct**
7. On macOS or Linux, google how to open the terminal and use the `cd` command to navigate to `java/bungee_command`  
Then, in that folder, run `chmod +x run_unix.sh` and then run `./run_unix.sh`. It should start the same server
8. Go to the other `java/bukkit_command` folder that was also extracted from the ZIP
9. Again, on Windows, double-click `run.bat` in the folder. It should open a second terminal window.  
Keep both the first and second terminal window you opened, just minimize them don't close
10. Again, on macOS or Linux, repeat step 7 except in the `java/bukkit_command` folder
11. **Your server is now ready.** Download and open [stable-download/Offline_Download_Version.html](https://github.com/lax1dude/eaglercraft/raw/main/stable-download/Offline_Download_Version.html)
12. Go to 'Multiplayer' from the main menu. Select 'Direct Connect', type `127.0.0.1:25565` and press 'Join Server'
13. **It should allow you to connect, if not, check the two terminal windows for errors**
14. If you are okay with regularly checking for updates to [Offline_Download_Version.html](https://github.com/lax1dude/eaglercraft/raw/main/stable-download/Offline_Download_Version.html), you are now finished
15. If you are playing with friends and want a shared website that can be updated, see the `stable-download/web` folder
16. To install, create a website and upload the contents of `stable-download/web` to the URL you want to have Eaglercraft on
17. **The 'web' folder will not work if you open it in your browser locally! If you see 'file:///' in the URL you are doing it wrong. You need to upload the folder to an HTTP or HTTPS server and access it over the internet via http:// or https://. The game will not load otherwise, this is not a bug**
18. To modify the list of default servers, modify the `window.eaglercraftOpts` variable in `index.html`. 
19. **A full guide on how to configure `eaglercraftOpts` is coming soon, but it should be fairly intuitive to figure out how to set it up based on what the default values already are when you look in stable-download**
20. **To create a link to your site that automatically joins the server,** add a `?server=` variable to the URL, like (for example): [https://g.deev.is/eaglercraft/?server=127.0.0.1:25565](https://g.deev.is/eaglercraft/?server=127.0.0.1:25565) will automatically join `ws://127.0.0.1:25565/` as soon as the player finishes setting their username and skin
21. To change your server's MOTD and icon, edit the `motd1:` tag of the listener config in `java/bungee_command/config.yml`, and replace `server-icon.png` in the folder where the config file is. Use `&` to add color/formatting codes. The server list will downscale your icon to 64x64 pixels
22. You can give your MOTD multiple lines, add a `motd2:` to define a second line
23. **For an animated MOTD and icon, install EaglerMOTD: [https://github.com/lax1dude/eaglercraft-motd/](https://github.com/lax1dude/eaglercraft-motd/)**
24. To add some bukkit plugins, download the plugin's JAR file for CraftBukkit 1.5.2 and place it in `java/bukkit_command/plugins`
25. To add some bungee plugins, download the plugin's JAR file and place it in `java/bungee_command/plugins`
26. See [https://github.com/lax1dude/eaglercraft-plugins/](https://github.com/lax1dude/eaglercraft-plugins/) to download some supported plugins
27. **To disable voice chat, set `voice_enabled: false` in the bungeecord config.yml**
28. To add `/login` and `/register`, install [AuthMe](https://github.com/lax1dude/eaglercraft-plugins/tree/main/AuthMe) and carefully [read it's documentation](https://github.com/AuthMe/AuthMeReloaded/wiki) to set it up correctly
29. **To ban a username on Eaglercraftbungee, use:** `eag-ban <username>`
30. **To ban an IP on Eaglercraftbungee, use:** `eag-ban-ip <ip>`, or `eag-ban-ip <name>` to ban the IP of a player automatically
31. To ban a range of IP addresses, use slash notation to define a subnet. Example: `eag-ban-ip 192.168.0.0/8`
32. To ban users by wildcard (\*) use: `eag-ban-wildcard <text>*` or `eag-ban-wildcard *<text>` or `eag-ban-wildcard *<text>*`
33. **You can edit bans.txt in your EaglercraftBungee folder, the server automatically reloads the file when it is saved**
34. To ban users by regular expression, use: `eag-ban-regex <regex>` with a regular expression to match the username in **lowercase**
35. **If you use /op on your server, keep in mind that if you "/op LAX1DUDE", a player joining as 'laX1DUDE' or 'LaX1dUdE' or 'lax1dude' will all have /op too. To solve this problem, force all operators to only be able to join with all lowercase ('lax1dude') letters in their usernames by moving 'BitchFilterPlugin.jar" into "java/bukkit_command/plugins" and then register every op username lowercase**
36. To connect to your server through a `ws://` or `wss://` URL instead of `ip:port`, set up [nginx](https://nginx.org/) as a reverse proxy to the `ip:port` of you EaglercraftBungee server you want the URL to connect to. Use a location URL template with the `proxy_pass` directive.
37. Eaglercraft uses port 80 for IP connections by default, typing `127.0.0.1` is the same as typing `ws://127.0.0.1:80/`
38. To forward a client's remote IP address from a request on nginx to EaglercraftBungee for enforcing IP bans, set the `X-Real-IP` header on the request to websocket when it is proxied
39. To make a custom resource pack for your site, clone this repository and edit the files in [lwjgl-rundir/resources](https://github.com/lax1dude/eaglercraft/tree/main/lwjgl-rundir/resources).
40. When you are done, navigate to [epkcompiler/](https://github.com/lax1dude/eaglercraft/tree/main/epkcompiler) and double-click `run.bat`. Wait for the window to say `Press any key to continue...` and close it. Then, go to `../javascript` in the repository and copy `javascript/assets.epk` to the `assets.epk` on your website
41. If you're on mac or linux, navigate to the epkcompiler folder via `cd` and run `chmod +x run_unix.sh` and then `./run_unix.sh` to do this, then copy the same `javascript/assets.epk` to the `assets.epk` on your website

## EaglercraftBungee

EaglercraftBungee translates WebSockets to a raw Minecraft 1.5.2 TCP connection. It is just regular BungeeCord with more `config.yml` options, and a built in plugin for syncing people's custom skins between clients so people can see each other's skins

### If voice chat causes moderation problems, set `voice_enabled: false` in config.yml

**To enable the /login and /register commands in EaglercraftBungee, you can edit this portion of config.yml**

```yaml
authservice:
  enabled: false
  register_enabled: true
  authfile: auths.db
  ip_limit: 0
  join_messages:
  - '&3Welcome to my &aEaglercraftBungee &3server!'
  login_timeout: 30
```

- `enable` Turns login commands on and off

- `register_enabled` Turns register command on and off

- `authfile` Sets the authentication database file, which is **compatible with AuthMe**

- `ip_limit` Sets the max number of registrations per IP, 0 = unlimited

- `join_messages` List of messages to show the player when they join

- `login_timeout` Sets how many seconds players have to log in before they are kicked

**EaglercraftBungee has a built in domain blacklist that updates automatically, you can disable it by setting this in config.yml:**

```yaml
enable_web_origin_blacklist: false
```

**To block all clients on replit from joining, set this to true in config.yml:**

```yaml
origin_blacklist_block_replit_clients: true
```

**To block all offline-download clients, set this to true in config.yml:**

```yaml
origin_blacklist_block_offline_download: true
```

**To block the debug runtime (or other desktop clients), set this to true in config.yml:**

```yaml
origin_blacklist_block_missing_origin_header: true
```

**To add your own blacklisted domains**, create a file called `origin_blacklist.txt` in your bungeecord directory and put the regular expressions inside, one on each line. There 's also a `domain` command in the console to view a player's domain, and a `block-domain` and `block-domain-name` and `unblock-domain` command to manage the local `origin_blacklist.txt` from the bungee console (if you don't know how to edit a file on your own). The list reloads automatically when changes to the file are detected.

### To configure bungee to block connections from all clients except your own, set this option:

```yaml
origin_blacklist_use_simple_whitelist: true
```

### Then, add your domain to `origin_blacklist_simple_whitelist` like this:

```yaml
origin_blacklist_simple_whitelist:
- type the name of your client's domain here
```

### Then, unless still you want it as an option for your players, disable the offline download so hackers don't use it to bypass the whitelist, as it is not blocked in whitelist mode by default:

```yaml
origin_blacklist_block_offline_download: true
```

### To stop people from using bookmarklets to load a client from a different URL onto your official URL via XXS, add these headers to NGINX:

```
add_header X-Frame-Options "SAMEORIGIN";
add_header Referrer-Policy "strict-origin";
add_header X-XSS-Protection "1; mode=block";
add_header Content-Security-Policy "default-src 'self' 'unsafe-inline'; img-src 'self' 'unsafe-inline' data: blob:; connect-src 'self' ws: wss:; upgrade-insecure-requests";
```

(not fully tested, excuse the scroll bar)

### To use IP bans and rate limiting, enable `forward_ip` and pass a X-Real-IP header from your proxy to the bungeecord's websocket port

Nginx example: add `proxy_set_header X-Real-IP $remote_addr` to your proxy configuration

**The server has built in DoS protection, reset it via typing 'eag-ratelimit reset' in the bungee console**

```yaml
ratelimit:
  ip:
    enable: true
    period: 90
    limit: 60
    limit_lockout: 80
    lockout_duration: 1200
    exceptions: []
```

- `enable` enable rate limiting

- `period` and `limit` set the number of requests (`limit`) can be made in (`period`) number of seconds

- `limit_lockout` and `lockout_duration` set the number of requests (`limit_lockout`) that can be made in (`period`) seconds before the IP is blocked for `lockout_duration` number of seconds

- `exceptions` a list of IP addresses that should never get rate limited. **Local IPs like 127.0.0.1 and 192.168.\*.\* and such are set as exceptions by default**

**you need `forward_ip` configured to use rate limiting, otherwise it will be disabled by default**

### Redirecting the client to a new WebSocket

If you would like to signal the client to disconnect from your bungeecord and reconnect to a different bungeecord, configure an entry in the `servers` part of config.yml like this:

```yaml
test:
  redirect: wss://ServerHere/
  restricted: false
```

In this example, sending a player to the server `test`, such as when they enter a portal or type `/server test`, will trigger their client to disconnect from your bungeecord and then automatically reconnect to `wss://ServerHere/` as if it was entered via "Direct Connect"

### Plugin Development

**To develop a plugin, download [stable-download/java/bungee_command/bungee_dist.jar](https://github.com/lax1dude/eaglercraft/blob/main/stable-download/java/bungee_command/bungee-dist.jar) and add it to the Build Path of your Java IDE. Develop the plugin just like a regular BungeeCord plugin, see [EaglerMOTD](https://github.com/lax1dude/eaglercraft-motd/) for an example.**

**Test your plugin by exporting it as a jar and putting it in the '/plugins' directory of EaglercraftBungee and then clicking 'run.bat'**

### New Events:

- **[net.md_5.bungee.api.event.WebsocketMOTDEvent](https://github.com/lax1dude/eaglercraft/blob/main/eaglercraftbungee/src/main/java/net/md_5/bungee/api/event/WebsocketMOTDEvent.java)**: Triggered when a client or website requests the MOTD

- **[net.md_5.bungee.api.event.WebsocketQueryEvent](https://github.com/lax1dude/eaglercraft/blob/main/eaglercraftbungee/src/main/java/net/md_5/bungee/api/event/WebsocketQueryEvent.java)**: Triggered when a client or website requests a query. This happens when a site opens a text WebSocket to a listener and sends a single string `Accept: <query>` packet. Can be used to provide additional custom statistics to server list sites supporting integrated WebSocket queries

**Register event handlers using the standard BungeeCord** `@EventHandler` **annotation in your** `Listener` **class**

## Hosting a LAN server relay

### Simply download [stable-download/sp-relay.jar](https://github.com/lax1dude/eaglercraft/blob/main/stable-download/sp-relay.jar) and run `java -jar sp-relay.jar`

**Run `java -jar sp-relay.jar --debug` to view debug info like all the IPs of incoming connections, as it is not shown by default because logging all that info will reduce performance when the relay is being pinged many times a second depending on it's popularity.**

Edit the `relayConfig.ini` file generated on first launch to change the port and configure ratelimiting and such, and `relays.txt` to change the list of STUN and TURN relays reported to clients connecting to the relay, which are required to correctly establish a P2P LAN world connection in browsers

**The `origin-whitelist` config variable is a semicolon (`;`) seperated list of domains used to restrict what sites are to be allowed to use your relay. When left blank it allows all sites. Add `offline` to allow offline download clients to use your relay as well, and `null` to allow connections that do not specify an `Origin:` header. Use `*` as a wildcard, for example: `*.deev.is` allows all domains ending with "deev.is" to use the relay.**

## Compiling

To compile for the web, run the gradle 'teavm' compile target to generate the classes.js file.

To complile to regular desktop Java for quick debugging, using native OpenGL for rendering instead of WebGL:
- Create a new empty eclipse project
- Link the src/main/java and src/lwjgl/java as source folders and add the jars in lwjgl-rundir as dependencies
- Create a run configuration and add a jvm argument pointing to the lwjgl natives folder (lwjgl-rundir/natives) like this: `-Djava.library.path=natives`, and make sure the working directory for the run configuration is the lwjgl-rundir folder.


**To modify the game's resource pack (javascript/assets.epk), view the readme in the [/epkcompiler](https://github.com/lax1dude/eaglercraft/tree/main/epkcompiler) directory**

## Contributing

All I really have to say is, tabs not spaces, and format the code to be like the eclipse auto format tool on factory settings, but also run-on lines of code long enough to go off the screen and single line if statements and other format violations in that category are welcome if it helps enhance the contrast between the less important code and the more important code in a file. Don't commit changes to `javascript/classes.js` or `javascript/classes_server.js` or `javascript/assets.epk` or anything in `stable-download/`. I'll recompile those myself when I merge the pull request.
