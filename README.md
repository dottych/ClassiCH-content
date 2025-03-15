# ClassiCH-content
Generations and custom blocks for ClassiCH.

###### Note: For the main repository, go to https://github.com/dottych/ClassiCH

## Generations
A generation is a JavaScript file containing code that decides how the world will look like.  
They belong in: `/server/generations/`  

### For developers:
You may use blocks from CPE support levels as you wish, but you may not use custom blocks
unless it is a setting that people can change, preferably with a custom block toggle and configurable IDs.  
Additionally, there is a CPE flag in the super constructor that you can enable if your generation is strictly CPE only.

## Blocks
Blocks are a JavaScript file containing a definition of how a custom block should look and act like.  
They belong in: `/server/blocks/`  

### For developers:
For custom blocks, use ID 0. People can change it accordingly, so that it doesn't intersect with their other block IDs, etc.
