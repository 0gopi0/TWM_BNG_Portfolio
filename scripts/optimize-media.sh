#!/usr/bin/env bash
# Builds a web-optimized copy of a media folder.
#   Videos (.mp4)        -> 720p H.264, CRF 26, faststart
#   Images (.png/.jpg)   -> WebP, height capped at 1350px (1280px for video poster frames)
#   Everything else      -> copied as-is (favicons, svg, ...)
# Usage: scripts/optimize-media.sh <source-dir> <output-dir>
set -euo pipefail

SRC=${1:?source dir}
OUT=${2:?output dir}

find "$SRC" -type f -print0 | while IFS= read -r -d '' f; do
  rel=${f#"$SRC"/}
  dir="$OUT/$(dirname "$rel")"
  base=$(basename "$rel")
  mkdir -p "$dir"

  case "${base,,}" in
    *.mp4)
      echo "video  $rel"
      ffmpeg -nostdin -v error -y -i "$f" \
        -vf "scale=-2:'min(1280,ih)'" -c:v libx264 -crf 26 -preset slow -pix_fmt yuv420p \
        -c:a aac -b:a 128k -movflags +faststart "$dir/$base"
      ;;
    *.png | *.jpg | *.jpeg)
      # Site icons stay in their original format; browsers expect them as-is.
      if [[ "$rel" != */* ]]; then cp "$f" "$dir/$base"; continue; fi
      height=1350
      [[ "$rel" == */_video_posters/* ]] && height=1280
      echo "image  $rel"
      magick "$f" -resize "x${height}>" -quality 85 -define webp:method=6 "$dir/${base%.*}.webp"
      ;;
    *)
      cp "$f" "$dir/$base"
      ;;
  esac
done
