## Code for the Gestalt vs IC melodies experiment  

#### Melody generation: 
All materials related to melody generation are under the `melody_generation` folder.
Guide and demo in the `melody_generation.ipynb`. Running the notebook requires the tonic pitch and number of melodies to be specified and generates `MIDI` files which and some analysis figures. `MIDI` can be converted to `mp3` by running `convert_to_mp3.sh` in the command line. 

#### Online experiment
The source code for the online experiment materials are in the `experiment_scripts` folder. The experiment can be run in a browser.The `experiment_stimuli` folder contains files for different tonic conditions (see `stimuli_examples` for examples). 

#### Data analysis
The `data_analysis` folder contains preprocessed data and analysis scripts.
Preprocessed data for running mixed effects models was generated using 
`data_analysis_final.ipynb` and is available in `fc_accent_regression.csv` for the accent forced choice task and `fc_IC_regression.csv` for the IC forced choice task. Mixed effects models were run in `mixed_effects.ipynb`. Comparisons between models are performed in `model_comparisons.ipynb`.

Requirements: `environment.yml`.