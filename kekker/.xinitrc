#!/bin/sh
#

export GTK2_RC_FILES="$HOME/.gtkrc-2.0"

[[ -f ~/.Xresources ]] && xrdb -merge -I$HOME ~/.Xresources

# disable sleep
xset dpms 0 0 0 &       # disable DPMS (Energy Star) features.
xset s off -dpms &      # don't activate screensaver

# window manager
exec i3

