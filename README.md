# resume-template

Responsive resume template for developers, supporting mobile, tablet and desktop devices.
Added support for English and French languages using `ngx-translate`.

Technologies:

- Angular 13.x
- ngx-translate for i18n
- Bootstrap 5.x
- Typescript 4.x

# Live demo available

* http://amwebexpert.users.sourceforge.net/


# Update, Build and deploy

First thing to do before you forget: update `AppConstants.DATE` value to the current date. Also update pages as required. Then you produce the production build by launching this script:

    `./build.sh`

This will:

- build for production
- copy the whole `dist/` folder content to the `docs/` folder
- run source control commands: `git` `add`, `commit` and `push`

Wait for Github Pages to be ready, then the resume will be available online at this address:

- https://<your-github-account-id>.github.io/resume-template
- Example: https://amwebexpert.github.io/resume-template

# License

This project is licensed under the Apache 2.0 license. For more information see `LICENSE.md`.

## Setup Volt Free - Bootstrap 5 Dashboard

This project has been bootstraped using the excellent Volt admin templates. Volt online demo: https://demo.themesberg.com/volt/pages/dashboard/dashboard.html

To use the open source version of Volt, just follow instructions here:

* https://github.com/themesberg/volt-bootstrap-5-dashboard#theme-without-sass-gulp-or-npm

Then copy folders of `html&css` folders (css, vendor, img) into `resume-template/src/assets/`
