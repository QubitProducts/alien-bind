.PHONY: bootstrap test

BIN = ./node_modules/.bin

bootstrap:
	@npm install

test: bootstrap
	@$(BIN)/standard
	@./node_modules/karma/bin/karma start --single-run=true
