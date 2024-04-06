#!/bin/bash

# Directory setup for JIRA entities
JIRA_PATH="./paths/jira"
COMPONENTS_PATH="./components/schemas"

# Check if JIRA paths directory exists, if not create it
if [ ! -d "$JIRA_PATH" ]; then
  mkdir -p "$JIRA_PATH"
fi

# Check if components schema directory exists, if not create it
if [ ! -d "$COMPONENTS_PATH" ]; then
  mkdir -p "$COMPONENTS_PATH"
fi

# List of new entities to create YAML files for
entities=("Dashboards" "Issues" "Projects" "Screens" "Status" "Tasks" "Users")

for entity in "${entities[@]}"
do
  # Create path YAML if it does not exist
  if [ ! -f "$JIRA_PATH/${entity,,}.yaml" ]; then
    echo "Creating YAML for $entity in paths..."
    cat << EOF > "$JIRA_PATH/${entity,,}.yaml"
paths:
  /jira/${entity,,}:
    get:
      summary: "Add your summary here"
      description: "Add a detailed description here"
EOF
  fi

  # Create schema YAML if it does not exist
  if [ ! -f "$COMPONENTS_PATH/${entity}.yaml" ]; then
    echo "Creating YAML for $entity in components/schemas..."
    cat << EOF > "$COMPONENTS_PATH/${entity}.yaml"
${entity}:
  type: object
  properties:
    example:
      type: string
      description: "This is an example property."
EOF
  fi
done

echo "YAML file creation complete."
