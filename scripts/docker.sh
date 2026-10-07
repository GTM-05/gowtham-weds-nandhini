#!/bin/sh
set -eu
cd "$(dirname "$0")/.."
export HOST_UID="$(id -u)"
export HOST_GID="$(id -g)"

if [ "${1:-}" = "up" ]; then
  shift
  exec docker compose up "$@"
fi

exec docker compose run --rm --service-ports web "$@"
