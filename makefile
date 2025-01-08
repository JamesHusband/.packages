# =============================================================================
#  Packages Makefile
# =============================================================================

.PHONY: help install clean build test lint publish-dry publish

# Default target when just running 'make'
.DEFAULT_GOAL := help

# Colors for terminal output
BLUE := \033[36m
GREEN := \033[32m
YELLOW := \033[33m
RESET := \033[0m

# Help command to list all available targets
help: ## Show this help
	@echo "$(BLUE)Development Commands:$(RESET)"
	@echo "$(GREEN)make install$(RESET)      - Install all dependencies"
	@echo "$(GREEN)make clean$(RESET)        - Clean build artifacts and dependencies"
	@echo "$(GREEN)make build$(RESET)        - Build affected packages"
	@echo "$(GREEN)make test$(RESET)         - Run affected tests"
	@echo "$(GREEN)make lint$(RESET)         - Run affected linting"
	@echo "$(GREEN)make publish-dry$(RESET)  - Run a dry-run of package publishing"
	@echo "$(GREEN)make publish$(RESET)      - Publish affected packages to GitHub Packages"

# Install dependencies
install: ## Install all dependencies
	@echo "$(BLUE)Installing dependencies...$(RESET)"
	npm install

# Clean build artifacts and dependencies
clean: ## Clean build artifacts and dependencies
	@echo "$(BLUE)Cleaning project...$(RESET)"
	rm -rf node_modules
	rm -rf dist
	npx nx reset

# Build affected packages
build: ## Build affected packages
	@echo "$(BLUE)Building affected packages...$(RESET)"
	npx nx affected --target=build

# Run affected tests
test: ## Run affected tests
	@echo "$(BLUE)Running affected tests...$(RESET)"
	npx nx affected --target=test

# Run affected linting
lint: ## Run affected linting
	@echo "$(BLUE)Running affected linting...$(RESET)"
	npx nx affected --target=lint

# Run a dry-run of package publishing
publish-dry: ## Run a dry-run of package publishing
	@echo "$(BLUE)Running publish dry-run...$(RESET)"
	@echo "$(YELLOW)This will show what would be published without actually publishing$(RESET)"
	npx nx affected --target=build
	npx nx show projects --affected

# Publish affected packages
publish: ## Publish affected packages to GitHub Packages
	@echo "$(BLUE)Publishing affected packages...$(RESET)"
	@echo "$(YELLOW)Make sure you have created a new release tag before running this command$(RESET)"
	@read -p "Enter the version to publish (e.g., 0.0.1): " version; \
	npx nx affected --target=nx-release-publish --ver=$$version