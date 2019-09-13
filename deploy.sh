#!/bin/bash

mv ../mkkekkonen.github.io/*.js ../mkkekkonen.github.io/old/
mv ../mkkekkonen.github.io/*.js.map ../mkkekkonen.github.io/old/
mv ../mkkekkonen.github.io/*.html ../mkkekkonen.github.io/old/

cp ./dist/* ../mkkekkonen.github.io/
