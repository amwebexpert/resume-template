@echo off
echo ------------------------------------------------------------------------------
echo ng build --prod
echo ------------------------------------------------------------------------------
call ng build --prod

echo "Removing all files from target"
del /q \DONNES~1\AMWEBE~2\*.css
del /q \DONNES~1\AMWEBE~2\*.js
del /q \DONNES~1\AMWEBE~2\*.html

echo "Copying all files from \dist"
copy .\dist\*.css \DONNES~1\AMWEBE~2\
copy .\dist\*.js \DONNES~1\AMWEBE~2\
copy .\dist\*.html \DONNES~1\AMWEBE~2\

echo ------------------------------------------------------------------------------
echo "Done."
echo ------------------------------------------------------------------------------
