#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
PS1='[\u@\h \W]\$ '

alias ls='ls --color'
LS_COLORS='di=96;100:fi=92'
export LS_COLORS

if [ ! $DISPLAY ] ; then
    if [ "$SSH_CLIENT" ] ; then
        export DISPLAY=`echo $SSH_CLIENT|cut -f1 -d\ `:0.0
    fi
fi
