#!/bin/sh

set -e

pnpm build

cd dist/linehub

yalc push

cd ../../play

pnpm uninstall linehub
yalc remove linehub
yalc add linehub
pnpm i linehub

echo "Publish completed"
