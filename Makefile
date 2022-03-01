.PHONY: setup clean build docs storybook ci

SHELL := /bin/bash
PATH := ./node_modules/.bin:$(HOME)/bin:$(PATH)
MAKE := make

clean:
	rm -rf yarn.lock coverage/ dist/ public/ node_modules/ **/__snapshots__/ apps/**/.cache/
	bit clear-cache
	yarn cache clean

setup:
	yarn install
	prisma generate
	echo "[production]" > .browserslistrc
	npx browserslist '> 0.5%, not IE 11' >> .browserslistrc


build:
	@echo "~~~> Build home bundle..."
	nx build home --prod --verbose

docs:
	yarn depcruise --output-type dot --output-to docs/depgraph.dot --prefix "https://github.com/drkstr101/waweb/blob/main/"
	cat docs/depgraph.dot | dot -T svg > docs/depgraph.svg.tmp
	mv docs/depgraph.svg.tmp docs/depgraph.svg

storybook:
	nx build-storybook screenplay

chromatic:
	chromatic --ci --project-token=e9e32607e17a --storybook-build-dir dist/storybook

ci:
	prisma generate
	nx format
	nx run-many --all --target lint
	nx run-many --all --target test --coverage --detectOpenHandles=true --u=true
	nx run-many --all --target build --prod
# TODO fix storybook builds
#	$(MAKE) storybook
#	$(MAKE) chromatic


