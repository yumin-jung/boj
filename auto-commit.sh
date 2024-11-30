#!/bin/bash

cd ~/boj

declare -A file_groups

while read -r status file; do
    folder=$(dirname "$file" | cut -d'/' -f1)
    filename=$(basename "$file" | sed 's/\.[^.]*$//')

    file_groups["$folder"]+="$filename "
done < <(git status --porcelain)

commit_message=""

for folder in "${!file_groups[@]}"; do
    case "$folder" in
        node)
            commit_message+="node.js ${file_groups[$folder]} "
            ;;
        rust)
            commit_message+="rust ${file_groups[$folder]} "
            ;;
        *)
            commit_message+="update $folder/${file_groups[$folder]} "
            ;;
    esac
done

commit_message=$(echo "$commit_message" | xargs)

if [[ -n "$commit_message" ]]; then
    git add .
    git commit -m "$commit_message"
    git push origin main
fi