.PHONY: setup clean test lint build assemble docs

SHELL := /bin/bash
PATH := ./node_modules/.bin:$(HOME)/bin:$(PATH)

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
	yarn depcruise --output-type dot --output-to docs/depgraph.dot --prefix "https://github.com/drkstr101/watheia/blob/main/"
	cat docs/depgraph.dot | dot -T svg > docs/depgraph.svg.tmp
	mv docs/depgraph.svg.tmp docs/depgraph.svg

