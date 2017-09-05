@echo off
echo ------------------------------------------------------------------------------
echo ng build --prod
echo ------------------------------------------------------------------------------
call ng build --prod

echo "copy all file from C:\Dev\resume-template\dist and paste them to destination"
rem xcopy C:\Dev\resume-template\dist\ C:\DONNES~1\AMWEBE~2\ /O /X /E /H /K

