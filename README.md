# suricata-hubot

suricata-hubot is a stupidly simple hubot instance that tails the `/var/log/suricata/fast.log`.
I wrote it to send alerts to IRC.

For IRC use:

    npm install
    export HUBOT_IRC_SERVER=irc.freenode.net
    export HUBOT_IRC_ROOMS="#whatever"
    export HUBOT_IRC_NICK="myhubotname"
    export HUBOT_IRC_UNFLOOD="true"
    bin/hubot -a irc

Bot commands:

* `start` - Starts tailing the log
* `stop` - Stops tailing
* `status` - Are you doing tailing?


