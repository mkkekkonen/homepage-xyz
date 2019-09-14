#!/bin/bash

mv ../mkkekkonen.github.io/*.js ../mkkekkonen.github.io/old/
mv ../mkkekkonen.github.io/*.js.map ../mkkekkonen.github.io/old/
mv ../mkkekkonen.github.io/*.html ../mkkekkonen.github.io/old/

cp ./dist/* ../mkkekkonen.github.io/
cp ./public/* ../mkkekkonen.github.io/

cd ../mkkekkonen.github.io/

git add -A
git commit

read -p "About to push. Continue (y/n)?" CONT
if [ "$CONT" = "y" ]; then
  git push
else
  echo "Aborted"
fi
