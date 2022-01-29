.PHONY: setup clean test lint build assemble docs

SHELL := /bin/bash
PATH := ./node_modules/.bin:$(HOME)/bin:$(PATH)

clean:
	rm -rf yarn.lock coverage dist public node_modules **/__snapshots__

setup:
	@echo "~~~> Set up bit installer..."
	npm install --global @teambit/bvm

	@echo "~~~> Install bit..."
	bvm install latest

	@echo "~~~> Setup local workspace..."
	bit config set analytics_reporting false
	bit init --harmony

	@echo "~~~> Install dependencies..."
	bit install

	@echo "Setup complete."
	@echo "Be sure to add the ${HOME}/bin dir to your system path."


build:
	@echo "~~~> Build home bundle..."
	prisma generate --schema libs/model/schema.prisma
	nx build home --prod

docs:
	yarn depcruise --output-type dot --output-to docs/depgraph.dot --prefix "https://github.com/watheia/next-mfe-starter/blob/main/"
	cat docs/depgraph.dot | dot -T svg > docs/depgraph.svg.tmp
	mv docs/depgraph.svg.tmp docs/depgraph.svg

