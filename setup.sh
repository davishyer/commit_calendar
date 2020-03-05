#!/usr/bin/env bash

if [ ! -f ./scripts/config/config.json ]; then
  echo "Creating starter config..."
  cp scripts/config/config.json.example scripts/config/config.json
  echo "Success! Edit your config at ./scripts/config/config.json"
else
  echo "Your config already exists, nothing to set up!"
fi
