# PWA Workshop
This contains the repositorys needed for the exercises of the PWA workshop by Leon Möller. Please use the branches to do the exercises. Each branch also has a solution branch in case you're stuck.
## First setup
I recommend using a local IDE like WebStorm or Visual Studio Code to do this exercises. Anyway you don't have any access from cloud IDEs to Inwerken's internal GitLab. A workaround is to clone this repo locally and change the remote to GitHub.com or GitLab.com and clone from there again for example.
1. Make sure you have access right to this repository.
2. Check for you npm installation with ``npm -v`` and if there's nothing install it before continuing.
3. Clone this repository with ``git clone <current url from your adress bar>``.
4. Fetch all branches with ``git fetch``.
5. Start with the first exercise and use ``git checkout simple`` to change your local branch from ``main`` to ``simple``.
6. After finishing the first exercise you can check your results against the solution branch with ``git checkout simple-solution``.
7. Repeat the same for the remaining exercises starting at step 4.
## Branches
Overview of this repository's relevant branches:

| Branch      | Description |
| ----------- | ----------- |
| simple | Exercise 1: Very basic PWA |
| simple-solution | Exercise 1: Solution |
| workbox | Exercise 2: PWA + Google Workbox |
| workbox-solution | Exercise 2: Solution |
| advanced | Exercise 3: PWA with SAP UI5 + Google Workbox |
| advanced-solution | Exercise 3: Solution |

## Finishing the workshop
If you want to save your work you can change the remote of your local repository with ``git remote add <your newly created repo on Github or GitLab>`` and then push your work to your own repository.

