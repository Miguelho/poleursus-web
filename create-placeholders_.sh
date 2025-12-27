#!/bin/bash

# Script to create placeholder images for Poleursus Web
# Requires ImageMagick: brew install imagemagick (macOS) or apt-get install imagemagick (Ubuntu)

echo "🎨 Creating placeholder images..."

# Create directories
mkdir -p public/images/pulse

# Colors
PRIMARY_COLOR="#0ea5e9"
NEUTRAL_COLOR="#f5f5f5"
TEXT_COLOR="#262626"

# Create OG images (1200x630)
echo "Creating OG images..."
convert -size 1200x630 xc:$PRIMARY_COLOR -pointsize 80 -fill white -gravity center \
  -annotate +0+0 "Poleursus" public/images/og-image.png

convert -size 1200x630 xc:$PRIMARY_COLOR -pointsize 80 -fill white -gravity center \
  -annotate +0-50 "Pulse" -pointsize 40 -annotate +0+50 "Entrena tu concentración" \
  public/images/pulse/og-pulse.png

# Create screenshots (750x1624)
echo "Creating screenshot placeholders..."
for i in 1 2 3 4 5 6; do
  convert -size 750x1624 xc:$NEUTRAL_COLOR -pointsize 60 -fill $TEXT_COLOR -gravity center \
    -annotate +0-100 "Pulse" -pointsize 30 -annotate +0+0 "Screenshot $i" \
    -annotate +0+100 "Placeholder" public/images/pulse/screenshot-$i.png
done

# Create favicon (32x32)
echo "Creating favicon..."
convert -size 32x32 xc:$PRIMARY_COLOR public/favicon.ico

# Create apple-touch-icon (180x180)
echo "Creating apple-touch-icon..."
convert -size 180x180 xc:$PRIMARY_COLOR -pointsize 100 -fill white -gravity center \
  -annotate +0+0 "P" public/apple-touch-icon.png

# Create PWA icons
echo "Creating PWA icons..."
convert -size 192x192 xc:$PRIMARY_COLOR -pointsize 120 -fill white -gravity center \
  -annotate +0+0 "P" public/icon-192.png

convert -size 512x512 xc:$PRIMARY_COLOR -pointsize 320 -fill white -gravity center \
  -annotate +0+0 "P" public/icon-512.png

echo "✅ Placeholder images created successfully!"
echo ""
echo "Created files:"
echo "  - public/images/og-image.png"
echo "  - public/images/pulse/og-pulse.png"
echo "  - public/images/pulse/screenshot-{1-6}.png"
echo "  - public/favicon.ico"
echo "  - public/apple-touch-icon.png"
echo "  - public/icon-192.png"
echo "  - public/icon-512.png"
echo ""
echo "ℹ️  These are temporary placeholders. Replace with real assets when available."
