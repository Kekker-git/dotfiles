#!/bin/sh

main() {
  if ! pgrep -x mopidy >/dev/null; then
    echo ""; exit
  fi

  meta=$(ncmpcpp --current-song="%A - %t")

  echo "$meta"
}

main "$@"
