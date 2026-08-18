DOCS_DIR := docs
HOST ?= 127.0.0.1
PORT ?= 4000
BUNDLE := BUNDLE_PATH=vendor/bundle bundle

.PHONY: install serve

install:
	cd $(DOCS_DIR) && $(BUNDLE) install

serve:
	cd $(DOCS_DIR) && $(BUNDLE) check >/dev/null 2>&1 || $(BUNDLE) install
	cd $(DOCS_DIR) && $(BUNDLE) exec jekyll serve --host $(HOST) --port $(PORT) --livereload
