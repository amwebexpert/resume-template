echo -----------------------------------------------------------------------------------------------------
echo ng build --configuration production --base-href /resume-template --deploy-url /resume-template
echo -----------------------------------------------------------------------------------------------------
npx ng build --configuration production --base-href /resume-template --deploy-url /resume-template

echo ------------------------------------------------------------------------------
echo "copying ./dist content ===> ./docs folder ..."
echo ------------------------------------------------------------------------------
cp -R ./dist/ ./docs

echo ------------------------------------------------------------------------------
echo "adding (and pushing) new ./docs file changes to current branch"
echo ------------------------------------------------------------------------------
git add .
#git commit -m"docs: new online web release"
#git push

echo ------------------------------------------------------------------------------
echo "Done."
echo ------------------------------------------------------------------------------
