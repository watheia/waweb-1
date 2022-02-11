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


build:
	@echo "~~~> Build home bundle..."
	nx build home --prod --verbose --skip-nx-cache

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
	nx run-many --all --target test --coverage --detectOpenHandles
	nx run-many --all --target build --prod
# TODO remove exclude when refactor complete
	$(MAKE) storybook
	$(MAKE) chromatic


