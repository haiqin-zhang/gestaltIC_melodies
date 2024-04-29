#CHANGE THE CONDITION TO MATCH THE CONDITION USED IN MELODY GENERATION

condition='5'

# Convert MIDI files to MP3
for file in *.mid; do
    filename="${file%.*}"
    timidity "$file" -Ow -o - | lame - "${filename}.mp3"
done

#move the files
# destination folders
int_dir="../intermediate_files/${condition}/"
exp_dir="../experiment_stimuli/${condition}/"
fig_dir="../analysis_figs/${condition}/"

# create folder if it doesn't exist
mkdir -p "$int_dir"
mkdir -p "$exp_dir"
mkdir -p "$fig_dir"

mv *.mid *.pkl "$int_dir"
mv *.mp3 "$exp_dir"
mv *.png "$fig_dir"