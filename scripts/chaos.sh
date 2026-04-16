#!/usr/bin/env bash
set -euo pipefail

CONTAINER="checkflix-pg"
IMAGE="postgres:16-alpine"
PORT=5432

usage() {
  cat <<EOF
Usage: scripts/chaos.sh <command>

Commands:
  up          Start Postgres on :${PORT} (TCP monitor goes green)
  break-db    Stop Postgres (TCP monitor goes red, web checks stay green)
  heal        Restart Postgres (TCP monitor recovers)
  down        Stop and remove the container
  status      Show container state and listening port
EOF
}

cmd="${1:-}"
case "$cmd" in
  up)
    if docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER}$"; then
      docker start "$CONTAINER" >/dev/null
    else
      docker run -d --name "$CONTAINER" -p "${PORT}:${PORT}" \
        -e POSTGRES_PASSWORD=demo "$IMAGE" >/dev/null
    fi
    echo "Postgres up on :${PORT}"
    ;;
  break-db)
    docker stop "$CONTAINER" >/dev/null
    echo "Postgres stopped — TCP monitor will fail, HTTP/browser checks still pass"
    ;;
  heal)
    docker start "$CONTAINER" >/dev/null
    echo "Postgres restarted — TCP monitor will recover"
    ;;
  down)
    docker rm -f "$CONTAINER" >/dev/null 2>&1 || true
    echo "Postgres removed"
    ;;
  status)
    docker ps -a --filter "name=^${CONTAINER}$" \
      --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'
    ;;
  *)
    usage
    exit 1
    ;;
esac
