---
title: 'Simple Shell Script for Automating Github Push'
date: '2022-04-01'
categories: ['shell', 'bash', 'github']
summary: 'Simple shell script to automate manage files and to push to Github'
thumbnail: './ilya-pavlov-OqtafYT5kTw-unsplash.jpg'
---

This is a post about automating github push command written in bash shell script. This example is based on my github repo, which is for archiving coding problems/solutions.

My repository has a structure like below:

```
└── problem_category_1
    ├── problem_1
    │   └── Problem.md
    │   └── problem_1.js
    ├── problem_2
    │   └── Problem.md
    │   └── problem_2.js
    │    
    problem_category_2
    ├── problem_1
    │   └── Problem.md
    │   └── problem_1.js
    └── problem_2
        └── Problem.md
        └── problem_2.js
```

If I want to solve a problem, I have to create a `problem` directory under `problem_category` and then create `Problem.md` and `problem.js` under `problem`. Also, if `problem_category` doesn't exist, i.e. I want to solve a new category of problems, I have to add a `problem_category` directory first. And this is how it works:


```sh
# Find the problem type
echo "Enter the type of the problem:"

# Show the list of the directories
ls -d */

# Read the input
read pType

if [ ! -d "$pType" ]; then
  # Control will enter here if $DIRECTORY doesn't exist.
  mkdir "$pType"
  echo "$pType folder is created"
fi

# # Print the statement
echo "Enter the name of the problem you want to solve:"

# Read the input "problem'
read problem

# Replace spaces with underscores
problem=${problem// /_}

# # Create a directory for the problem
mkdir "$pType/$problem"

# # Create problem.md and the js file.
touch "$pType/$problem/Problem.md"

touch "$pType/$problem/$problem.js"
```

Each time you create a script file and try to run it, you will encounter a message saying that the permission to execute the file is denied. To fix this, you have to give permission to this script file:

```
# +x grants permission to execute
chmod +x your_script_file
```

Now, I just have to type the name of the `problem_type` directory and the name of the `problem` that I am going to solve. Hope this helps!
